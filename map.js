// ── Dive Map ──────────────────────────────────────────────────────────────────

const OVERPASS_URL  = 'https://overpass-api.de/api/interpreter';
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

let mapInstance    = null;   // Leaflet map object
let allFeatures    = [];     // raw results from last Overpass fetch
let mapMarkers     = [];     // active Leaflet markers
let activeMapFilter = 'all'; // 'all' | 'shop' | 'site'
let fetchController = null;  // AbortController for in-flight requests
let moveTimer       = null;

// ── Tab switching ─────────────────────────────────────────────────────────────

function switchAppTab(tab) {
  document.getElementById('equipment-pane').classList.toggle('hidden', tab !== 'equipment');
  document.getElementById('map-pane').classList.toggle('hidden', tab !== 'map');
  document.querySelectorAll('.app-tab').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tab)
  );
  if (tab === 'map') {
    initMap();
    // Leaflet needs a size recalculation after the pane becomes visible.
    setTimeout(() => { if (mapInstance) mapInstance.invalidateSize(); }, 120);
  }
}

// ── Map initialisation ────────────────────────────────────────────────────────

function initMap() {
  if (mapInstance) return;

  mapInstance = L.map('map', { zoomControl: true }).setView([20, 15], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(mapInstance);

  mapInstance.on('moveend', () => {
    clearTimeout(moveTimer);
    // Only auto-fetch when zoomed in enough to get useful results.
    if (mapInstance.getZoom() >= 9) {
      moveTimer = setTimeout(fetchFromMapCenter, 600);
    }
  });

  setMapStatus('Locating you…');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude: lat, longitude: lon } = pos.coords;
        mapInstance.setView([lat, lon], 12);
        fetchDiveLocations(lat, lon);
      },
      () => {
        setMapStatus('Location access denied. Search for a place above.');
      }
    );
  } else {
    setMapStatus('Geolocation not supported. Search for a place above.');
  }
}

// ── Overpass queries ──────────────────────────────────────────────────────────

function fetchFromMapCenter() {
  const c = mapInstance.getCenter();
  fetchDiveLocations(c.lat, c.lng);
}

async function fetchDiveLocations(lat, lon) {
  setMapStatus('Searching…');

  // Cancel any previous in-flight request.
  if (fetchController) fetchController.abort();
  fetchController = new AbortController();

  const radius = 40000; // 40 km
  const query = `
[out:json][timeout:25];
(
  node["sport"="diving"](around:${radius},${lat},${lon});
  way["sport"="diving"](around:${radius},${lat},${lon});
  node["shop"="scuba_diving"](around:${radius},${lat},${lon});
  node["shop"="diving"](around:${radius},${lat},${lon});
  node["leisure"="dive_centre"](around:${radius},${lat},${lon});
  node["amenity"="dive_centre"](around:${radius},${lat},${lon});
  node["tourism"="dive_site"](around:${radius},${lat},${lon});
  node["sport"="scuba_diving"](around:${radius},${lat},${lon});
);
out center;
  `.trim();

  try {
    const res = await fetch(OVERPASS_URL, {
      method:  'POST',
      body:    'data=' + encodeURIComponent(query),
      signal:  fetchController.signal,
    });
    const data = await res.json();
    allFeatures = data.elements || [];
    renderMarkers();
  } catch (err) {
    if (err.name !== 'AbortError') {
      setMapStatus('Could not load locations — check your connection.');
      console.error('[Dive Map] Overpass error:', err);
    }
  }
}

// ── Marker rendering ──────────────────────────────────────────────────────────

function classifyFeature(tags) {
  if (
    tags.tourism === 'dive_site' ||
    (tags.sport === 'diving' && !tags.shop && !tags.leisure && !tags.amenity)
  ) return 'site';
  return 'shop';
}

