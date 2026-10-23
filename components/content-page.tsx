import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building,
  Building2,
  Clapperboard,
  Code2,
  Factory,
  FlaskConical,
  HeartPulse,
  Landmark,
  Layers,
  Lightbulb,
  Link2,
  MonitorPlay,
  Network,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Link2,
  Building2,
  Code2,
  Users,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  Truck,
  Building,
  Bot,
  FlaskConical,
  ShieldCheck,
  Network,
  Layers,
  Lightbulb,
  MonitorPlay,
  Clapperboard,
};

type SectionItem = {
  icon: string;
  title: string;
  summary: string;
  points: string[];
};

type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  sections?: SectionItem[];
  items?: NewsItem[];
  closing: string;
};

export function ContentPage({
  eyebrow,
  title,
  subtitle,
  intro,
  sections,
  items,
  closing,
}: ContentPageProps) {
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
              {eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight max-w-4xl">
              {title}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8" />
            <p className="text-xl text-slate-700 font-medium max-w-3xl mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="space-y-5 max-w-3xl">
              {intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {sections && sections.length > 0 && (
        <section className="relative py-16 lg:py-24 section-gradient overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {sections.map((section, idx) => {
                const Icon = iconMap[section.icon] ?? Code2;
                return (
                  <Reveal key={section.title} delay={(idx % 2) * 100} direction="up">
                    <article className="h-full rounded-3xl bg-white border border-slate-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-500">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 mb-2">
                            {section.title}
                          </h2>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {section.summary}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-3 pl-1">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {items && items.length > 0 && (
        <section className="relative py-16 lg:py-24 section-gradient overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="space-y-5">
              {items.map((item, idx) => (
                <Reveal key={item.title} delay={(idx % 3) * 80} direction="up">
                  <article className="rounded-3xl bg-white border border-slate-100 p-7 sm:p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-slate-500">{item.date}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed max-w-4xl">
                      {item.excerpt}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-slate-900 px-8 py-10 sm:px-12 sm:py-12 text-center">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-8">
                {closing}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Speak with our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
