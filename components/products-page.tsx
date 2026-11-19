import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { ProductImageSlider } from '@/components/product-image-slider';
import { ProductVideo } from '@/components/product-video';
import { productsPage } from '@/lib/content';

export function ProductsPageView() {
  const products = productsPage.products;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-blue-100/50 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              {productsPage.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight max-w-4xl">
              {productsPage.title}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8" />
            <p className="text-xl text-slate-700 font-medium max-w-3xl mb-8 leading-relaxed">
              {productsPage.subtitle}
            </p>
            <div className="space-y-5 max-w-3xl">
              {productsPage.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-lg text-slate-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 section-gradient overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-10">
              <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-3">
                Catalog
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                {productsPage.catalogTitle}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                {productsPage.catalogIntro}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Reveal key={product.id} delay={(idx % 3) * 80} direction="up">
                <a
                  href={`#${product.id}`}
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
                      <ArrowDown className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12">
              <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-3">
                Details
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {productsPage.detailTitle}
              </h2>
            </div>
          </Reveal>

          <div className="space-y-16">
            {products.map((product, idx) => (
              <div key={product.id} id={product.id} className="scroll-mt-28">
                <Reveal delay={idx * 40}>
                  <article className="rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-3 p-5 sm:p-6 lg:p-8">
                        <ProductImageSlider images={product.images} />
                      </div>
                      <div className="lg:col-span-2 p-7 sm:p-8 lg:pl-0 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.industries.map((industry) => (
                            <span
                              key={industry}
                              className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {product.summary}
                        </p>
                        <ul className="space-y-3">
                          {product.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>

                {product.video && (
                  <Reveal delay={80}>
                    <div className="mt-6">
                      <ProductVideo {...product.video} />
                    </div>
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-slate-900 px-8 py-10 sm:px-12 sm:py-12 text-center">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-8">
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
                  Discuss a STEM product
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
