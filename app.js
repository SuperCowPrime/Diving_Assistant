const form = document.getElementById('gear-form');
const gearList = document.getElementById('gear-list');
const gearCount = document.getElementById('gear-count');
const searchInput = document.getElementById('search');

const SERVICE_INTERVAL_DAYS = 120;

function dateInDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function prefillNextService() {
  const field = document.getElementById('next-service');
  if (!field.value) field.value = dateInDays(SERVICE_INTERVAL_DAYS);
}

let gear = JSON.parse(localStorage.getItem('diveGear') || '[]');

function saveGear() {
  localStorage.setItem('diveGear', JSON.stringify(gear));
}

function conditionClass(condition) {
  return 'condition-' + condition.replace(/\s+/g, '-');
}

function serviceStatus(nextService) {
  if (!nextService) return '';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(nextService);
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  let cls, icon, label;
  if (diff < 0) {
    cls = 'service-counter overdue';
    icon = '⚠';
    label = `Overdue by ${Math.abs(diff)} day${Math.abs(diff) !== 1 ? 's' : ''}`;
  } else if (diff === 0) {
    cls = 'service-counter overdue';
    icon = '⚠';
    label = 'Due today!';
  } else if (diff <= 30) {
    cls = 'service-counter soon';
    icon = '⏰';
    label = `${diff} day${diff !== 1 ? 's' : ''} until service`;
  } else {
    cls = 'service-counter ok';
    icon = '🔧';
    label = `${diff} days until service`;
  }

  return `<div class="${cls}">
    <span class="counter-icon">${icon}</span>
    <span class="counter-label">${label}</span>
    <span class="counter-date">${formatDate(nextService)}</span>
  </div>`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function renderGear(items) {
  if (items.length === 0) {
    gearList.innerHTML = '<p class="empty-state">No equipment found.</p>';
    return;
  }

  gearList.innerHTML = items.map(item => `
    <div class="gear-item" data-id="${item.id}">
      <div class="gear-item-main">
        <div class="gear-item-title">
          ${item.name}
          <span class="condition-pill ${conditionClass(item.condition)}">${item.condition}</span>
        </div>
        <div class="gear-item-meta">
          <span>📂 ${item.category}</span>
          ${item.brand ? `<span>🏷 ${item.brand}</span>` : ''}
          ${item.purchaseDate ? `<span>🛒 Bought: ${formatDate(item.purchaseDate)}</span>` : ''}
          ${item.lastService ? `<span>🔧 Serviced: ${formatDate(item.lastService)}</span>` : ''}
          ${item.serial ? `<span>🔢 S/N: ${item.serial}</span>` : ''}
        </div>
        ${item.nextService ? `<div class="gear-item-meta">${serviceStatus(item.nextService)}</div>` : ''}
        ${item.notes ? `<div class="gear-item-notes">${item.notes}</div>` : ''}
      </div>
      <div class="gear-item-actions">
        <button class="btn-icon delete" title="Delete" onclick="deleteItem('${item.id}')">🗑</button>
      </div>
    </div>
  `).join('');
}

function updateUI() {
  const query = searchInput.value.toLowerCase();
  const filtered = gear.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    (item.brand || '').toLowerCase().includes(query)
  );
  gearCount.textContent = gear.length;
  renderGear(filtered);
}

function deleteItem(id) {
  if (!confirm('Remove this item from your gear list?')) return;
  gear = gear.filter(item => item.id !== id);
  saveGear();
  updateUI();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);

  const newItem = {
    id: crypto.randomUUID(),
    category:     data.get('category'),
    name:         data.get('item-name').trim(),
    brand:        data.get('brand').trim(),
    purchaseDate: data.get('purchase-date'),
    condition:    data.get('condition'),
    lastService:  data.get('last-service'),
    nextService:  data.get('next-service') || dateInDays(SERVICE_INTERVAL_DAYS),
    serial:       data.get('serial').trim(),
    notes:        data.get('notes').trim(),
  };

  gear.unshift(newItem);
  saveGear();
  updateUI();
  form.reset();
  prefillNextService();
});

searchInput.addEventListener('input', updateUI);

prefillNextService();
updateUI();
