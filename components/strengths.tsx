import Image from 'next/image';
import { BrainCircuit, Link2, Building2, Code2, Users, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { strengths } from '@/lib/content';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Link2,
  Building2,
  Code2,
  Users,
};

export function Strengths() {
  return (
    <section className="relative py-24 lg:py-32 section-gradient overflow-hidden">
      {/* AI-themed background accent */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              What We Do Best
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              AtexSoft&apos;s Service Stack
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five pillars of technical excellence that define our capability to
              deliver world-class products across the full technology spectrum.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, idx) => {
            const Icon = iconMap[strength.icon] ?? Code2;
            return (
              <Reveal key={strength.title} delay={idx * 120} direction="up">
                <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-500 h-full">
                  <div className="relative h-40 w-40 mb-6 flex items-center justify-center">
                    <Image
                      src={strength.image}
                      alt={strength.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
