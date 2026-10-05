import Link from 'next/link';
import { ArrowLeft, Sparkles, Construction } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { placeholderPages, companyInfo } from '@/lib/content';

export function ComingSoon({ pageKey }: { pageKey: string }) {
  const page = placeholderPages[pageKey] ?? {
    title: 'Coming Soon',
    subtitle: 'This page is under development.',
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-20">
        {/* AI themed background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

        <div className="relative text-center px-6 max-w-2xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs">
              AtexSoft LLC
            </span>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-2xl">
                <Construction className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-blue-400/20 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            {page.title}
          </h1>

          <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8" />

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-4">
            {page.subtitle}
          </p>

          <p className="text-base text-slate-500 mb-12">
            This feature is under active development and coming soon. We&apos;re
            crafting something extraordinary — check back shortly.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
