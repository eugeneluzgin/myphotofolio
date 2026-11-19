import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { ProductImageSlider } from '@/components/product-image-slider';
import { ProductVideo } from '@/components/product-video';
import { formatProductNumber, productsPage } from '@/lib/content';

type ProductDetailPageProps = {
  productIndex: number;
};

export function ProductDetailPageView({ productIndex }: ProductDetailPageProps) {
  const product = productsPage.products[productIndex - 1];
  const total = productsPage.products.length;
  const prevIndex = productIndex > 1 ? productIndex - 1 : null;
  const nextIndex = productIndex < total ? productIndex + 1 : null;

  if (!product) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to products
            </Link>
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-3">
              {formatProductNumber(productIndex)}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight max-w-4xl">
              {product.name}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.industries.map((industry) => (
                <span
                  key={industry}
                  className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {product.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-10 lg:py-16 section-gradient overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <article className="rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm">
              <div className="p-4 sm:p-5 lg:p-6">
                <ProductImageSlider images={product.images} />
              </div>
              <div className="border-t border-slate-100 px-6 sm:px-8 py-7 sm:py-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Engineering highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
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
            </article>
          </Reveal>

          {product.video && (
            <Reveal delay={80}>
              <div className="mt-6">
                <ProductVideo {...product.video} />
              </div>
            </Reveal>
          )}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevIndex ? (
              <Link
                href={`/products/${prevIndex}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {formatProductNumber(prevIndex)}
              </Link>
            ) : (
              <span />
            )}
            {nextIndex ? (
              <Link
                href={`/products/${nextIndex}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
              >
                {formatProductNumber(nextIndex)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
