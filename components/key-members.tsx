import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/reveal';
import { keyMembers, keyMembersIntro } from '@/lib/content';

export function KeyMembers() {
  return (
    <section className="relative py-24 lg:py-32 section-gradient overflow-hidden">
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              The People Behind AtexSoft
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Key Company Members
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {keyMembersIntro}
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center">
          {keyMembers.map((member, idx) => (
            <Reveal key={member.name} delay={(idx % 4) * 120} direction="up">
              <div className="group overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 hover:border-blue-200 transition-all duration-500 w-full max-w-sm">
                {/* Photo occupies ~60% of card area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 backdrop-blur-md text-blue-700 border-0 shadow-md hover:bg-white">
                      {member.department}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-blue-200 font-semibold text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
                {/* Description below */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
