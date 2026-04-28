const form = document.getElementById('gear-form');
const gearList = document.getElementById('gear-list');
const gearCount = document.getElementById('gear-count');
const searchInput = document.getElementById('search');

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
  const due = new Date(nextService);
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return `<span class="service-overdue">⚠ Service overdue by ${Math.abs(diff)} days</span>`;
  if (diff <= 30) return `<span class="service-warn">⏰ Service due in ${diff} days</span>`;
  return `<span>Next service: ${formatDate(nextService)}</span>`;
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
    nextService:  data.get('next-service'),
    serial:       data.get('serial').trim(),
    notes:        data.get('notes').trim(),
  };

  gear.unshift(newItem);
  saveGear();
  updateUI();
  form.reset();
});

searchInput.addEventListener('input', updateUI);

updateUI();
