import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  customLogoUrl?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  customLogoUrl,
  showSubtitle = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official FELJ Brand Symbol */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src={customLogoUrl || '/assets/aistudio/felj-icon-symbol.png'}
          alt="Logomarca Oficial FELJ Consultoria"
          className="h-9 sm:h-10 w-auto object-contain drop-shadow-sm select-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight justify-center">
        <span
          className={`text-lg sm:text-xl font-extrabold tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-slate-900'
          }`}
        >
          FELJ
          <span className="text-amber-500 font-bold ml-1.5 text-xs sm:text-sm uppercase tracking-wider">
            Consultoria
          </span>
        </span>
        {showSubtitle && (
          <span className="hidden sm:block text-[9px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
            Consultoria em Seguros de Carga
          </span>
        )}
      </div>
    </div>
  );
};
