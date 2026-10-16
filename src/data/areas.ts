// Service areas straight from research/client-content.md. Typo fixed: "Capitol Hill".
export type Region = 'MD' | 'VA' | 'DC';

export interface Area {
  slug: string;
  name: string;
  kind: 'city' | 'county' | 'region';
  region: Region;
  group: string; // county name or region label
  label: string; // "Bethesda, MD"
  stateName: string;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const md: Record<string, string[]> = {
  'Anne Arundel': ['Annapolis', 'Crofton', 'Crownsville', 'Davidsonville', 'Edgewater', 'Gambrills', 'Hanover', 'Millersville', 'Odenton', 'Severn'],
  'Baltimore County': ['Arbutus', 'Carney', 'Catonsville', 'Cockeysville', 'Essex', 'Halethorpe', 'Hunt Valley', 'Kingsville', 'Linthicum', 'Lutherville', 'Middle River', 'Nottingham', 'Owings Mills', 'Parkville', 'Perry Hall', 'Pikesville', 'Randallstown', 'Reisterstown', 'Rosedale', 'Sparks', 'Timonium', 'Towson', 'White Marsh'],
  'Carroll': ['Eldersburg', 'Finksburg', 'Hampstead', 'Manchester', 'New Windsor', 'Sykesville', 'Taneytown', 'Union Bridge', 'Westminster'],
  'Frederick': ['Adamstown', 'Brunswick', 'Emmitsburg', 'Frederick', 'Ijamsville', 'Jefferson', 'Middletown', 'Monrovia', 'Mount Airy', 'Myersville', 'New Market', 'Thurmont', 'Urbana', 'Walkersville', 'Woodsboro'],
  'Howard': ['Clarksville', 'Columbia', 'Dayton', 'Elkridge', 'Ellicott City', 'Fulton', 'Glenelg', 'Highland', 'Jessup', 'Marriottsville', 'North Laurel', 'Savage', 'Scaggsville', 'West Friendship', 'Woodstock'],
  'Montgomery': ['Aspen Hill', 'Bethesda', 'Brookeville', 'Burtonsville', 'Cabin John', 'Chevy Chase', 'Clarksburg', 'Damascus', 'Derwood', 'Gaithersburg', 'Germantown', 'Kensington', 'Montgomery Village', 'North Bethesda', 'Olney', 'Poolesville', 'Potomac', 'Rockville', 'Sandy Spring', 'Silver Spring', 'Takoma Park', 'Travilah', 'Washington Grove', 'Wheaton'],
  "Prince George's": ['Adelphi', 'Beltsville', 'Bladensburg', 'Bowie', 'Calverton', 'Camp Springs', 'Capitol Heights', 'Clinton', 'College Park', 'District Heights', 'Forestville', 'Fort Washington', 'Glenarden', 'Glenn Dale', 'Greenbelt', 'Hyattsville', 'Landover', 'Landover Hills', 'Lanham', 'Laurel', 'Largo', 'Mitchellville', 'Mount Rainier', 'New Carrollton', 'Oxon Hill', 'Riverdale Park', 'Seabrook', 'Suitland', 'Temple Hills', 'Upper Marlboro', 'White Oak'],
  'Harford': [],
};
const countyLabel = (c: string) => (c === 'Baltimore County' ? c : `${c} County`);

const va = ['Annandale', 'Arlington', 'Alexandria', 'Burke', 'Centreville', 'Chantilly', 'Falls Church', 'Fairfax', 'Great Falls', 'Herndon', 'McLean', 'Oakton', 'Reston', 'Springfield', 'Tysons', 'Vienna'];
const dc = ['Brookland', 'Capitol Hill', 'Georgetown', 'Petworth', 'Tenleytown'];

export const areas: Area[] = [];
const seen = new Set<string>();
const add = (a: Area) => {
  if (seen.has(a.slug)) return;
  seen.add(a.slug);
  areas.push(a);
};

for (const [county, cities] of Object.entries(md)) {
  const cl = countyLabel(county);
  add({ slug: slugify(cl) + '-md', name: cl, kind: 'county', region: 'MD', group: cl, label: `${cl}, MD`, stateName: 'Maryland' });
  for (const c of cities) add({ slug: slugify(c) + '-md', name: c, kind: 'city', region: 'MD', group: cl, label: `${c}, MD`, stateName: 'Maryland' });
}
for (const c of ['Fairfax County', 'Loudoun County'])
  add({ slug: slugify(c) + '-va', name: c, kind: 'county', region: 'VA', group: 'Northern Virginia', label: `${c}, VA`, stateName: 'Virginia' });
for (const c of va) add({ slug: slugify(c) + '-va', name: c, kind: 'city', region: 'VA', group: 'Northern Virginia', label: `${c}, VA`, stateName: 'Virginia' });
add({ slug: 'washington-dc', name: 'Washington, DC', kind: 'region', region: 'DC', group: 'Washington, DC', label: 'Washington, DC', stateName: 'District of Columbia' });
for (const c of dc) add({ slug: slugify(c) + '-dc', name: c, kind: 'city', region: 'DC', group: 'Washington, DC', label: `${c}, Washington DC`, stateName: 'District of Columbia' });

export const getArea = (slug: string) => areas.find((a) => a.slug === slug)!;
export const groups = () => {
  const out: { region: Region; title: string; groups: { name: string; county?: Area; cities: Area[] }[] }[] = [
    { region: 'MD', title: 'Maryland', groups: [] },
    { region: 'VA', title: 'Northern Virginia', groups: [] },
    { region: 'DC', title: 'Washington, DC', groups: [] },
  ];
  for (const a of areas) {
    const r = out.find((o) => o.region === a.region)!;
    let g = r.groups.find((x) => x.name === a.group);
    if (!g) { g = { name: a.group, cities: [] }; r.groups.push(g); }
    if (a.kind === 'city') g.cities.push(a); else g.county = a;
  }
  return out;
};
export const nearby = (a: Area, n = 6) => {
  const pool = areas.filter((x) => x.kind === 'city' && x.group === a.group && x.slug !== a.slug);
  if (!pool.length) return [];
  const i = Math.max(0, pool.findIndex((x) => x.name.localeCompare(a.name) > 0));
  const out: Area[] = [];
  for (let k = 0; k < Math.min(n, pool.length); k++) out.push(pool[(i + k) % pool.length]);
  return out;
};
export const featured = ['gaithersburg-md', 'rockville-md', 'bethesda-md', 'silver-spring-md', 'germantown-md', 'frederick-md', 'columbia-md', 'bowie-md', 'towson-md', 'annapolis-md', 'arlington-va', 'alexandria-va', 'fairfax-va', 'reston-va', 'georgetown-dc', 'capitol-hill-dc'];

// Local context lines per group. Kept general and non-factual-claim style (no stats).
const ctx: Record<string, string[]> = {
  'Montgomery County': ['Basements, finished lower levels and aging plumbing are common starting points for water damage in Montgomery County homes.', 'Our home base is Gaithersburg, so Montgomery County is where we are closest.'],
  'Prince George\'s County': ['Homes and multi-unit buildings here see plenty of burst pipes, appliance leaks and storm water in lower levels.'],
  'Anne Arundel County': ['Between older homes and properties near the water, moisture problems and storm cleanup come up often in Anne Arundel County.'],
  'Baltimore County': ['From rowhouses to larger suburban homes, a leak in a basement or top floor can spread quickly through the structure.'],
  'Carroll County': ['Homes with finished basements can take on water fast when a sump pump fails or a storm hits.'],
  'Frederick County': ['Whether it is a newer subdivision or a historic downtown building, drying needs to start quickly to prevent mold.'],
  'Howard County': ['Finished basements are common in Howard County homes, and they are often where water damage and mold show up first.'],
  'Harford County': ['We serve Harford County for water, fire and mold emergencies.'],
  'Northern Virginia': ['Basements, crawl spaces and older plumbing can all turn a small leak into a larger restoration job.'],
  'Washington, DC': ['In DC, rowhouses and condo buildings mean one leak can affect neighbors and shared walls, which makes fast moisture detection important.'],
};
const openers = [
  (n: string) => `A flooded basement, a kitchen fire or visible mold in ${n} is stressful. ServicePros answers around the clock and starts with a clear plan.`,
  (n: string) => `If you are dealing with water, smoke or mold damage in ${n}, call ServicePros any hour. We handle the cleanup, the drying and the insurance conversation.`,
  (n: string) => `Property damage in ${n} does not wait for business hours, and neither do we. ServicePros is available 24/7.`,
];
export function areaCopy(a: Area) {
  const idx = [...a.name].reduce((s, c) => s + c.charCodeAt(0), 0);
  const label = a.kind === 'city' && a.region !== 'DC' ? `${a.name}, ${a.region}` : a.name;
  const c = ctx[a.group] ?? ctx[a.group.replace(' County', '') + ' County'] ?? [];
  return {
    opener: openers[idx % openers.length](label),
    context: c.length ? c[idx % c.length] : '',
    h1: a.kind === 'city'
      ? `Water, Fire & Mold Restoration in ${a.name}, ${a.region === 'DC' ? 'Washington DC' : a.region}`
      : `Water, Fire & Mold Restoration in ${a.name}${a.region === 'DC' ? '' : `, ${a.region}`}`,
  };
}
