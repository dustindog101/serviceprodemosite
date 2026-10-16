import { SITE } from './site';
import { areas } from './areas';

export const localBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: '+1-301-383-9484',
  email: SITE.email,
  description: 'Family and veteran owned water, fire and mold restoration and remodeling company serving Maryland, Washington DC and Northern Virginia since 2001.',
  foundingDate: String(SITE.founded),
  knowsLanguage: ['en', 'es'],
  // TODO(client): add streetAddress/postalCode once the real address is confirmed, plus image/logo URL.
  address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: 'US' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00', closes: '23:59',
  }],
  areaServed: [
    { '@type': 'State', name: 'Maryland' },
    { '@type': 'AdministrativeArea', name: 'Washington, DC' },
    { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
    ...areas.filter((a) => a.kind === 'county').map((a) => ({ '@type': 'AdministrativeArea', name: a.label })),
  ],
  sameAs: [SITE.instagram],
  paymentAccepted: 'Cash, Check, Visa, MasterCard, Discover, American Express, Apple Pay, PayPal',
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Restoration services',
    itemListElement: ['Water damage restoration', 'Mold remediation', 'Fire and smoke damage restoration', 'Remodeling and reconstruction'].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
  },
});

export const breadcrumbs = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE.url + it.href })),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name, description, serviceType: name,
  url: SITE.url + path,
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: ['Maryland', 'Washington, DC', 'Northern Virginia'],
});
