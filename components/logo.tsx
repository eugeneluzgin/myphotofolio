import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  /** Use on dark backgrounds — adds a light backing chip so the wordmark stays legible. */
  onDark?: boolean;
}

export function Logo({ className, showText = true, onDark = false }: LogoProps) {
  if (!showText) {
    return (
      <div className={cn('flex items-center select-none', className)}>
        <Image
          src="/brand/mark-a.png"
          alt="AtexSoft LLC"
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 drop-shadow-lg"
          priority
        />
      </div>
    );
  }

  const logoImg = (
    <Image
      src="/brand/logo-lockup.png"
      alt="AtexSoft LLC"
      width={640}
      height={148}
      className="h-9 sm:h-10 w-auto drop-shadow-sm"
      priority
    />
  );

  if (onDark) {
    return (
      <div className={cn('flex items-center select-none', className)}>
        <div className="rounded-xl bg-white px-3 py-1.5 shadow-md">{logoImg}</div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center select-none', className)}>
      {logoImg}
    </div>
  );
}
