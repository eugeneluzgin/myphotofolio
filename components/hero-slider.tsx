'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { heroSlides } from '@/lib/content';

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (idx: number) => setCurrent((idx + heroSlides.length) % heroSlides.length);

  return (
    <section
      ref={sectionRef}
      id="company"
      className="relative h-[92vh] min-h-[620px] w-full overflow-hidden"
    >
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-out',
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `scale(1.2) translateY(${scrollY * 0.3}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
      ))}

      {/* Floating decorative elements — AI symbolism */}
      <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <div
            key={`eyebrow-${current}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-slide-up"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span className="text-sky-100 font-semibold tracking-widest uppercase text-xs">
              {heroSlides[current].eyebrow}
            </span>
          </div>

          {heroSlides[current].titleImage ? (
            <div
              key={`title-${current}`}
              className="mb-8 flex justify-center animate-slide-up"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="inline-block rounded-3xl bg-white/95 shadow-2xl px-8 py-6 sm:px-12 sm:py-8">
                <img
                  src={heroSlides[current].titleImage}
                  alt={heroSlides[current].title}
                  className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[560px] h-auto"
                />
              </div>
            </div>
          ) : (
            <h1
              key={`title-${current}`}
              className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] mb-8 animate-slide-up tracking-tight"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              {heroSlides[current].title}
            </h1>
          )}

          <p
            key={`desc-${current}`}
            className="text-lg sm:text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {heroSlides[current].description}
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-slide-up"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a
              href="#founders"
              className="px-8 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Learn About Us
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              idx === current
                ? 'w-10 bg-white shadow-lg'
                : 'w-2 bg-white/40 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
