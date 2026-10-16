// Single source of truth for business facts. Only facts from research/client-content.md.
export const SITE = {
  name: 'ServicePros Cleaning & Restoration',
  shortName: 'ServicePros',
  url: 'https://serviceprodemosite.vercel.app',
  phone: '301-383-9484',
  phoneDisplay: '(301) 383-9484',
  phoneHref: 'tel:+13013839484',
  email: 'serviceproscleanup@hotmail.com',
  locality: 'Gaithersburg',
  region: 'MD',
  founded: 2001,
  instagram: 'https://instagram.com/serviceprosrestoration',
  offer: '$500 off any service',
} as const;

/**
 * TODO(client): replace with the real Formspree (or similar) endpoint, e.g.
 * https://formspree.io/f/abcdwxyz . While it still contains "REPLACE_ME" the form
 * falls back to opening the visitor's email app (mailto) instead of posting.
 */
export const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_ME';

export const NAV = [
  { href: '/services/water-damage/', label: 'Services' },
  { href: '/service-areas/', label: 'Service areas' },
  { href: '/about/', label: 'About' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/special-offers/', label: 'Offers' },
];

export const DAMAGE_TYPES = ['Water damage', 'Mold', 'Fire or smoke damage', 'Remodeling', 'Not sure'];
