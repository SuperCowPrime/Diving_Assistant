const GEAR_DATA = {

  brands: [
    'Scubapro', 'Mares', 'Cressi', 'Aqualung', 'Apeks',
    'Atomic Aquatics', 'Suunto', 'Shearwater', 'Oceanic', 'Hollis',
    'Fourth Element', 'Waterproof', 'Dive Rite', 'OMS', 'Seac',
    'Beuchat', 'Poseidon', 'Salvimar', 'Bare', 'Henderson',
    'DUI', 'Otter Watersports', 'Santi', 'Ursuit', 'Sopras Sub',
  ],

  products: {
    'BCD': [
      'Scubapro Hydros Pro', 'Scubapro Litehawk', 'Scubapro Ladyhawk',
      'Scubapro Knighthawk', 'Scubapro Glide Auto Air', 'Scubapro Go BCD',
      'Mares Bolt', 'Mares Kaila', 'Mares Dragon', 'Mares Hybrid',
      'Mares Attack', 'Mares Prestige',
      'Aqualung Axiom', 'Aqualung Dimension', 'Aqualung Pro HD', 'Aqualung Zuma',
      'Aqualung Soul i3', 'Aqualung Outlaw',
      'Cressi Start', 'Cressi Aria', 'Cressi Leonardo', 'Cressi Travelight',
      'Cressi Patrol', 'Cressi Patrol X',
      'Apeks Black Ice', 'Apeks TL3', 'Apeks MTX-R',
      'Hollis SMS 75', 'Hollis F1', 'Hollis HD 200',
      'Dive Rite Transpac XT', 'Dive Rite Nomad XT',
      'OMS IQ Lite', 'OMS Profile II',
    ],

    'Regulator': [
      'Scubapro MK25 EVO / A700', 'Scubapro MK17 EVO / A700',
      'Scubapro MK25 EVO / S620 Ti', 'Scubapro MK11 / C370',
      'Scubapro MK2 EVO / R195', 'Scubapro MK25 EVO / D420',
      'Mares 72X Extreme', 'Mares Prestige 22X', 'Mares Abyss 52X',
      'Mares Instinct 15X', 'Mares Proton Ice',
      'Apeks XTX200', 'Apeks XTX50', 'Apeks MTX-R', 'Apeks ATX200',
      'Apeks DST', 'Apeks FSR',
      'Aqualung Legend LX', 'Aqualung Mikron', 'Aqualung Titan LX',
      'Aqualung Core Supreme', 'Aqualung Calypso',
      'Atomic Aquatics M1', 'Atomic Aquatics T3', 'Atomic Aquatics Z3',
      'Atomic Aquatics B2', 'Atomic Aquatics Cobalt 2',
      'Poseidon Cyklon 5000', 'Poseidon MK6',
      'Cressi MC9-SC', 'Cressi Ellipse MC9', 'Cressi XS Compact',
      'Hollis 150 / 200', 'Hollis 500SE',
    ],

    'Octopus': [
      'Scubapro R195 Octopus', 'Scubapro C200 Octopus',
      'Mares Abyss 22 Octo', 'Mares Instinct Octo',
      'Apeks XTX40 Octopus', 'Apeks XTX50 Octopus',
      'Aqualung Calypso Octopus', 'Aqualung Titan Octopus',
      'Atomic Aquatics Z1 Octopus', 'Atomic Aquatics SS1 Octopus',
      'Cressi XS Compact Octopus',
    ],

    'Tank': [
      'Faber HP100 Steel', 'Faber HP120 Steel', 'Faber HP80 Steel',
      'Luxfer S80 Aluminum', 'Luxfer S40 Aluminum', 'Luxfer S63 Aluminum',
      'Catalina S80 Aluminum', 'Catalina S30 Aluminum',
      'Worthington Steel 100', 'Worthington Steel 120',
      'Scubapro 12L Steel', 'Scubapro 15L Steel',
      'Mares 12L Steel', 'Mares 15L Steel',
      'Cressi 12L Steel', 'Cressi 15L Steel',
      'Dive Rite Oxygen Argon Tank', 'Dive Rite Sling Cylinder',
    ],

    'Wetsuit': [
      'Scubapro Everflex 5/3mm', 'Scubapro Everflex 7mm', 'Scubapro Everflex 3mm',
      'Scubapro Definition 5/3mm',
      'Mares Flexa 8/6/5mm', 'Mares Flexa 3/2mm', 'Mares Pure Instinct 5/3mm',
      'Mares Pioneer 5mm', 'Mares Reef 3mm',
      'Fourth Element Xenos 5mm', 'Fourth Element Proteus 5mm',
      'Fourth Element Hydro 3mm',
      'Cressi Lontra 5mm', 'Cressi Lido 2.5mm', 'Cressi Triton 5/3mm',
      'Aqualung Bali 3mm', 'Aqualung HydroFlex 3mm', 'Aqualung Sphera 5mm',
      'Bare Reactive 5/4mm', 'Bare Evoke 3/2mm', 'Bare Velocity Ultra 5mm',
      'Henderson 5mm Jumpsuit', 'Henderson 7mm Two-Piece',
      'Waterproof W3 2.5mm', 'Waterproof W4 5mm', 'Waterproof W7 5/3mm',
    ],

    'Drysuit': [
      'Scubapro Evertec Trilam',
      'Mares XR3 Neoprene', 'Mares Drysuit Explorer',
      'Fourth Element Argonaut 2.0', 'Fourth Element Tethys',
      'Waterproof D1X Hybrid', 'Waterproof D7X Iceberg',
      'Santi E.Motion Plus', 'Santi Flex', 'Santi BZ400',
      'DUI TLS350', 'DUI CF200X', 'DUI Flex Explore',
      'Otter Watersports Britannic', 'Otter Watersports Mer',
      'Ursuit Aqua 4-TEC', 'Ursuit Nordic 4-TEC',
      'Bare HD Pro', 'Bare SB System',
      'Dive Rite EXP Suit', 'Hollis Neotek',
    ],

    'Hood': [
      'Scubapro 5mm Hood', 'Scubapro 7mm Hood',
      'Mares Trilastic Hood 6mm', 'Mares Pure Instinct Hood 2mm',
      'Fourth Element Arctic Hood', 'Fourth Element 5mm Hood',
      'Cressi 5mm Hood', 'Cressi 3mm Hood',
      'Aqualung Admiral Hood 5mm', 'Aqualung Bali Hood 3mm',
      'Bare 5mm Dive Hood', 'Henderson 5mm Hood',
    ],

    'Gloves': [
      'Scubapro 5-Finger Glove 5mm', 'Scubapro 3-Finger Dry Glove',
      'Mares Flexa Classic 5mm', 'Mares Flexa Stretch 2mm',
      'Fourth Element 5mm Gloves', 'Fourth Element Pelagic Gloves',
      'Cressi High Stretch 3mm', 'Cressi Tropical Gloves 2mm',
      'Aqualung Admiral Glove 5mm', 'Aqualung Bali Glove 3mm',
      'Bare 5mm Gauntlet Glove', 'Waterproof G1 3-Finger Glove',
      'Santi Flex Dry Glove System',
    ],

    'Boots': [
      'Scubapro Delta Boot 5mm', 'Scubapro Rock Boot 7mm',
      'Mares Rock Boot 5mm', 'Mares Classic Boot 5mm',
      'Cressi Isla Boot 5mm', 'Cressi Minorca Boot 3mm',
      'Aqualung Superboot 5mm', 'Aqualung Superzip Boot',
      'Fourth Element Boot 5mm',
      'Bare Rock Boot 7mm', 'Henderson Boot 7mm',
      'Waterproof Boot B1 5mm',
    ],

    'Mask': [
      'Scubapro Synergy 2 Twin', 'Scubapro D-Mask', 'Scubapro Zoom Evo',
      'Scubapro Spectra Mini',
      'Mares X-Vision Ultra', 'Mares Wahoo', 'Mares Vento', 'Mares X-Vu',
      'Mares i3',
      'Cressi Big Eyes Evolution', 'Cressi Nano', 'Cressi Calibro',
      'Cressi Lince', 'Cressi Perla',
      'Aqualung Reveal X2', 'Aqualung Reveal X1', 'Aqualung Sphera X',
      'Aqualung Look 2',
      'Atomic Aquatics SubFrame', 'Atomic Aquatics Venom',
      'Apeks VX1', 'Apeks Lifemask',
      'Hollis M3', 'Seac Touch',
    ],

    'Fins': [
      'Scubapro Jet Sport', 'Scubapro Seawing Nova 2', 'Scubapro Go Sport',
      'Scubapro Twin Jet Max', 'Scubapro Turtle Fin',
      'Mares Avanti Quattro Plus', 'Mares X-Stream', 'Mares Razor Pro',
      'Mares Volo Race', 'Mares Bora',
      'Cressi Pro Light', 'Cressi Reaction Pro', 'Cressi Frog Plus',
      'Cressi Palau Long', 'Cressi Agua',
      'Aqualung Hotshot', 'Aqualung Express', 'Aqualung Stratos 3',
      'Aqualung Slingshot',
      'Apeks RK3', 'Apeks Liquid Skin', 'Apeks Force 3',
      'Hollis F1 Fin', 'Atomic Aquatics Split Fin',
      'OMS Slipstream', 'Dive Rite XT Fins',
    ],

    'Compass': [
      'Scubapro FS-2 Compass', 'Scubapro Digital 330 Compass',
      'Mares Compass Tactical', 'Mares Compass Classic',
      'Suunto SK-8 Compass', 'Suunto SK-7 Compass',
      'Aqualung Micro Compass', 'Cressi Big Eye Compass',
      'Seac Compass', 'Oceanic Compass',
    ],

    'Dive Computer': [
      'Suunto D5', 'Suunto Eon Core', 'Suunto D6i Novo', 'Suunto D9TX',
      'Suunto Zoop Novo', 'Suunto Vyper Novo', 'Suunto Cobra 3',
      'Shearwater Perdix 2', 'Shearwater Teric', 'Shearwater Peregrine TX',
      'Shearwater NERD 2', 'Shearwater TERN',
      'Mares Quad Air', 'Mares Puck Pro Plus', 'Mares Smart Air',
      'Mares Genius', 'Mares Horizon',
      'Oceanic Geo 4.0', 'Oceanic Veo 4.0', 'Oceanic Pro Plus X',
      'Oceanic OCi',
      'Cressi Goa', 'Cressi Donatello', 'Cressi Drake', 'Cressi Cartesio',
      'Aqualung i300C', 'Aqualung i200C', 'Aqualung i770R',
      'Aqualung i450T', 'Aqualung Firstlook',
      'Garmin Descent Mk3i', 'Garmin Descent Mk2i',
      'Scubapro Aladin Sport Matrix', 'Scubapro Aladin H Matrix',
      'Apeks DSX', 'Hollis DG03',
    ],

    'Dive Light': [
      'Scubapro Nova 720', 'Scubapro Nova 200R',
      'Mares EOS 12RZ', 'Mares EOS 10RZ', 'Mares EOS 3RZ',
      'Light Monkey 10W HID', 'Light Monkey 35W HID',
      'Underwater Kinetics SL4 eLED', 'Underwater Kinetics Sunlight',
      'Bigblue AL2600XWP', 'Bigblue TL4000P', 'Bigblue CF2800P',
      'Tovatec STROBE 5200', 'Tovatec FUSION 2500',
      'Seac R1', 'Seac Primo',
      'OrcaTorch D910V', 'OrcaTorch D630',
      'Hollis LED 3', 'Cressi Gamma', 'Aqualung Nova',
    ],

    'Surface Marker Buoy': [
      'Scubapro Hybrid SMB', 'Scubapro Safety Tube',
      'Mares Safety Tube SMB', 'Cressi SMB',
      'Apeks WTX SMB', 'Fourth Element SMB',
      'Halcyon SMB', 'OMS SMB', 'Dive Rite SMB',
      'Seac Reef SMB', 'XS Scuba SMB',
      'Aqualung SMB Lift Bag',
    ],

    'Knife/Cutter': [
      'Scubapro K6 Knife', 'Scubapro Mako Knife',
      'Mares Inox 20 Knife', 'Mares Rock Knife',
      'Cressi Borg Knife', 'Cressi Vigo Knife', 'Cressi Lima Knife',
      'Aqualung Squeeze Lock Knife', 'Aqualung Big Lock Knife',
      'Atomic Aquatics Ti6 Knife', 'Atomic Aquatics Ti5 Knife',
      'Dive Rite Z-Knife', 'Halcyon Titanium Cutter',
      'Oceanic Mako Knife', 'Tusa FK-11 Knife',
    ],

    'Weight System': [
      'Scubapro Classic Weight Belt', 'Scubapro Quick Release Belt',
      'Mares Marseillaise Belt', 'Mares Rubber Weight Belt',
      'Aqualung Weight Belt', 'Cressi Weight Belt',
      'Hollis Integrated Weights', 'OMS Integrated Weight System',
      'Scubapro Coated Lead Weight 1kg', 'Scubapro Coated Lead Weight 2kg',
      'Mares Coated Weight 1kg', 'Mares Coated Weight 2kg',
      'XS Scuba Stainless Steel Backplate Weights',
    ],

    'Underwater Camera': [
      'GoPro HERO12 Black', 'GoPro HERO11 Black',
      'Sony RX100 VII + Nauticam Housing', 'Sony A7C + Nauticam Housing',
      'Olympus TG-7 + PT-060 Housing',
      'Canon G7X III + Ikelite Housing', 'Canon R50 + Nauticam Housing',
      'Nauticam NA-A7IV Housing', 'Nauticam NA-RX100VII Housing',
      'Ikelite 200DL Housing', 'Ikelite DS161 Strobe',
      'Sea & Sea MDX-A7IV Housing', 'Sea & Sea YS-D3 Strobe',
      'Fantasea FG7X III Housing',
      'Backscatter Optical Snoot', 'Backscatter MF-1 Focus Light',
      'Kraken Hydra 5000+ Video Light', 'BigBlue AL1200XWP Video Light',
    ],

    'Dive Bag': [
      'Scubapro Caravan Roller Bag', 'Scubapro Transport Bag',
      'Mares Cruise Backpack Pro', 'Mares Cruise Roller 130L',
      'Cressi Gara Roller', 'Cressi Sub Bag',
      'Aqualung Explorer Roller', 'Aqualung Nautilus Bag',
      'Fourth Element Expedition Bag', 'Fourth Element Drysuit Bag',
      'Hollis Roller Bag', 'OMS Mesh Bag',
      'XS Scuba Mesh Backpack', 'Santi Dry Bag',
      'Stahlsac Mesh Pro Bag', 'Stahlsac Storm Backpack',
      'Bare Roller Bag', 'IST Proline Mesh Bag',
    ],

    'Other': [],
  },
};

