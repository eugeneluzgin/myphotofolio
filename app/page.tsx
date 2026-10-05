import { SiteHeader } from '@/components/site-header';
import { HeroSlider } from '@/components/hero-slider';
import { FoundersMessage } from '@/components/founders-message';
import { Strengths } from '@/components/strengths';
import { Philosophy } from '@/components/philosophy';
import { KeyMembers } from '@/components/key-members';
import { CompanyOverview } from '@/components/company-overview';
import { USBanner } from '@/components/us-banner';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSlider />
      <FoundersMessage />
      <Strengths />
      <USBanner />
      <Philosophy />
      <KeyMembers />
      <CompanyOverview />
      <SiteFooter />
    </main>
  );
}
