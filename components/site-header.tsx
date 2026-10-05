'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { navItems } from '@/lib/content';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link href="/" aria-label="AtexSoft LLC home">
          <Logo onDark={!scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group',
                scrolled
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 origin-left',
                  scrolled ? 'bg-blue-500' : 'bg-white',
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )}
              />
            </Link>
          ))}
        </nav>

        <button
          className={cn(
            'lg:hidden p-2 rounded-lg transition-colors',
            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl mt-3 mx-4 rounded-2xl overflow-hidden border border-slate-100">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-6 py-3.5 text-sm font-medium border-b border-slate-100 last:border-0 transition-colors',
                isActive(item.href)
                  ? 'text-blue-600 bg-blue-50/50'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
