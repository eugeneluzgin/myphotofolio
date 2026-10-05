import { Reveal } from '@/components/reveal';

export function USBanner() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* US skyline background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/9513906/pexels-photo-9513906.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-blue-950/88 to-slate-900/85" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating AI-orb accents */}
      <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <Reveal>
          <div className="text-center max-w-3xl rounded-3xl bg-slate-950/40 backdrop-blur-md border border-white/10 p-8 lg:p-12 shadow-2xl">
            <p className="text-sky-300 font-semibold tracking-widest uppercase text-sm mb-5">
              Rooted in the U.S. Built for the World.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
              Where American Innovation Meets the Future of AI
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-6" />
            <p className="text-lg text-slate-100 leading-relaxed font-light">
              Headquartered in the United States, AtexSoft LLC draws on the
              country&apos;s world-class tech ecosystem to engineer AI agents,
              blockchain systems, and enterprise software that push the
              boundaries of what&apos;s possible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
