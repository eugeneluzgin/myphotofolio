import { ContentPage } from '@/components/content-page';
import { newsPage } from '@/lib/content';

export default function NewsPage() {
  return <ContentPage {...newsPage} />;
}
