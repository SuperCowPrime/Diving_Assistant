async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function getUsers() {
  return JSON.parse(localStorage.getItem('diveUsers') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('diveUsers', JSON.stringify(users));
}

function getCurrentUser() {
  return sessionStorage.getItem('diveSession') || null;
}

function setCurrentUser(username) {
  sessionStorage.setItem('diveSession', username);
}

function clearSession() {
  sessionStorage.removeItem('diveSession');
}

async function registerUser(username, password) {
  const users = getUsers();
  if (users[username]) return { ok: false, error: 'Username already taken.' };
  const passwordHash = await hashPassword(password);
  users[username] = { passwordHash };
  saveUsers(users);
  return { ok: true };
}

async function loginUser(username, password) {
  const users = getUsers();
  if (!users[username]) return { ok: false, error: 'Username not found.' };
  const passwordHash = await hashPassword(password);
  if (users[username].passwordHash !== passwordHash) return { ok: false, error: 'Incorrect password.' };
  return { ok: true };
}

// ── UI ──────────────────────────────────────────────────────────────────────

const authScreen  = document.getElementById('auth-screen');
const appScreen   = document.getElementById('app-screen');
const userDisplay = document.getElementById('user-display');

function showApp(username) {
  authScreen.classList.add('hidden');
  appScreen.classList.remove('hidden');
  userDisplay.textContent = username;
}

function showAuth() {
  appScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
  document.getElementById('login-error').textContent = '';
  document.getElementById('register-error').textContent = '';
  document.getElementById('register-success').textContent = '';
}

function switchTab(tab) {
  document.getElementById('login-tab').classList.toggle('active', tab === 'login');
  document.getElementById('register-tab').classList.toggle('active', tab === 'register');
  document.getElementById('login-form-section').classList.toggle('hidden', tab !== 'login');
  document.getElementById('register-form-section').classList.toggle('hidden', tab !== 'register');
}

document.getElementById('login-tab').addEventListener('click', () => switchTab('login'));
document.getElementById('register-tab').addEventListener('click', () => switchTab('register'));

document.getElementById('login-form').addEventListener('submit', async e => {
  e.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const errorEl  = document.getElementById('login-error');
  errorEl.textContent = '';

  const result = await loginUser(username, password);
  if (!result.ok) {
    errorEl.textContent = result.error;
    return;
  }
  setCurrentUser(username);
  document.getElementById('login-form').reset();
  showApp(username);
  initGear();
});

document.getElementById('register-form').addEventListener('submit', async e => {
  e.preventDefault();
  const username  = document.getElementById('reg-username').value.trim();
  const password  = document.getElementById('reg-password').value;
  const confirm   = document.getElementById('reg-confirm').value;
  const errorEl   = document.getElementById('register-error');
  const successEl = document.getElementById('register-success');
  errorEl.textContent = '';
  successEl.textContent = '';

  if (username.length < 3) {
    errorEl.textContent = 'Username must be at least 3 characters.';
    return;
  }
  if (password.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters.';
    return;
  }
  if (password !== confirm) {
    errorEl.textContent = 'Passwords do not match.';
    return;
  }

  const result = await registerUser(username, password);
  if (!result.ok) {
    errorEl.textContent = result.error;
    return;
  }
  document.getElementById('register-form').reset();
  successEl.textContent = 'Account created! You can now log in.';
  switchTab('login');
  document.getElementById('login-username').value = username;
});

document.getElementById('logout-btn').addEventListener('click', () => {
  clearSession();
  showAuth();
});

// ── Init ─────────────────────────────────────────────────────────────────────

const existing = getCurrentUser();
if (existing) {
  showApp(existing);
} else {
  showAuth();
}
