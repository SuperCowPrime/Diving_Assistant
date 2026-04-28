const MAINTENANCE = {
  'BCD': {
    icon: '🦺',
    steps: [
      { title: 'Rinse after every dive', detail: 'Submerge in fresh water for at least 5 minutes. Inflate the bladder slightly and slosh water inside to flush out salt and sand, then drain fully.' },
      { title: 'Inflate & check bladder', detail: 'Fully inflate orally and leave for 10 minutes. Any loss of pressure indicates a leak — mark and have it inspected by a technician.' },
      { title: 'Inspect dump valves', detail: 'Pull each dump valve cord and check for cracks, stiffness, or debris. Rinse the valve seats and ensure they seat flush.' },
      { title: 'Check inflator mechanism', detail: 'Press both inflate and deflate buttons several times while rinsing. They should click cleanly and not stick. Flush with fresh water.' },
      { title: 'Inspect webbing & buckles', detail: 'Look for fraying, UV damage, or cracked plastic. Test all quick-release buckles for smooth operation.' },
      { title: 'Dry & store properly', detail: 'Hang in a cool, shaded place. Store inflated to about 30% to keep the bladder walls from sticking together.' },
      { title: 'Annual professional service', detail: 'Have a certified technician inspect the bladder, valves, and inflator annually or every 100 dives.' },
    ]
  },
  'Regulator': {
    icon: '🫁',
    steps: [
      { title: 'Cap the dust cap before rinsing', detail: 'Always attach the dust cap while it is dry before immersing in rinse water. Water forced into the first stage can cause internal corrosion.' },
      { title: 'Rinse with fresh water', detail: 'Soak in fresh water for 5–10 minutes. Never press the purge button while rinsing — this can push water into the first stage.' },
      { title: 'Check mouthpiece & exhaust tee', detail: 'Inspect for cracks, bite-through marks, or tears. Replace if damaged — a leaking mouthpiece is a safety hazard.' },
      { title: 'Inspect hoses', detail: 'Run your fingers along all hoses checking for bulges, abrasion, or cracking near the fittings. Replace any hose showing wear.' },
      { title: 'Check second-stage breathing', detail: 'Breathe through the regulator out of water. It should deliver air with light inhalation effort and no free-flow at rest.' },
      { title: 'Dry before storing', detail: 'Hang the first stage up and allow all hoses to drain and dry fully before coiling loosely for storage.' },
      { title: 'Annual service by technician', detail: 'Regulators must be serviced annually or per manufacturer schedule — internal O-rings and seats degrade even without use.' },
    ]
  },
  'Octopus': {
    icon: '🐙',
    steps: [
      { title: 'Rinse same as primary regulator', detail: 'Treat it identically to your primary — cap the dust cap dry, soak in fresh water, and never push the purge while rinsing.' },
      { title: 'Check bright yellow color', detail: 'Ensure the octopus is still clearly yellow/bright for easy identification by a buddy in an emergency. Re-tape or replace if faded.' },
      { title: 'Inspect mouthpiece', detail: 'Look for cracks or deterioration. The octopus mouthpiece often gets less use and can become brittle faster.' },
      { title: 'Test breathing resistance', detail: 'Breathe through it — effort should be comparable to your primary second stage.' },
      { title: 'Ensure secure mounting', detail: 'Check the holder or clip keeps it in the triangle zone (between chin and navel) for easy buddy access.' },
      { title: 'Service with primary regulator', detail: 'Service the octopus at the same interval as your primary regulator — annually or per manufacturer recommendation.' },
    ]
  },
  'Tank': {
    icon: '🫙',
    steps: [
      { title: 'Rinse the exterior', detail: 'Rinse with fresh water after every dive, paying attention to the valve threads and any crevices where salt can accumulate.' },
      { title: 'Store with residual pressure', detail: 'Never store a tank completely empty — keep at least 10–15 bar inside to prevent moisture ingress and valve contamination.' },
      { title: 'Inspect the valve', detail: 'Check the O-ring seat for scoring or debris. Turn the valve fully open and check for smooth operation and no leaks.' },
      { title: 'Check for corrosion or dents', detail: 'Inspect the exterior for rust (steel) or white oxidation (aluminum), and any dents or gouges. Remove paint to inspect steel tanks annually.' },
      { title: 'Visual inspection (VIP) — annual', detail: 'A certified inspector must visually inspect the interior annually. Do not fill a tank without a current VIP sticker.' },
      { title: 'Hydrostatic test — every 5 years', detail: 'Tanks must undergo a hydrostatic pressure test by a certified facility every 5 years. Check the stamp on the tank shoulder.' },
    ]
  },
  'Wetsuit': {
    icon: '🩱',
    steps: [
      { title: 'Rinse inside and out', detail: 'Turn the suit inside out and rinse both sides with fresh water. Salt crystals trapped in neoprene accelerate deterioration.' },
      { title: 'Use wetsuit shampoo', detail: 'Once a month (or after heavy use) wash with a neoprene-specific cleaner to remove body oils, sunscreen, and bacteria.' },
      { title: 'Dry inside out first', detail: 'Hang on a wide hanger inside out in the shade to dry the inner lining first, then turn right side out to dry the exterior.' },
      { title: 'Avoid direct sunlight & heat', detail: 'UV and heat degrade neoprene rapidly. Never leave a wetsuit in a hot car or dry in direct sun.' },
      { title: 'Inspect zips & seams', detail: 'Check zip teeth for corrosion and apply zip lubricant (wax or silicon spray). Check glued-and-blind-stitched seams for separation.' },
      { title: 'Store flat or on a wide hanger', detail: 'Never fold — creases crack the neoprene. Use a thick wetsuit hanger if hanging vertically.' },
    ]
  },
  'Drysuit': {
    icon: '🧥',
    steps: [
      { title: 'Rinse all surfaces', detail: 'Rinse suit, seals, zip, and valves thoroughly with fresh water. Saltwater left on latex seals causes rapid deterioration.' },
      { title: 'Lubricate the zip', detail: 'After every dive, apply approved zip wax or lubricant along the full length of the zip. Work it in with your fingers. Never use silicone on a plastic zip.' },
      { title: 'Inspect latex seals', detail: 'Check neck and wrist seals for tears, thinning, or cracks. Hold them up to light to spot weak spots. Replace at first sign of damage.' },
      { title: 'Test inflate & exhaust valves', detail: 'Press the exhaust valve button and check it springs back cleanly. Inflate the suit slightly and verify it holds pressure for several minutes.' },
      { title: 'Clean inside the suit', detail: 'Use a drysuit-specific inner wash every few months to prevent bacteria and odors from body perspiration.' },
      { title: 'Store uncompressed with zip open', detail: 'Store hanging or loosely folded with the zip open (or closed per manufacturer) in a cool dry place away from ozone sources.' },
      { title: 'Annual professional service', detail: 'Have valves, seals, and zip inspected and serviced annually by a qualified drysuit technician.' },
    ]
  },
  'Hood': {
    icon: '🎭',
    steps: [
      { title: 'Rinse with fresh water', detail: 'Rinse inside and out after each dive to remove salt and sand.' },
      { title: 'Check for tears near the face seal', detail: 'The face opening edge is the most stressed area. Look for tears or separation from the main body.' },
      { title: 'Dry shaded', detail: 'Hang to dry out of direct sun to prevent neoprene degradation.' },
      { title: 'Store flat or loosely rolled', detail: 'Avoid tight folds which can crease and crack the neoprene over time.' },
    ]
  },
  'Gloves': {
    icon: '🧤',
    steps: [
      { title: 'Rinse thoroughly', detail: 'Rinse inside and out. Salt trapped in the palm or finger seams causes premature wear.' },
      { title: 'Check seams & fingertips', detail: 'Fingertips and palm seams take the most abrasion — inspect for wear-through or separation.' },
      { title: 'Dry completely before storing', detail: 'Ensure the inside is fully dry to prevent mold and odor.' },
    ]
  },
  'Boots': {
    icon: '🥾',
    steps: [
      { title: 'Rinse inside and out', detail: 'Flush the interior well — sand and salt accumulate at the toe and heel.' },
      { title: 'Check sole bonding', detail: 'Press along the sole edge to check for delamination. Re-glue with neoprene adhesive if lifting.' },
      { title: 'Dry before storage', detail: 'Stand upright with the top open to allow air circulation inside.' },
    ]
  },
  'Mask': {
    icon: '🥽',
    steps: [
      { title: 'Rinse after every dive', detail: 'Rinse the lens, skirt, and strap with fresh water. Saltwater on silicone skirts causes yellowing and stiffness over time.' },
      { title: 'Clean the lens', detail: 'Use a drop of baby shampoo or mask cleaner on the lens. Avoid abrasive cloths — they scratch tempered glass.' },
      { title: 'Inspect the skirt', detail: 'Check for cracks, tears, or rigidity, especially at the nose pocket corners where stress concentrates.' },
      { title: 'Check the strap', detail: 'Look for brittleness, cracks at the buckle attachment points, or loss of elasticity.' },
      { title: 'Store in the case', detail: 'Always store in the hard case to protect the lens from pressure and scratches.' },
    ]
  },
  'Fins': {
    icon: '🐟',
    steps: [
      { title: 'Rinse blades and foot pockets', detail: 'Rinse fully with fresh water, paying attention to the foot pocket interior where salt accumulates against skin.' },
      { title: 'Inspect blade for cracks', detail: 'Flex the blade and look for stress fractures, especially at the base where it meets the foot pocket.' },
      { title: 'Check straps and buckles', detail: 'For open-heel fins, inspect the spring strap or rubber strap for cracks. Check buckle teeth for wear.' },
      { title: 'Store flat', detail: 'Do not store fins bent or under weight — this permanently deforms the blade and affects performance.' },
    ]
  },
  'Compass': {
    icon: '🧭',
    steps: [
      { title: 'Rinse with fresh water', detail: 'Rinse the housing and bezel after every dive. Avoid high-pressure water on the crystal face.' },
      { title: 'Check for air bubbles', detail: 'A bubble inside the compass housing indicates a leak — the fluid level is dropping. Have it serviced.' },
      { title: 'Verify needle movement', detail: 'Rotate the compass and confirm the needle swings freely and settles correctly pointing north.' },
      { title: 'Inspect mounting bracket', detail: 'Check that the wrist mount or console mount is secure and the locking mechanism holds firmly.' },
    ]
  },
  'Dive Computer': {
    icon: '💻',
    steps: [
      { title: 'Rinse gently', detail: 'Rinse in fresh water. Do not soak computers with replaceable batteries near the battery compartment seal.' },
      { title: 'Check display & buttons', detail: 'Ensure all buttons press cleanly and the display has no fogging, cracks, or dead pixels.' },
      { title: 'Inspect battery compartment seal', detail: 'Open the compartment annually and inspect the O-ring for flattening or damage. Lightly grease with silicone.' },
      { title: 'Replace battery proactively', detail: 'Replace before it shows low — a dead computer mid-dive is a serious hazard. Keep a spare battery in your kit.' },
      { title: 'Download & backup dive logs', detail: 'Regularly download logs to a computer or app. Battery replacement on some models resets internal memory.' },
      { title: 'Service sensor annually', detail: 'The oxygen sensor and pressure transducer should be checked by the manufacturer or authorized service centre each year.' },
    ]
  },
  'Dive Light': {
    icon: '🔦',
    steps: [
      { title: 'Rinse the housing and switch', detail: 'Rinse with fresh water immediately after the dive. Operate the switch a few times while rinsing.' },
      { title: 'Inspect O-rings before every dive', detail: 'Remove the battery cap, clean the O-ring groove, and inspect the O-ring for cuts, flattening, or debris. Lightly grease with silicone.' },
      { title: 'Check battery contacts', detail: 'Look for corrosion on the contacts. Clean with a pencil eraser or contact cleaner if needed.' },
      { title: 'Test burn time', detail: 'Charge or replace batteries regularly. Test the light on full power before a night or cave dive.' },
      { title: 'Store with battery removed or discharged', detail: 'If storing for more than a month, remove batteries or leave rechargeable ones at partial charge to avoid cell damage.' },
    ]
  },
  'Surface Marker Buoy': {
    icon: '🎈',
    steps: [
      { title: 'Rinse and dry fully', detail: 'Rinse the SMB, spool or reel, and any clips with fresh water. Ensure the inside of the buoy is dry before rolling to prevent mold.' },
      { title: 'Check the inflation mechanism', detail: 'For oral-inflate SMBs, inspect the one-way valve. For open-bottom types, ensure the opening is unobstructed.' },
      { title: 'Inspect fabric for tears', detail: 'Unroll fully and check both sides for holes, especially along seam lines.' },
      { title: 'Check spool/reel line', detail: 'Look for fraying, knotting, or damage to the line. Replace if strength is in doubt.' },
      { title: 'Store loosely rolled', detail: 'Roll without tight creases to prevent cracking at fold lines. Store in a mesh pouch.' },
    ]
  },
  'Knife/Cutter': {
    icon: '🔪',
    steps: [
      { title: 'Rinse immediately', detail: 'Salt water causes rapid corrosion — rinse the blade, handle, and sheath the moment you exit the water.' },
      { title: 'Dry the blade completely', detail: 'Dry thoroughly before sheathing. Moisture trapped against the blade causes pitting even on stainless steel.' },
      { title: 'Apply corrosion inhibitor', detail: 'Wipe the blade with a light coat of silicone oil or Teflon-based protectant after drying.' },
      { title: 'Sharpen regularly', detail: 'A dull knife requires more force and is dangerous. Use a wetstone or ceramic sharpener appropriate for the blade type.' },
      { title: 'Inspect the sheath locking mechanism', detail: 'Check that the retention strap or lock clicks securely — the knife must stay put during a dive but release instantly when needed.' },
    ]
  },
  'Weight System': {
    icon: '⚖️',
    steps: [
      { title: 'Rinse the belt and pouches', detail: 'Rinse all buckles, webbing, and weight pouches. Integrated weight pockets should be removed and rinsed separately if possible.' },
      { title: 'Rinse the weights themselves', detail: 'Lead weights are coated or bare — rinse and stack to dry. Coated weights should be inspected for chips that expose lead to seawater.' },
      { title: 'Inspect quick-release buckle', detail: 'Test the buckle function — it must release instantly with one hand. Any stiffness or corrosion must be addressed before diving.' },
      { title: 'Check webbing for fraying', detail: 'A weight belt failure at depth is life-threatening. Replace webbing at the first sign of fraying or weakening.' },
    ]
  },
  'Underwater Camera': {
    icon: '📷',
    steps: [
      { title: 'Soak in fresh water immediately', detail: 'Place in a fresh water bath for 10–15 minutes before opening. This softens any salt deposits around the housing seals.' },
      { title: 'Operate all controls while soaking', detail: 'Press every button and rotate every dial while submerged in the rinse bath to flush salt from switch mechanisms.' },
      { title: 'Check O-rings before every dive', detail: 'Open the housing, inspect the main O-ring for debris, hair, or deformation. Clean the groove, lightly grease the O-ring, and reseat carefully.' },
      { title: 'Inspect port for scratches', detail: 'Sand scratches on the dome or flat port reduce image quality. Polish with Novus or similar acrylic polish between trips.' },
      { title: 'Dry housing before opening', detail: 'Ensure the exterior is completely dry before opening the housing — water near the O-ring groove increases contamination risk.' },
      { title: 'Service O-rings annually', detail: 'Replace main O-rings and button O-rings annually regardless of appearance, especially if you dive more than 50 times per year.' },
    ]
  },
  'Dive Bag': {
    icon: '🎒',
    steps: [
      { title: 'Rinse and air out after every trip', detail: 'Rinse with fresh water, open all zips and pockets, and hang to dry fully. Salt and moisture trapped inside cause mold and odor.' },
      { title: 'Inspect zips', detail: 'Check zip teeth and sliders for corrosion. Apply zip lubricant or wax regularly.' },
      { title: 'Check handles and straps', detail: 'Look for stitching wear on handles, backpack straps, and shoulder strap attachment points — these carry heavy loads.' },
      { title: 'Store open or unzipped', detail: 'Never store a damp bag sealed. Keep it open in storage to allow air circulation.' },
    ]
  },
  'Other': {
    icon: '🔩',
    steps: [
      { title: 'Rinse with fresh water', detail: 'Rinse all surfaces thoroughly after every dive to remove salt, sand, and marine growth.' },
      { title: 'Inspect for visible damage', detail: 'Check for cracks, corrosion, worn contact points, or anything that looks different from when the item was new.' },
      { title: 'Dry before storage', detail: 'Ensure all surfaces and any cavities are dry before packing away to prevent mold, corrosion, or material degradation.' },
      { title: 'Follow manufacturer guidelines', detail: 'Consult the manufacturer\'s manual for service intervals and specific maintenance procedures for this item.' },
    ]
  }
};

function openModal(id) {
  const item = gear.find(g => g.id === id);
  if (!item) return;

  const info = MAINTENANCE[item.category] || MAINTENANCE['Other'];

  document.getElementById('modal-title').textContent = `${info.icon} ${item.name}`;
  document.getElementById('modal-category').textContent = `${item.category} — Maintenance Guide`;

  document.getElementById('modal-body').innerHTML = `
    <ol class="maintenance-steps">
      ${info.steps.map((s, i) => `
        <li class="step">
          <div class="step-number">${i + 1}</div>
          <div class="step-content">
            <div class="step-title">${s.title}</div>
            <div class="step-detail">${s.detail}</div>
          </div>
        </li>
      `).join('')}
    </ol>
  `;

  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
