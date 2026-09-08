import { ArrowDown, ArrowRight, ArrowUpRight, Globe2 } from 'lucide-react';
import { SiteHeader, SiteFooter, Contact } from './site-components';
import { sectors, company } from './site-data';
import { HeroCarousel } from './hero-carousel';

export default function Home() {
  return <><SiteHeader /><main id="main-content">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> B2B TRADE · WAREHOUSING · LOGISTICS</p>
        <h1>Considered sourcing.<br /><span>Reliable delivery.</span></h1>
        <p className="hero-intro">B2B sales and international delivery of furniture, lighting, audio, medical and pool equipment, supported by our own warehouses in the European Union.</p>
        <a href="#sectors" className="button button-white">Explore our sectors <ArrowDown size={18} /></a>
        <div className="hero-foot"><Globe2 size={18} /><span>United Kingdom · Europe · Ukraine</span></div>
      </div>
      <HeroCarousel />
    </section>
    <div className="company-strip wrap"><span>{company.name}</span><span>Company No. {company.number}</span><a href={company.registry} target="_blank" rel="noreferrer">View on Companies House <ArrowUpRight size={16} /></a></div>
    <section className="section wrap" id="sectors">
      <div className="section-heading"><div><p className="eyebrow blue">01 / OUR SECTORS</p><h2>Specialist products.<br />A connected approach.</h2></div><p>Five areas of B2B supply, supported by European warehousing, international transport and delivery.</p></div>
      <div className="sector-grid">{sectors.map((sector, i) => <a className={`sector-card ${sector.slug}`} key={sector.slug} href={`/categories/${sector.slug}`}>
        <div className="sector-image"><img src={sector.image} alt={sector.imageAlt} loading="lazy" width="960" height="640" /><span className="sector-number">0{i + 1}</span><span className="round-arrow"><ArrowUpRight size={22} /></span></div>
        <div className="sector-card-copy"><h3>{sector.title}</h3><p>{sector.short}</p><span className="text-link">Explore {sector.linkLabel} <ArrowRight size={16} /></span></div>
      </a>)}</div>
    </section>
    <section className="about" id="company"><div className="wrap about-grid">
      <div className="about-intro"><p className="eyebrow blue">02 / COMPANY PROFILE</p><h2>International trade.<br />Integrated logistics.</h2><figure className="about-visual"><img src="/images/company-logistics.webp" alt="Orderly warehouse aisles with pallet racking, illustrating storage and logistics" width="1200" height="800" loading="lazy" /><figcaption>Warehousing · Transport · Project support</figcaption></figure></div>
      <div className="about-copy"><p className="lead">A UK-registered B2B trading and logistics company.</p><p>KINS WEST TRADING CO. LTD specialises in the sale, supply and international delivery of furniture, lighting, professional audio, medical equipment and swimming-pool equipment. Our product scope includes surgical instruments and consumables, pool systems, fittings, finishes and poolside accessories.</p><p>With our own warehouses in the European Union, we provide storage, transport and delivery services, supporting the movement of goods between suppliers and business customers.</p><p>We coordinate the commercial and logistics requirements of business projects, from sourcing and order fulfilment to storage and final delivery, with comprehensive commercial and logistics documentation throughout. Product specifications, the scope of services and delivery terms are agreed for each project.</p><a className="text-link" href="#contact">Discuss your business requirements <ArrowUpRight size={18} /></a></div>
    </div></section>
    <Contact />
  </main><SiteFooter /></>;
}
