import { notFound } from 'next/navigation';
import { ProductDetailPageView } from '@/components/product-detail-page';
import { productsPage } from '@/lib/content';

type ProductIndexPageProps = {
  params: { index: string };
};

export function generateStaticParams() {
  return productsPage.products.map((_, idx) => ({
    index: String(idx + 1),
  }));
}

export default function ProductIndexPage({ params }: ProductIndexPageProps) {
  const productIndex = Number(params.index);

  if (
    !Number.isInteger(productIndex) ||
    productIndex < 1 ||
    productIndex > productsPage.products.length
  ) {
    notFound();
  }

  return <ProductDetailPageView productIndex={productIndex} />;
}
