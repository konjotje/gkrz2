import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { casinoBrandColors, getGlassmorphismStyle } from '@/lib/casinoKleurenData';

export interface BonusCardRedesignProps {
  offer: {
    id: number;
    casinoName: string;
    casinoLogo: string;
    bonusAmount: string;
    freeSpins: number;
    description: string;
    requirements: string;
    rating: number;
    exclusive?: boolean;
  };
  getCasinoUrl: (name: string) => string;
  layout?: 'auto' | 'mobile' | 'desktop';
  className?: string;
}

const BonusCardRedesign: React.FC<BonusCardRedesignProps> = ({ offer, getCasinoUrl, layout = 'auto', className }) => {
  const casinoColor = casinoBrandColors[offer.casinoName] || '#16a34a';
  const glassStyle = getGlassmorphismStyle(casinoColor);

  return (
    <div
      className={`flex flex-col items-center rounded-2xl p-6 shadow-md transition-all duration-200 hover:shadow-lg ${className || ''}`}
      style={{ ...glassStyle, minHeight: 340 }}
    >
      {/* Groot logo */}
      <img
        src={offer.casinoLogo}
        alt={offer.casinoName}
        className="h-24 w-24 object-contain mb-4"
        style={{ 
          borderRadius: 20,
          boxShadow: '10px 10px 16px #969696, -5px -5px 16px #ffffff, inset 1px 1px 2px #969696, inset -1px -1px 2px #ffffff'
        }}
        loading="lazy"
      />
      {/* Rating en naam */}
      <div className="flex items-center gap-2 w-full justify-center mb-2">
        <div className="flex items-center rounded-full bg-gray-50/80 px-2 py-0.5">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-xs font-semibold tabular-nums text-gray-900">{offer.rating}</span>
        </div>
        <span className="text-base font-bold text-gray-900 truncate">{offer.casinoName}</span>
      </div>
      {/* Bonus prominent */}
      <div className="flex flex-col items-center w-full mb-2">
        <span className="text-3xl font-extrabold text-black leading-tight">{offer.bonusAmount}</span>
        {offer.freeSpins > 0 && (
          <span className="text-base font-semibold text-black mt-1">+ {offer.freeSpins} Free Spins</span>
        )}
      </div>
      {/* Bonusomschrijving */}
      <div className="mb-3 text-center text-[15px] font-medium text-gray-700 w-full">{offer.description}</div>
      {/* Requirements als badges */}
      <div className="mb-4 flex flex-wrap justify-center gap-2 w-full">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          <Check className="mr-1 h-3 w-3 text-gokkerz-green" />
          {offer.requirements}
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          <Check className="mr-1 h-3 w-3 text-gokkerz-green" />
          Nederlandse licentie
        </span>
      </div>
      {/* Knoppen */}
      <div className="mt-auto flex w-full gap-2 pt-2">
        <Button
          className="flex-1 py-3 text-xs font-semibold text-white shadow-md"
          style={{ background: casinoColor, borderColor: casinoColor }}
          asChild
        >
          <a
            href={getCasinoUrl(offer.casinoName)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Claim bonus bij ${offer.casinoName}`}
          >
            Claim Bonus
          </a>
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-2 py-3 text-xs font-semibold shadow-md"
          style={{ borderColor: casinoColor, color: casinoColor }}
          asChild
        >
          <Link
            to={`/casinos/${offer.casinoName.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
            aria-label={`Bekijk ${offer.casinoName} review`}
          >
            Review
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BonusCardRedesign;
