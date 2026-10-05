import {
  Building2,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { companyInfo } from '@/lib/content';

const overview: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Building2, label: 'Company Name', value: companyInfo.legalName },
  { icon: Calendar, label: 'Established', value: companyInfo.established },
  { icon: MapPin, label: 'Location', value: companyInfo.location },
  { icon: Users, label: 'Directors', value: companyInfo.directors },
  { icon: Briefcase, label: 'Executives', value: companyInfo.executives },
  { icon: GraduationCap, label: 'Technical Advisors', value: companyInfo.technicalAdvisors },
  { icon: Phone, label: 'Contact Number', value: companyInfo.phone },
];

export function CompanyOverview() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              At a Glance
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Company Overview
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200">
            <table className="w-full">
              <tbody>
                {overview.map((row, idx) => {
                  const Icon = row.icon;
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={row.label}
                      className={`group transition-colors ${
                        isEven ? 'bg-white' : 'bg-blue-50/40'
                      } hover:bg-blue-100/50`}
                    >
                      <td className="py-5 px-6 lg:px-8 align-middle w-1/3 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-bold text-slate-900 text-sm lg:text-base">
                            {row.label}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 lg:px-8 align-middle border-b border-slate-100">
                        <span className="text-slate-700 text-sm lg:text-base">
                          {row.value}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 hover:shadow-lg transition-all">
              <Phone className="h-5 w-5 text-blue-600 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">
                {companyInfo.phone}
              </span>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 hover:shadow-lg transition-all">
              <Mail className="h-5 w-5 text-blue-600 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">
                {companyInfo.email}
              </span>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 hover:shadow-lg transition-all">
              <Globe className="h-5 w-5 text-blue-600 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">
                {companyInfo.website}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
