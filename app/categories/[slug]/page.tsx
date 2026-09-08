import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteHeader, SiteFooter, Contact } from '../../site-components';
import { sectors, company } from '../../site-data';
import { getSectorBrands } from '../../brands';
import { BrandCard } from '../../brand-card';
import { PoolRange } from '../../pool-range';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return sectors.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const sector = sectors.find(s => s.slug === slug);
  return { title: sector?.title ?? 'Page not found', description: sector?.intro };
}
export default async function SectorPage({params}: Props) {
  const {slug} = await params;
  const sector = sectors.find(s => s.slug === slug);
  if (!sector) notFound();
  const isMedical = slug === 'medical';
  const isPool = slug === 'pool-equipment';
  const number = sectors.indexOf(sector) + 1;
  const profiles = getSectorBrands(slug);
  return <><SiteHeader /><main id="main-content">
    <nav className="sector-nav wrap" aria-label="Our sectors"><a className="back-link" href="/#sectors"><ArrowLeft size={16} /> All sectors</a><div>{sectors.map(s => <a key={s.slug} href={`/categories/${s.slug}`} aria-current={s.slug === slug ? 'page' : undefined}>{s.title}</a>)}</div></nav>
    <section className={`category-hero ${slug}`}><div className="wrap category-hero-grid"><div className="category-copy"><p className="eyebrow blue">0{number} / OUR SECTORS</p><h1>{sector.title}<span className="brand-point">.</span></h1><p>{sector.intro}</p><a className="button button-blue" href={`mailto:${company.email}?subject=${encodeURIComponent(`${sector.title} supply enquiry`)}`}>Discuss your requirements <ArrowUpRight size={18} /></a></div><div className="category-photo"><img src={sector.image} alt={sector.imageAlt} width="1200" height="850" fetchPriority="high" /><span>{isMedical ? 'MEDICAL EQUIPMENT · SURGICAL SUPPLY' : isPool ? 'SYSTEMS · FITTINGS · POOLSIDE EQUIPMENT' : 'SOURCING · SUPPLY · DELIVERY'}</span></div></div></section>
    {isPool && <PoolRange />}
    <section className="section wrap" id="manufacturers">
      <div className="section-heading"><div><p className="eyebrow blue">{isMedical || isPool ? 'INTERNATIONAL MANUFACTURERS' : 'OUR PRODUCT SOURCES'}</p><h2>{isMedical ? 'Precision across specialisms.' : isPool ? 'The systems behind the pool.' : 'Names in our selection.'}</h2></div><p>{isMedical ? 'Four manufacturers. Complementary areas of medical supply.' : isPool ? 'Explore the wider ranges from Pentair, Hayward and AstralPool: technical systems, water care and the components that complete the pool.' : 'Tell us the brand, model or product reference you are looking for.'}</p></div>
      {profiles.length ? <div className={`brand-gallery ${isMedical ? 'medical-gallery' : ''}`}>{profiles.map(brand=><BrandCard key={brand.slug} brand={brand} />)}</div> : <ul className="brand-list">{sector.brands.map((brand, i) => <li key={brand}><span className="brand-index">{String(i+1).padStart(2,'0')}</span><h3>{brand}</h3></li>)}</ul>}
      <p className="availability-note">{isMedical ? 'Product availability, destination requirements and supporting documentation are reviewed for each enquiry. Supply is subject to confirmation of the specific product and delivery terms.' : 'Availability, specifications, pricing and delivery times are confirmed for each enquiry.'}</p>
    </section>
    <section className="supply-section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow blue">FROM ENQUIRY TO DELIVERY</p><h2>A clear way forward.</h2></div></div><div className="supply-steps"><div><span>01</span><h3>Share your requirements</h3><p>Send the brand, product or model, quantity and delivery destination.</p></div><div><span>02</span><h3>Agree the details</h3><p>Discuss availability, specifications, documentation, price and timing.</p></div><div><span>03</span><h3>Arrange supply</h3><p>Once the order is agreed, sourcing and delivery follow the confirmed terms.</p></div></div><a className="text-link" href="#contact">Start a conversation <ArrowRight size={17} /></a></div></section>
    <Contact />
  </main><SiteFooter /></>;
}
