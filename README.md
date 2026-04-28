# 🤿 Dive Gear Manager

A lightweight, browser-based app for scuba divers to track and manage their equipment.  
No installation or server required — just open `index.html` in any browser.

---

## Features

- **Add equipment** with fields for category, brand, model, serial number, purchase date, condition, and notes
- **Equipment categories** covering Breathing, Exposure Protection, Vision & Navigation, and Accessories
- **Condition tracking** — New, Excellent, Good, Fair, or Needs Service
- **120-day service countdown** — automatically calculates the next service date from the day an item is added, with a color-coded pill on each card:
  - 🔵 Blue — more than 30 days remaining
  - 🟠 Orange — service due within 30 days
  - 🔴 Red — overdue
- **Search** — filter your gear list by name, category, or brand
- **Persistent storage** — gear list is saved in `localStorage` and survives page refreshes

---

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start adding your dive gear

```bash
git clone https://github.com/SuperCowPrime/Diving_Assistant.git
cd Diving_Assistant
# open index.html in your browser
```

---

## Project Structure

```
Diving_Assistant/
├── index.html   # App layout and equipment form
├── style.css    # Ocean-themed styles
└── app.js       # Logic, localStorage, service countdown
```

---

## Changelog

### v0.2 — Service Countdown
- Added automatic 120-day service date on item creation
- "Next Service Due" field pre-filled in the form (editable)
- Color-coded countdown pill displayed on each gear card

### v0.1 — Initial Release
- Equipment input form with all core fields
- Gear list with search filtering
- Data persistence via localStorage