// ── Select population ─────────────────────────────────────────────────────────

function populateBrandSelect() {
  const sel = document.getElementById('brand');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = '<option value="">-- Select brand --</option>' +
    GEAR_DATA.brands
      .map(b => `<option value="${b}"${b === current ? ' selected' : ''}>${b}</option>`)
      .join('');
}

function populateItemSelect(preserveValue) {
  const sel = document.getElementById('item-name');
  if (!sel) return;
  const category = document.getElementById('category').value;
  const brand    = document.getElementById('brand').value;

  let products = category ? (GEAR_DATA.products[category] || []) : Object.values(GEAR_DATA.products).flat();
  if (brand) products = products.filter(p => p.toLowerCase().startsWith(brand.toLowerCase()));

  let placeholder;
  if (!category && !brand)      placeholder = '-- Select category &amp; brand first --';
  else if (!products.length)    placeholder = '-- No products found for this selection --';
  else                          placeholder = '-- Select model --';

  const prev = preserveValue || sel.value;
  sel.innerHTML = `<option value="">${placeholder}</option>` +
    products.map(p => `<option value="${p}"${p === prev ? ' selected' : ''}>${p}</option>`).join('');
}

// Inject a custom option into the item select (used by edit mode for legacy values)
function ensureItemOption(value) {
  if (!value) return;
  const sel = document.getElementById('item-name');
  if (!sel) return;
  const exists = Array.from(sel.options).some(o => o.value === value);
  if (!exists) {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = value + ' (custom)';
    sel.appendChild(opt);
  }
  sel.value = value;
}

// Category change → reset brand & item
document.getElementById('category').addEventListener('change', () => {
  document.getElementById('brand').value = '';
  populateItemSelect('');
});

// Brand change → refresh item list, keep current item if still valid
document.getElementById('brand').addEventListener('change', () => {
  populateItemSelect('');
});

populateBrandSelect();
populateItemSelect('');
