'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';

type ProductVideoProps = {
  title: string;
  description: string;
  embedUrl: string;
};

export function ProductVideo({
  title,
  description,
  embedUrl,
}: ProductVideoProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm">
      <div className="p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="max-w-2xl">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-2">
            Advertising Video
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] shadow-lg shrink-0"
        >
          {open ? (
            <>
              <X className="h-4 w-4" />
              Hide video
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Watch video
            </>
          )}
        </button>
      </div>

      {open && (
        <div className="px-5 sm:px-8 pb-7 sm:pb-8">
          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 aspect-video">
            <iframe
              src={embedUrl}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            If the embed does not load, confirm the Google Drive file is shared
            with &quot;Anyone with the link&quot;.
          </p>
        </div>
      )}
    </div>
  );
}
