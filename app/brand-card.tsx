import { ArrowUpRight } from 'lucide-react';
import { type Brand, brandPath } from './brands';
export function BrandCard({brand}:{brand:Brand}) {
  return <a href={brandPath(brand)} className="brand-card"><div className={`brand-card-image ${brand.imageFit === 'contain' ? 'is-product' : ''}`}><img src={brand.image} alt={brand.imageAlt} width="900" height="640" loading="lazy" /><span className="round-arrow"><ArrowUpRight size={21} /></span></div><div className="brand-card-body"><p className="brand-card-label">{brand.label}</p><h3>{brand.name}</h3><p>{brand.headline}</p><span className="text-link">Explore {brand.name} <ArrowUpRight size={16} /></span></div></a>;
}
