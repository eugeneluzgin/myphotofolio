import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Reveal } from '@/components/reveal';
import { founders, foundersMessage } from '@/lib/content';

export function FoundersMessage() {
  return (
    <section id="founders" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              Our Leadership
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              A Message from Our CEO
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light italic">
              &ldquo;{foundersMessage}&rdquo;
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
          {founders.map((founder, idx) => (
            <Reveal key={founder.name} delay={idx * 200} direction={idx === 0 ? 'left' : 'right'}>
              <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-blue-50/50 to-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                <Avatar className="h-40 w-40 mb-6 ring-4 ring-white shadow-lg group-hover:ring-blue-200 group-hover:scale-105 transition-all duration-500">
                  <AvatarImage src={founder.image} alt={founder.name} />
                  <AvatarFallback className="text-2xl font-bold bg-blue-100 text-blue-700">
                    {founder.name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">
                  {founder.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