function makeIcon(type) {
  const emoji = type === 'site' ? '🤿' : '🏪';
  const cls   = type === 'site' ? 'map-marker-site' : 'map-marker-shop';
  return L.divIcon({
    className: '',
    html: `<div class="map-marker ${cls}">${emoji}</div>`,
    iconSize:   [36, 36],
    iconAnchor: [18, 36],
    popupAnchor:[0, -36],
  });
}

function renderMarkers() {
  // Remove old markers.
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];

  const visible = allFeatures.filter(el => {
    const type = classifyFeature(el.tags || {});
    return activeMapFilter === 'all' || activeMapFilter === type;
  });

  visible.forEach(el => {
    const lat  = el.lat  ?? el.center?.lat;
    const lon  = el.lon  ?? el.center?.lon;
    if (lat == null || lon == null) return;

    const tags      = el.tags || {};
    const type      = classifyFeature(tags);
    const name      = tags.name || tags['name:en'] || 'Unnamed location';
    const typeLabel = type === 'site' ? '🤿 Dive Site' : '🏪 Dive Shop / Centre';
    const addr      = [tags['addr:street'], tags['addr:housenumber'],
                       tags['addr:city'],   tags['addr:country']]
                       .filter(Boolean).join(' ');
    const phone     = tags.phone    || tags['contact:phone']   || '';
    const website   = tags.website  || tags['contact:website'] || tags.url || '';
    const hours     = tags.opening_hours || '';

    const popup = `
      <div class="map-popup">
        <div class="map-popup-name">${esc(name)}</div>
        <div class="map-popup-type">${typeLabel}</div>
        ${addr    ? `<div class="map-popup-row">📍 ${esc(addr)}</div>`    : ''}
        ${phone   ? `<div class="map-popup-row">📞 ${esc(phone)}</div>`   : ''}
        ${hours   ? `<div class="map-popup-row">🕐 ${esc(hours)}</div>`   : ''}
        ${website ? `<div class="map-popup-row">🌐 <a href="${esc(website)}" target="_blank" rel="noopener noreferrer">Visit website</a></div>` : ''}
      </div>`;

    const marker = L.marker([lat, lon], { icon: makeIcon(type) })
      .addTo(mapInstance)
      .bindPopup(popup, { maxWidth: 260 });
    mapMarkers.push(marker);
  });

  const n = mapMarkers.length;
  setMapStatus(
    n === 0
      ? 'No locations found in this area. Try zooming out or searching elsewhere.'
      : `Showing ${n} location${n !== 1 ? 's' : ''} — click a pin for details.`
  );
}

// ── Filter ────────────────────────────────────────────────────────────────────

function setMapFilter(filter) {
  activeMapFilter = filter;
  document.querySelectorAll('.map-filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === filter)
  );
  renderMarkers();
}

// ── Search ────────────────────────────────────────────────────────────────────

async function mapSearch() {
  const q = document.getElementById('map-search-input').value.trim();
  if (!q) return;
  setMapStatus('Searching for "' + esc(q) + '"…');
  try {
    const res  = await fetch(
      `${NOMINATIM_URL}?q=${encodeURIComponent(q)}&format=json&limit=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();
    if (!data.length) { setMapStatus('Place not found. Try a different search.'); return; }
    const { lat, lon } = data[0];
    mapInstance.setView([parseFloat(lat), parseFloat(lon)], 12);
    fetchDiveLocations(lat, lon);
  } catch (err) {
    setMapStatus('Search failed — check your connection.');
    console.error('[Dive Map] Nominatim error:', err);
  }
}

// ── Locate me ─────────────────────────────────────────────────────────────────

function mapLocateMe() {
  if (!navigator.geolocation) { setMapStatus('Geolocation not supported by your browser.'); return; }
  setMapStatus('Locating you…');
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude: lat, longitude: lon } = pos.coords;
      mapInstance.setView([lat, lon], 12);
      fetchDiveLocations(lat, lon);
    },
    () => setMapStatus('Location access denied.')
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function setMapStatus(msg) {
  const el = document.getElementById('map-status');
  if (el) el.textContent = msg;
}

function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
