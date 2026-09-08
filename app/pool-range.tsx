import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { brandPath, getSectorBrands } from './brands';

const selection = [
  { brand: 'pentair', group: 'pumps', title: 'Circulation & controls', description: 'Circulation pumps and connected equipment controls.' },
  { brand: 'pentair', group: 'filtration', title: 'Filters & filtration', description: 'Cartridge and media filters for the circulation system.' },
  { brand: 'hayward', group: 'water-treatment', title: 'Water treatment', description: 'Salt chlorination and water-quality regulation.' },
  { brand: 'pentair', group: 'heating', title: 'Pool heating', description: 'Heat pumps for a comfortable water temperature.' },
  { brand: 'astralpool', group: 'lighting', title: 'Underwater lighting', description: 'LED lights, decorative trims and colour options.' },
  { brand: 'hayward', group: 'skimmers', title: 'Pool skimmers', description: 'Surface-water collection and debris baskets.' },
  { brand: 'astralpool', group: 'inlets', title: 'Inlets & main drains', description: 'Return nozzles and fittings for the pool shell.' },
  { brand: 'astralpool', group: 'pipework', title: 'Pipework & valves', description: 'Connections and flow control for pool circuits.' },
  { brand: 'astralpool', group: 'access', title: 'Ladders & handrails', description: 'Stainless-steel access equipment and non-slip steps.' },
  { brand: 'astralpool', group: 'covers', title: 'Covers & rollers', description: 'Pool covers and automatic winding systems.' },
  { brand: 'astralpool', group: 'finishes', title: 'Pool finishes', description: 'Glass mosaics for pool interiors and wellness spaces.' },
  { brand: 'hayward', group: 'cleaners', title: 'Pool cleaning', description: 'Robotic cleaners for pool floors and walls.' },
];

export function PoolRange() {
  const brands = getSectorBrands('pool-equipment');
  return <section className="section wrap pool-range" id="equipment" aria-labelledby="pool-range-title">
    <div className="section-heading">
      <div><p className="eyebrow blue">EQUIPMENT & POOL COMPONENTS</p><h2 id="pool-range-title">From plant room<br />to poolside.</h2></div>
      <p>Explore the systems, fittings and finishes that make up a pool. Select an area to see product examples and discuss your supply requirements.</p>
    </div>
    <div className="pool-range-grid">{selection.map(item => {
      const brand = brands.find(b => b.slug === item.brand);
      const group = brand?.groups.find(g => g.id === item.group);
      if (!brand || !group?.image) throw new Error(`Missing pool range entry: ${item.brand}/${item.group}`);
      return <a className="pool-range-card" key={item.group} href={`${brandPath(brand)}#${group.id}`}>
        <div className="pool-range-image"><img src={group.image} alt={group.imageAlt ?? group.title} width="720" height="540" loading="lazy" /><span className="round-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span></div>
        <div className="pool-range-copy"><p className="brand-card-label">{brand.name}</p><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Explore equipment <ArrowRight size={16} aria-hidden="true" /></span></div>
      </a>;
    })}</div>
    <p className="availability-note">Product photographs show selected examples. Exact models, dimensions, compatibility and quantities are confirmed against your project specification.</p>
  </section>;
}
