import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { casinoBrandColors, getGlassmorphismStyle } from '@/lib/casinoKleurenData';
import useMediaQuery from '@/hooks/gebruikMobielHook';

export interface CasinoCardLayoutProps {
  casino: {
    id: number;
    name: string;
    logo: string;
    logoClassName?: string;
    rating: number;
    bonus: string;
    minDeposit: string;
    features: string[];
  };
  getCasinoUrl: (name: string) => string;
  layout?: 'auto' | 'mobile' | 'desktop';
  className?: string;
}

const CasinoCardLayout: React.FC<CasinoCardLayoutProps> = ({ casino, getCasinoUrl, layout = 'auto', className }) => {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const forceMobile = layout === 'mobile';
  const forceDesktop = layout === 'desktop';
  const showMobile = forceMobile || (layout === 'auto' && isMobile);
  const showDesktop = forceDesktop || (layout === 'auto' && !isMobile);

  const mainBonus = casino.bonus.split('+')[0].trim();
  const casinoColor = casinoBrandColors[casino.name] || '#16a34a';
  const glassStyle = getGlassmorphismStyle(casinoColor);

  // Mobiel
  if (showMobile) {
    return (
      <div
        className={`my-4 rounded-2xl p-4 shadow-lg transition-all duration-200 hover:scale-[1.01] ${className || ''}`}
        style={glassStyle}
      >
        <div className="flex items-center gap-4">
          {/* Logo Column */}
          <div className="flex w-20 flex-shrink-0 items-center justify-center">
            <img
              src={casino.logo}
              alt={`${casino.name} logo`}
              className="h-16 w-16 object-contain rounded-[10px] shadow-[5px_5px_10px_#969696,_-5px_-5px_10px_#ffffff,_inset_2px_2px_4px_#969696,_inset_-2px_-2px_4px_#ffffff]"
              loading="lazy"
            />
          </div>
          {/* Content Column */}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full bg-gray-50/80 px-1 py-0.5">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="ml-0.5 text-xs font-semibold tabular-nums text-gray-900">{casino.rating}</span>
              </div>
              <span className="truncate text-[15px] font-bold text-gray-900">{casino.name}</span>
            </div>
            <div className="text-left text-[13px] font-medium text-green-700">{mainBonus}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {casino.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="flex items-center rounded-full bg-white/70 px-2 py-0.5 text-xs text-gray-700 shadow-sm"
                >
                  <Check className="mr-1 h-3 w-3 text-green-600" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Actions Row */}
        <div className="mt-4 flex gap-3">
          <Button
            className="flex-1 py-3 text-xs font-semibold text-white shadow-md"
            style={{ background: casinoColor, borderColor: casinoColor }}
            asChild
          >
            <a
              href={getCasinoUrl(casino.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Bezoek ${casino.name}`}
            >
              Speel Nu
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-2 py-3 text-xs font-semibold shadow-md"
            style={{ borderColor: casinoColor, color: casinoColor }}
            asChild
          >
            <Link
              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              aria-label={`Bekijk ${casino.name} review`}
            >
              Review
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Desktop
  if (showDesktop) {
    return (
      <div
        className={`flex flex-col items-center justify-between rounded-2xl p-5 shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl ${className || ''}`}
        style={{ ...glassStyle, minHeight: 320 }}
      >
        <img
          src={casino.logo}
          alt={`${casino.name} logo`}
          className="mb-3 h-20 w-20 object-contain rounded-[20px] shadow-[5px_5px_10px_#969696,_-5px_-5px_10px_#ffffff,_inset_2px_2px_4px_#969696,_inset_-2px_-2px_4px_#ffffff]"
          loading="lazy"
        />
        <div className="flex flex-col items-center gap-1 w-full">
          <span className="text-center text-base font-bold text-gray-900 truncate w-full">{casino.name}</span>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-center rounded-full bg-gray-50/80 px-1 py-0.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-0.5 text-xs font-semibold tabular-nums text-gray-900">{casino.rating}</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[13px] font-medium text-green-700 w-full">{mainBonus}</div>
          <div className="mt-2 flex flex-col items-center gap-1 w-full">
            {casino.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="flex items-center justify-center rounded-full bg-white/70 px-2 py-0.5 text-xs text-gray-700 shadow-sm"
              >
                <Check className="mr-1 h-3 w-3 text-green-600" />
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex w-full gap-2">
          <Button
            className="flex-1 py-2 text-xs font-semibold text-white shadow-md"
            style={{ background: casinoColor, borderColor: casinoColor }}
            asChild
          >
            <a
              href={getCasinoUrl(casino.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Bezoek ${casino.name}`}
            >
              Speel Nu
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-2 py-2 text-xs font-semibold shadow-md"
            style={{ borderColor: casinoColor, color: casinoColor }}
            asChild
          >
            <Link
              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              aria-label={`Bekijk ${casino.name} review`}
            >
              Review
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default CasinoCardLayout;
