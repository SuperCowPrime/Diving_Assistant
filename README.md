# 🤿 Dive Gear Manager

A lightweight, browser-based app for scuba divers to track and manage their equipment.  
No installation or server required — just open `index.html` in any browser.

---

## Features

- **User accounts** — register and log in with a username and password; each user's gear is stored separately
- **Profiles** — each user can create multiple named profiles (e.g. "Recreational", "Tech", "Photography"); equipment is assigned to a profile when added
- **Profile filter** — toggle one, multiple, or all profiles to filter the gear list; an "Unassigned" option groups gear not linked to any profile
- **Add equipment** with fields for category, brand, model, serial number, purchase date, condition, profile, and notes
- **Equipment categories** covering Breathing, Exposure Protection, Vision & Navigation, and Accessories
- **Condition tracking** — New, Excellent, Good, Fair, or Needs Service
- **Per-category service countdown** — each item gets a smart service due date based on its type, calculated from the last service date (or purchase date if never serviced):
  - 🔵 Blue — more than 30 days remaining
  - 🟠 Orange — service due within 30 days
  - 🔴 Red — overdue
- **Edit equipment** — ✏️ button on each card pre-fills the form for in-place editing; cancel at any time without losing changes
- **Mark as Serviced** — one click resets the countdown from today and clears a "Needs Service" condition
- **Maintenance guide** — click any gear card to open a step-by-step maintenance guide tailored to that equipment type
- **Search** — filter your gear list by name, category, or brand
- **Persistent storage** — gear list and profiles saved in `localStorage` and survive page refreshes

---

## Service Intervals by Category

| Interval | Equipment |
|---|---|
| Every 6 months | Knife / Cutter |
| Annual | BCD, Regulator, Octopus, Tank, Drysuit, Dive Computer, Dive Light, Underwater Camera, Weight System |
| Every 2 years | Wetsuit, Hood, Gloves, Boots, Mask, Fins, Compass, SMB, Dive Bag |

The next service date is calculated as: **last service date + interval**, falling back to **purchase date + interval**. The form field updates automatically when you change the category, last service, or purchase date.

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
├── index.html      # App layout, auth screen, and equipment form
├── style.css       # Ocean-themed styles
├── auth.css        # Login and register screen styles
├── app.js          # Gear logic, localStorage, service countdown
├── auth.js         # User registration, login, session management
└── maintenance.js  # Per-category maintenance instructions
```

---

## Changelog

### v0.9 — Searchable Brand & Item Dropdowns
- Brand and Item Name / Model fields replaced with custom searchable dropdowns
- Dataset of 25 real scuba manufacturers (Scubapro, Mares, Cressi, Aqualung, Apeks, Suunto, Shearwater, and more)
- 200+ real products across all 19 equipment categories
- Options are alphabetically sorted; typing filters results live with match text highlighted in blue
- Selecting a category + brand narrows the item list to only relevant products
- Typing a name not in the list is still accepted (free-text entry)
- Edit mode correctly pre-fills both visible text inputs; Cancel clears them cleanly

### v0.8 — Edit Equipment
- ✏️ button on each gear card opens the form in edit mode, pre-filled with all existing values
- Form title changes to "Edit Equipment" and submit button reads "Save Changes"
- Cancel button exits edit mode and restores the blank add form without losing any data

### v0.7 — Profiles
- Each registered user can create multiple named profiles (e.g. "Recreational", "Tech Diving", "Photography")
- Profiles are isolated per user — one user's profiles never appear for another
- Equipment can be assigned to a profile when added via the "Assign to Profile" dropdown
- Profile filter bar above the gear list: click **All** to see everything, or toggle individual profiles; multi-select is supported
- An **Unassigned** filter button appears automatically when any gear has no profile
- Profile badge shown on each gear card so you can identify which kit it belongs to at a glance
- Deleting a profile unassigns its gear rather than deleting it

### v0.6 — User Accounts & Login
- Register with username (min 3 chars) and password (min 6 chars)
- Passwords hashed with SHA-256 via the Web Crypto API before storage
- Each user's gear stored separately — fully isolated between accounts
- Session kept in `sessionStorage` and cleared on browser close
- Logout button in the header
- Bug fixes: stale error messages cleared on tab switch, success message visible for 1.5s before redirecting to login, password field cleared after registration

### v0.5 — Mark as Serviced
- Added ✅ button on each gear card to confirm a service was done
- Resets last service to today and recalculates next service date
- Automatically clears "Needs Service" condition back to "Good"

### v0.4 — Smart Service Date Calculation
- Next service is now based on last service date, falling back to purchase date
- Form fields update the next service date live as you type

### v0.3 — Maintenance Guides & Per-Category Intervals
- Clicking a gear card opens a step-by-step maintenance modal for that equipment type
- Service intervals are now per-category instead of a fixed 120 days
- Countdown pill shows the interval label (e.g. "Annual service", "Every 2 years")

### v0.2 — Service Countdown
- Added automatic service date on item creation
- Color-coded countdown pill on each gear card

### v0.1 — Initial Release
- Equipment input form with all core fields
- Gear list with search filtering
- Data persistence via localStorage
