export interface Faq { q: string; a: string }
export interface Service {
  slug: string;
  name: string;
  icon: 'water' | 'mold' | 'fire' | 'build';
  short: string;
  title: string;
  description: string;
  h1: string;
  bullets: string[];
  intro: string;
  subHeading: string;
  subs: { title: string; text: string }[];
  tipsHeading: string;
  tips: { title: string; text: string }[];
  why: string[];
  process: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'water-damage',
    name: 'Water damage restoration',
    icon: 'water',
    short: 'Extraction, drying, leak detection and moisture mapping for floods, leaks and storm water.',
    title: '24/7 Water Damage Restoration in MD, DC & NoVA | ServicePros',
    description: 'Flood cleanup, water extraction, moisture detection and drying across Maryland, DC and Northern Virginia. Call ServicePros 24/7 at 301-383-9484.',
    h1: '24/7 Water Damage Restoration in Maryland, DC & Northern Virginia',
    bullets: ['Industrial pumps and drying equipment, 24/7', 'Moisture meters and infrared cameras find hidden water', 'We work directly with your insurance company'],
    intro: 'A burst pipe, a failed sump or a flooded basement gets worse by the hour. ServicePros removes standing water, finds the moisture you cannot see, dries the structure and handles the paperwork with your insurer, for homes and commercial properties alike.',
    subHeading: 'What water damage restoration includes',
    subs: [
      { title: 'Flood cleanup', text: 'Standing water and wet debris removed so the space can be dried and assessed.' },
      { title: 'Water extraction', text: 'Industrial pumps clear water around the clock, day or night.' },
      { title: 'Moisture detection', text: 'Moisture meters and infrared cameras locate water behind walls and under floors.' },
      { title: 'Structural drying', text: 'Professional drying equipment brings materials back to safe moisture levels.' },
      { title: 'Antimicrobial treatment', text: 'Treatment applied after drying to help keep mold from taking hold.' },
      { title: 'Leak detection and moisture mapping', text: 'We trace the source and document where the moisture has traveled, including after storm and flood events.' },
    ],
    tipsHeading: 'What to do right now',
    tips: [
      { title: 'Stop the source', text: 'If you can, shut off the main water supply. Then call us at 301-383-9484.' },
      { title: 'Call your insurer', text: 'Notify your insurance company. We work directly with insurers and can take it from there.' },
      { title: 'Photograph everything', text: 'Document the damage before anything is moved. It supports your claim.' },
    ],
    why: ['Family and veteran owned since 2001', 'IICRC certified', 'Licensed and insured', 'English and Spanish spoken', '1-year labor and 5-year material warranties'],
    process: [
      { title: 'Call or request service', text: 'Reach a person any hour. We start with what happened and how to make it safe.' },
      { title: 'Inspect and extract', text: 'Moisture meters and infrared cameras map the damage while pumps remove standing water.' },
      { title: 'Dry and treat', text: 'Drying equipment runs until materials are dry, followed by antimicrobial treatment. Water mitigation typically takes 1 to 2 days, depending on the extent and area.' },
      { title: 'Restore', text: 'Repairs and reconstruction bring the space back, with insurance documentation handled alongside.' },
    ],
    faqs: [
      { q: 'How soon should I act after water damage?', a: 'Immediately. The first 24 to 48 hours are critical to prevent mold growth.' },
      { q: 'Do you work with my insurance company?', a: 'Yes. We work directly with insurers and handle the claim paperwork alongside the restoration.' },
      { q: 'How do you assess the damage?', a: 'We use moisture meters and infrared cameras to find water you cannot see behind walls and under floors.' },
      { q: 'Can water damage lead to mold?', a: 'Yes. Standing water and excess moisture can cause mold. Inspection and remediation are part of our process.' },
      { q: 'Can you help prevent future water damage?', a: 'We give guidance on fixing leaks, improving drainage and using water-detection devices.' },
      { q: 'Do you offer emergency water extraction?', a: 'Yes, 24/7, with industrial pumps and drying equipment.' },
      { q: 'Do you handle residential and commercial properties?', a: 'Both.' },
    ],
    related: ['mold-remediation', 'fire-damage', 'remodeling'],
  },
  {
    slug: 'mold-remediation',
    name: 'Mold remediation',
    icon: 'mold',
    short: 'Testing, containment, HEPA filtration and post-remediation verification.',
    title: 'Mold Remediation in MD, DC & Northern Virginia | ServicePros',
    description: 'Mold testing, containment, HEPA filtration and post-remediation verification from IICRC certified pros. Call ServicePros 24/7 at 301-383-9484.',
    h1: 'Mold Remediation in Maryland, DC & Northern Virginia',
    bullets: ['Testing, containment and HEPA filtration', 'We fix the moisture source, not just the symptom', 'Post-remediation verification'],
    intro: 'Mold can start on damp surfaces within 24 to 48 hours. ServicePros finds it, contains it so it does not spread through your home, removes what cannot be cleaned and corrects the moisture problem that caused it.',
    subHeading: 'How we remediate mold',
    subs: [
      { title: 'Mold testing', text: 'We evaluate visible mold and moisture to understand the scope.' },
      { title: 'Containment', text: 'The affected area is sealed off so spores do not travel to clean areas.' },
      { title: 'HEPA filtration', text: 'HEPA air filtration captures airborne particles during the work.' },
      { title: 'Removal and cleaning', text: 'Materials that cannot be cleaned are removed, and remaining surfaces are cleaned.' },
      { title: 'Moisture source repair', text: 'We address the source of moisture and dry the space so mold does not return.' },
      { title: 'Post-remediation verification', text: 'We verify the work, then repair the space.' },
    ],
    tipsHeading: 'What to do right now',
    tips: [
      { title: 'Limit exposure', text: 'People with allergies, asthma or weak immune systems should stay away from the area.' },
      { title: 'Find the moisture', text: 'Mold needs moisture. If there is an active leak, shutting off the water helps stop growth.' },
      { title: 'Know the 10 sq ft rule of thumb', text: 'Very small areas under about 10 sq ft may be manageable yourself. For larger or unclear areas, professional removal is recommended.' },
    ],
    why: ['IICRC certified', 'Family and veteran owned since 2001', 'Licensed and insured', 'English and Spanish spoken', '1-year labor and 5-year material warranties'],
    process: [
      { title: 'Call or request service', text: 'Tell us what you are seeing and where.' },
      { title: 'Evaluate', text: 'We assess visible mold and the moisture behind it.' },
      { title: 'Contain and remove', text: 'Containment and HEPA filtration go up, then affected materials are removed and surfaces cleaned.' },
      { title: 'Dry and repair', text: 'The moisture source is fixed, the space dried and repaired.' },
    ],
    faqs: [
      { q: 'How quickly can mold spread?', a: 'Mold can begin on damp surfaces within 24 to 48 hours and spread within days.' },
      { q: 'What are the health risks of mold?', a: 'Breathing issues, allergic reactions, headaches and skin irritation. The risk is higher with allergies, asthma or a weak immune system.' },
      { q: 'Can I remove mold myself?', a: 'Small areas under about 10 sq ft may be manageable. Professional removal is recommended for larger or unclear areas.' },
    ],
    related: ['water-damage', 'fire-damage', 'remodeling'],
  },
  {
    slug: 'fire-damage',
    name: 'Fire and smoke damage',
    icon: 'fire',
    short: 'Board-up, smoke and soot removal, odor elimination and reconstruction.',
    title: 'Fire & Smoke Damage Restoration in MD, DC & NoVA | ServicePros',
    description: 'Board-up, soot and smoke removal, odor elimination and reconstruction after a fire. ServicePros answers 24/7 at 301-383-9484.',
    h1: 'Fire & Smoke Damage Restoration in Maryland, DC & Northern Virginia',
    bullets: ['24/7 board-up, stabilization and debris removal', 'Smoke, soot and odor removal', 'We work directly with your insurance company'],
    intro: 'After a fire, call as soon as the fire department confirms it is safe to enter. ServicePros secures the property, removes soot and smoke, deals with firefighting water, and rebuilds, with everything documented for your insurer.',
    subHeading: 'Fire damage services',
    subs: [
      { title: 'Board-up and stabilization', text: 'Emergency securing of the property so it is protected while you decide next steps.' },
      { title: 'Smoke and soot removal', text: 'Soot and smoke residue removed from structure and contents.' },
      { title: 'Odor elimination', text: 'Smoke odor removal so the space does not just look clean, it smells clean.' },
      { title: 'Debris removal and smoke containment', text: 'Burned debris cleared and smoke contained to keep it from spreading.' },
      { title: 'Water extraction and drying', text: 'Firefighting water can lead to mold, so we inspect for moisture, extract and dry.' },
      { title: 'Reconstruction', text: 'We rebuild the damaged areas so one team covers cleanup through repair.' },
    ],
    tipsHeading: 'While you wait',
    tips: [
      { title: 'Stay out of damaged areas', text: 'Structure, electrical and air quality can be unsafe until assessed.' },
      { title: 'Do not disturb soot', text: 'Wiping or moving things can press soot deeper into surfaces.' },
      { title: 'Utilities', text: 'Shut off utilities only if professionals instruct you to.' },
    ],
    why: ['24/7 emergency response', 'IICRC certified', 'Licensed and insured', 'Family and veteran owned since 2001', '1-year labor and 5-year material warranties'],
    process: [
      { title: 'Call us', text: 'Once it is safe to enter, we start the conversation any hour of the day.' },
      { title: 'Assess and document', text: 'Full inspection of structure, soot, heat, smoke and water damage, documented for your claim.' },
      { title: 'Secure and clean', text: 'Board-up, debris removal, smoke containment, then soot and odor removal using protective gear.' },
      { title: 'Rebuild', text: 'Minor smoke damage can take days; structural damage can take weeks or longer. Your estimate comes at inspection.' },
    ],
    faqs: [
      { q: 'When should I call after a fire?', a: 'As soon as the fire department confirms it is safe to enter.' },
      { q: 'Do you work with my insurance company?', a: 'Yes. We work directly with insurers.' },
      { q: 'How is the damage assessed?', a: 'A full inspection of structure, soot, heat, smoke and water damage, all documented.' },
      { q: 'Can firefighting water cause mold?', a: 'Yes. Moisture inspection, water extraction and drying are part of our service.' },
      { q: 'What should I do while waiting for help?', a: 'Stay out of damaged areas, do not disturb soot, and shut off utilities only if professionals instruct you to.' },
      { q: 'How long does restoration take?', a: 'Minor smoke damage can take days. Structural damage can take weeks or longer. We give an estimate at inspection.' },
      { q: 'Do you offer emergency response?', a: 'Yes, 24/7: board-up, stabilization, debris removal and smoke containment.' },
      { q: 'How do you stay safe on site?', a: 'Our team uses protective gear and assesses structure, electrical risks, air quality and contamination.' },
    ],
    related: ['water-damage', 'mold-remediation', 'remodeling'],
  },
  {
    slug: 'remodeling',
    name: 'Remodeling and reconstruction',
    icon: 'build',
    short: 'Kitchens, bathrooms, basements, structural repairs and post-disaster rebuilds.',
    title: 'Remodeling & Reconstruction in MD, DC & NoVA | ServicePros',
    description: 'Kitchens, bathrooms, basements and post-disaster reconstruction with 1-year labor and 5-year material warranties. Call ServicePros at 301-383-9484.',
    h1: 'Remodeling & Reconstruction in Maryland, DC & Northern Virginia',
    bullets: ['Free next-day consultations', '1-year labor and 5-year material warranties', 'Insurance paperwork coordinated on covered losses'],
    intro: 'Whether you are renovating by choice or rebuilding after a loss, ServicePros handles remodeling and reconstruction in-house. After water, fire or mold work, the same team repairs and finishes the space.',
    subHeading: 'What we build and repair',
    subs: [
      { title: 'Kitchens', text: 'Full or partial kitchen remodels.' },
      { title: 'Bathrooms', text: 'Bathroom renovations and repairs.' },
      { title: 'Basements', text: 'Basement finishing and repair, including after water damage.' },
      { title: 'Structural repairs', text: 'Repair of damaged structural elements.' },
      { title: 'Flooring, cabinetry, paint and drywall', text: 'The finishing work that brings a space back together.' },
      { title: 'Post-disaster reconstruction', text: 'Rebuilding spaces affected by water, fire or mold.' },
    ],
    tipsHeading: 'Before you start',
    tips: [
      { title: 'Book a consultation', text: 'Consultations are free and available next day.' },
      { title: 'Check your coverage', text: 'If the work follows a covered loss, tell us. We coordinate paperwork with your insurer.' },
      { title: 'Ask about timing', text: 'Timelines depend on size, scope and condition. The consultation gives you an estimate.' },
    ],
    why: ['Licensed and insured', 'Family and veteran owned since 2001', '1-year labor and 5-year material warranties', 'English and Spanish spoken', '$500 off any service offer'],
    process: [
      { title: 'Get in touch', text: 'Call or send the request form.' },
      { title: 'Free consultation', text: 'We look at the space and talk through scope.' },
      { title: 'Estimate and insurance', text: 'You get an estimate; on covered losses we work with your insurer.' },
      { title: 'Build', text: 'Work is completed and backed by our labor and material warranties.' },
    ],
    faqs: [
      { q: 'What remodeling services do you offer?', a: 'Kitchens, bathrooms, basements, structural repairs, flooring, cabinetry, paint and drywall, post-disaster reconstruction, and restoration of spaces affected by water, fire or mold.' },
      { q: 'How long does a remodel take?', a: 'It depends on size, scope and condition of the space. A consultation gives you an estimate.' },
      { q: 'Do you handle insurance work?', a: 'Yes. We work directly with insurers on covered losses and coordinate the paperwork.' },
    ],
    related: ['water-damage', 'fire-damage', 'mold-remediation'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;

export const generalFaqs: Faq[] = [
  { q: 'How quickly can you get here?', a: 'We offer immediate response with round-the-clock support. Call as soon as you notice a problem, such as a flooded basement.' },
  { q: 'How long does the service take?', a: 'Water mitigation typically takes 1 to 2 days, depending on the extent of the damage and the area affected.' },
  { q: 'Do you help with cleanup afterward?', a: 'Yes. We handle debris removal as part of the restoration.' },
  { q: 'Do you work with insurance?', a: 'Yes, we work with major insurance providers. Contact us right away and we will help with the claim.' },
  { q: 'What does the water damage restoration process include?', a: 'Stopping the source, water extraction, moisture detection with meters and infrared cameras, structural drying, antimicrobial treatment and repairs or reconstruction as needed.' },
  { q: 'What should I do after finding water damage?', a: 'Stop the source if you can by shutting off the main supply, call a restoration professional, notify your insurer and photograph the damage.' },
  { q: 'Do I really need a restoration company?', a: 'Do-it-yourself drying can leave hidden moisture behind walls and under floors, which can lead to mold.' },
  { q: 'What are the health effects of mold?', a: 'Allergic reactions, respiratory problems, and eye, skin, nose and throat irritation. People with asthma, allergies or weakened immune systems are most vulnerable.' },
];
