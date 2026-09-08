import type { CarouselApi } from '@/components/ui/carousel';

export function startHeroRotation(api: NonNullable<CarouselApi>, reducedMotion: boolean) {
  let timer: number | undefined;
  let dragging = false;
  let stopped = false;

  const clear = () => window.clearTimeout(timer);
  const schedule = () => {
    clear();
    if (stopped || dragging || document.hidden) return;
    timer = window.setTimeout(() => {
      if (api.canScrollNext()) api.scrollNext(reducedMotion);
      else api.scrollTo(0, reducedMotion);
      schedule();
    }, 6000);
  };
  const onPointerDown = () => { dragging = true; clear(); };
  const onPointerUp = () => { dragging = false; schedule(); };
  const onVisibilityChange = () => { dragging = false; schedule(); };
  const stop = () => {
    stopped = true;
    clear();
    api.off('select', schedule);
    api.off('reInit', schedule);
    api.off('pointerDown', onPointerDown);
    api.off('pointerUp', onPointerUp);
    api.off('destroy', stop);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };

  api.on('select', schedule);
  api.on('reInit', schedule);
  api.on('pointerDown', onPointerDown);
  api.on('pointerUp', onPointerUp);
  api.on('destroy', stop);
  document.addEventListener('visibilitychange', onVisibilityChange);
  schedule();
  return stop;
}
