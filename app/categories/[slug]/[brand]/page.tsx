import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SiteHeader, SiteFooter } from '../../../site-components';
import { sectors, company } from '../../../site-data';
import { brands, getSectorBrands } from '../../../brands';
import { BrandBreadcrumb } from '../../../brand-breadcrumb';
import { BrandCard } from '../../../brand-card';

type Props = {params: Promise<{slug:string;brand:string}>};
export function generateStaticParams() { return brands.map(b => ({slug:b.sector,brand:b.slug})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const p=await params; const brand=brands.find(b=>b.slug===p.brand&&b.sector===p.slug);
  return {title:brand ? `${brand.name} — ${sectors.find(s=>s.slug===p.slug)?.title}` : 'Page not found',description:brand?.intro};
}
export default async function BrandPage({params}:Props) {
  const p=await params; const brand=brands.find(b=>b.slug===p.brand&&b.sector===p.slug);
  const sector=sectors.find(s=>s.slug===p.slug);
  if(!brand||!sector) notFound();
  const related=getSectorBrands(sector.slug).filter(b=>b.slug!==brand.slug).slice(0,3);
  const email=`mailto:${company.email}?subject=${encodeURIComponent(`${brand.name} — ${sector.title} supply enquiry`)}&body=${encodeURIComponent(`Hello Kins West Trading,\n\nI would like to enquire about ${brand.name}.\n\nProduct / model:\nQuantity:\nDelivery destination:\nRequired date:\n\nThank you.`)}`;
  return <><SiteHeader /><main id="main-content">
    <BrandBreadcrumb sector={sector.slug} sectorTitle={sector.title} name={brand.name} />
    <section className={`brand-hero ${brand.imageFit === 'contain' ? 'product-hero' : ''}`}><div className="wrap brand-hero-grid"><div className="brand-hero-copy"><p className="eyebrow blue">{brand.label}</p><h1>{brand.name}<span className="brand-point">.</span></h1><p className="brand-headline">{brand.headline}</p><p className="brand-intro">{brand.intro}</p><a className="button button-blue" href="#range">Explore the range <ArrowRight size={18} /></a></div><figure className="brand-hero-photo"><img src={brand.image} alt={brand.imageAlt} width="1200" height="900" fetchPriority="high" />{brand.imageCaption && <figcaption>{brand.imageCaption}</figcaption>}</figure></div></section>
    <nav className="brand-section-nav wrap" aria-label={`${brand.name} page sections`}><a href="#range">Product areas</a><a href="#supply">Supply enquiries</a></nav>
    <section className="section wrap" id="range"><div className="section-heading"><div><p className="eyebrow blue">PRODUCT AREAS</p><h2>{sector.slug==='medical' ? 'Specialist product families.' : sector.slug==='pool-equipment' ? 'Equipment for your pool project.' : 'Explore the possibilities.'}</h2></div><p>{sector.slug==='medical' ? 'An introduction to the range. Exact specifications follow the manufacturer’s product documentation.' : 'A starting point for your selection. Share a product reference to discuss availability, options and delivery.'}</p></div><div className={`product-group-grid ${sector.slug==='pool-equipment' ? 'pool-product-groups' : ''}`}>{brand.groups.map((group,i)=><article key={group.title} id={group.id} className="product-group">{group.image ? <div className="product-group-image"><img src={group.image} alt={group.imageAlt??group.title} width="720" height="540" loading="lazy" /></div> : <span className="group-number">0{i+1}</span>}{group.productName && <p className="product-model">{brand.name} · {group.productName}</p>}<h3>{group.title}</h3><p>{group.description}</p></article>)}</div></section>
    <section className="brand-enquiry" id="supply"><div className="wrap brand-enquiry-grid"><div><p className="eyebrow">SOURCING & DELIVERY</p><h2>Bring your {brand.name}<br />enquiry to us.</h2><p>We’ll discuss the product, order requirements and delivery destination with you. Availability and supply terms are confirmed for each enquiry.</p><a href={email} className="button button-white">Enquire about {brand.name} <ArrowUpRight size={18} /></a></div><div className="enquiry-details"><p className="eyebrow">HELPFUL DETAILS TO INCLUDE</p><ul>{brand.enquiryItems.map(item=><li key={item}><Check size={17} /><span>{item}</span></li>)}</ul><a href={`tel:${company.phone}`}>{company.displayPhone} <ArrowUpRight size={18} /></a></div></div></section>
    {related.length>0&&<section className="section wrap"><div className="section-heading"><div><p className="eyebrow blue">CONTINUE EXPLORING</p><h2>More in {sector.title.toLowerCase()}.</h2></div><a className="text-link" href={`/categories/${sector.slug}`}><ArrowLeft size={16} /> All {sector.title.toLowerCase()}</a></div><div className="brand-gallery related-brands">{related.map(b=><BrandCard key={b.slug} brand={b}/>)}</div></section>}
  </main><SiteFooter /></>;
}
