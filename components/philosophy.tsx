'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Lightbulb,
  Users,
  GraduationCap,
  HeartHandshake,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { philosophy } from '@/lib/content';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Users,
  GraduationCap,
  HeartHandshake,
  Wrench,
};

export function Philosophy() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              What We Believe
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Corporate Philosophy
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we
              build.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {philosophy.map((item, idx) => {
              const Icon = iconMap[item.icon] ?? Lightbulb;
              return (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-blue-50/30 px-6 hover:border-blue-300 transition-colors data-[state=open]:border-blue-400 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-lg font-bold text-slate-900">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600 leading-relaxed pl-16">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
