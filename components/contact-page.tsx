import Link from 'next/link';
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { ContactForm } from '@/components/contact-form';
import {
  companyInfo,
  contactPage,
  contactSocials,
} from '@/lib/content';

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Globe,
};

export function ContactPageView() {
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
              {contactPage.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight max-w-4xl">
              {contactPage.title}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8" />
            <p className="text-xl text-slate-700 font-medium max-w-3xl mb-8 leading-relaxed">
              {contactPage.subtitle}
            </p>
            <div className="space-y-5 max-w-3xl">
              {contactPage.intro.map((paragraph) => (
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

      <section className="relative py-8 lg:py-12 section-gradient overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactPage.channels.map((channel, idx) => {
              const Icon = iconMap[channel.icon] ?? Mail;
              return (
                <Reveal key={channel.label} delay={idx * 80} direction="up">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      channel.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group block h-full rounded-3xl bg-white border border-slate-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                      {channel.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 leading-snug mb-2">
                      {channel.value}
                    </p>
                    <p className="text-xs text-slate-500">{channel.detail}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    How we can help
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Tell us where you are in the journey. We structure
                    conversations around outcomes, constraints, and the
                    technical path that makes sense for your organization.
                  </p>
                  <div className="space-y-4">
                    {contactPage.engagementTypes.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-100 bg-white p-5"
                      >
                        <h3 className="font-bold text-slate-900 mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-2xl border border-slate-100 bg-slate-900 p-6 text-slate-300">
                  <p className="text-sm uppercase tracking-wider text-blue-300 font-semibold mb-3">
                    Direct contact
                  </p>
                  <p className="text-white font-bold text-lg mb-1">
                    {companyInfo.legalName}
                  </p>
                  <p className="text-sm mb-4">{companyInfo.executives}</p>
                  <div className="space-y-2 text-sm">
                    <p>{companyInfo.phone}</p>
                    <p>{companyInfo.email}</p>
                    <p className="leading-relaxed">{companyInfo.location}</p>
                  </div>
                  <div className="flex gap-4 mt-5 pt-5 border-t border-slate-700">
                    {contactSocials.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={80}>
                <div className="rounded-3xl border border-slate-100 bg-white p-7 sm:p-10 shadow-sm">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                    Send a message
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {contactPage.formNote}
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 lg:pb-20 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 px-8 py-10 text-center">
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                {contactPage.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
