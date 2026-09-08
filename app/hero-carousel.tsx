'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { startHeroRotation } from '@/lib/hero-rotation';

const slides = [
  { title: 'Furniture', slug: 'furniture', image: '/images/furniture.webp', alt: 'Contemporary bedroom with upholstered furniture and warm wooden wall panels', position: '57% center' },
  { title: 'Audio', slug: 'audio', image: '/images/brands/audio-tuning.jpg', alt: 'Yellow Pro-Ject turntable with a vinyl record, from the Audio Tuning selection', position: '52% center' },
  { title: 'Medical equipment', slug: 'medical', image: '/images/medical-equipment-room.webp', alt: 'Operating room with a surgical table, medical monitors and anaesthesia equipment', position: '45% center' },
  { title: 'Lighting', slug: 'lights', image: '/images/brands/lee-broom.jpg', alt: 'Lee Broom illuminated pendants cascading beside a sculptural stone staircase', position: '56% center' },
  { title: 'Pool equipment', slug: 'pool-equipment', image: '/images/pool-leisure.webp', alt: 'Guests relaxing beside a clear blue swimming pool at a palm-lined resort', position: 'center' },
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(preference.matches);
    const onPreferenceChange = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    return startHeroRotation(api, reducedMotion);
  }, [api, reducedMotion]);

  const slide = slides[selected];
  return <Carousel
    className="hero-photo hero-carousel"
    opts={{ loop: true, duration: reducedMotion ? 0 : 45 }}
    setApi={setApi}
    aria-label="Explore our five sectors"
  >
    <CarouselContent className="hero-carousel-track" aria-live="off">
      {slides.map((item, index) => <CarouselItem
        key={item.slug}
        className="hero-slide"
        aria-label={`${index + 1} of ${slides.length}: ${item.title}`}
        aria-hidden={index !== selected}
      >
        <img src={item.image} alt={item.alt} width="1920" height="1080" style={{ objectPosition: item.position }} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} draggable={false} />
      </CarouselItem>)}
    </CarouselContent>
    <div className="hero-carousel-overlay" aria-live="off">
        <a className="hero-sector-link" href={`/categories/${slide.slug}`}>
          <span className="hero-sector-title">{slide.title}</span>
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>
        <div className="hero-slide-selectors" role="group" aria-label="Choose a sector">
          {slides.map((item, index) => <button
            type="button" key={item.slug} className="hero-slide-selector"
            aria-label={`Show ${item.title.toLowerCase()}`}
            aria-current={selected === index ? 'true' : undefined}
            onClick={() => api?.scrollTo(index, reducedMotion)}
          ><span /></button>)}
        </div>
    </div>
  </Carousel>;
}
