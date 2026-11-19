'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProductImage = {
  src: string;
  alt: string;
};

export function ProductImageSlider({ images }: { images: ProductImage[] }) {
  const [current, setCurrent] = useState(0);

  function goTo(index: number) {
    const next = (index + images.length) % images.length;
    setCurrent(next);
  }

  return (
    <div className="w-full">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
        {images.map((image, idx) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={idx === 0}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md hover:bg-white transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md hover:bg-white transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((image, idx) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === current ? 'w-6 bg-blue-600' : 'w-2 bg-white/80 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((image, idx) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition ${
              idx === current
                ? 'border-blue-600'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
