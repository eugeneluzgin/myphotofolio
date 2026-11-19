import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { formatProductNumber, productsPage } from '@/lib/content';

export function ProductsPageView() {
  const products = productsPage.products;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="relative pt-24 pb-8 lg:pt-28 lg:pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">
              {productsPage.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tight max-w-4xl">
              {productsPage.title}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4" />
            <p className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl mb-2 leading-snug">
              {productsPage.subtitle}
            </p>
            <div className="max-w-3xl">
              {productsPage.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-10 lg:py-12 section-gradient overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-6">
              <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">
                Catalog
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                {productsPage.catalogTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                {productsPage.catalogIntro}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => {
              const productIndex = idx + 1;
              return (
                <Reveal key={product.id} delay={(idx % 3) * 80} direction="up">
                  <Link
                    href={`/products/${productIndex}`}
                    className="group block h-full overflow-hidden rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={product.coverImage}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-slate-800 shadow-sm">
                        {formatProductNumber(productIndex)}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.industries.map((industry) => (
                          <span
                            key={industry}
                            className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {product.summary}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                        View details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-slate-900 px-8 py-8 sm:px-10 sm:py-9 text-center">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto mb-6">
                {productsPage.closing}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
                >
                  Explore industries
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Discuss a product
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
