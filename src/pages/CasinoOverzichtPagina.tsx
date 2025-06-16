import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/KnopComponent';
import { Link } from 'react-router-dom';
import { Star, Info, Shield, Check, ThumbsUp, Clock, Users, Gift } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import useMediaQuery from '@/hooks/gebruikMobielHook';
import HeroHeader from '@/components/HeroHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { casinoLogoStyles } from '@/lib/styles';
import { adjustColor } from '@/lib/utils';
import CasinoCardLayout from '@/components/CasinoCardLayout';

export const casinos = [
  {
    id: 1,
    name: 'TOTO Casino',
    logo: '/casinologos/casilogos/toto.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.8,
    bonus: '100% tot €1000 + 100 Free Spins',
    minDeposit: '€10',
    features: ['2500+ games', 'Live Casino', 'Nederlandse licentie'],
  },
  {
    id: 2,
    name: 'BetCity',
    logo: '/casinologos/casilogos/betcity.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.7,
    bonus: '€250 + 100 Free Spins',
    minDeposit: '€10',
    features: ['2000+ games', 'Snelle uitbetalingen', '24/7 support'],
  },
  {
    id: 3,
    name: 'Holland Casino',
    logo: '/casinologos/casilogos/holland casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.9,
    bonus: '100% tot €200 + 100 Free Spins',
    minDeposit: '€10',
    features: ['Betrouwbaar staatscasino', 'Live Casino', 'VIP programma'],
  },
  {
    id: 4,
    name: 'Kansino',
    logo: '/casinologos/casilogos/kansino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.6,
    bonus: '100% tot €500 + 100 Free Spins',
    minDeposit: '€10',
    features: ['1800+ games', 'Snelle registratie', 'Groot spelaanbod'],
  },
  {
    id: 5,
    name: 'Circus Casino',
    logo: '/casinologos/casilogos/circus.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Exclusieve games', 'Live Casino', 'Mobile friendly'],
  },
  {
    id: 6,
    name: "Jack's Casino",
    logo: '/casinologos/casilogos/jacks casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.7,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ["Bekend van fysieke casino's", 'Uitgebreid spelaanbod', '24/7 klantenservice'],
  },
  {
    id: 7,
    name: 'Unibet',
    logo: '/casinologos/casilogos/unibet.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.8,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sport & Casino', 'Internationale reputatie', 'Uitstekende app'],
  },
  {
    id: 8,
    name: 'LeoVegas',
    logo: '/casinologos/casilogos/leovegas.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.7,
    bonus: '€1000 + 50 Free Spins',
    minDeposit: '€10',
    features: ['Award-winning casino', 'Beste mobile casino', 'Grote jackpots'],
  },
  {
    id: 9,
    name: '777',
    logo: '/casinologos/casilogos/777.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Classic casino games', 'Betrouwbare uitbetalingen', 'Retro thema'],
  },
  {
    id: 10,
    name: 'Fair Play',
    logo: '/casinologos/casilogos/fairplay casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.6,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Eerlijk spelaanbod', 'Nederlandse klantenservice', 'Snelle verificatie'],
  },
  {
    id: 11,
    name: '365',
    logo: '/casinologos/casilogos/365.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.7,
    bonus: '100% tot €365',
    minDeposit: '€10',
    features: ['Sport & Casino', '24/7 actief', 'Internationale ervaring'],
  },
  {
    id: 12,
    name: '711',
    logo: '/casinologos/casilogos/711.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.4,
    bonus: '100% tot €100',
    minDeposit: '€10',
    features: ['Modern platform', 'Snelle uitbetalingen', 'Vele betaalmethoden'],
  },
  {
    id: 13,
    name: 'Bet MGM',
    logo: '/casinologos/casilogos/bet mgm.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.8,
    bonus: '100% tot €500',
    minDeposit: '€10',
    features: ['Wereldberoemd merk', 'Luxe VIP programma', 'Uitgebreid live casino'],
  },
  {
    id: 14,
    name: 'BetNation',
    logo: '/casinologos/casilogos/betnation.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '200% tot €200',
    minDeposit: '€10',
    features: ['Nieuwe casino ervaring', 'Moderne interface', 'Snelle registratie'],
  },
  {
    id: 15,
    name: 'Bingoal',
    logo: '/casinologos/casilogos/bingoal.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.4,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Bingo specialist', 'Casino games', 'Sociale gaming'],
  },
  {
    id: 16,
    name: 'ComeOn',
    logo: '/casinologos/casilogos/comeon.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.6,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Gebruiksvriendelijk', 'Snelle payouts', 'Loyaliteitsprogramma'],
  },
  {
    id: 17,
    name: 'GGPoker',
    logo: '/casinologos/casilogos/ggpoker.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.7,
    bonus: '100% tot €600',
    minDeposit: '€10',
    features: ['Poker specialist', 'Casino games', 'Professionele setup'],
  },
  {
    id: 18,
    name: 'Goldrun Casino',
    logo: '/casinologos/casilogos/goldrun casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Gouden jackpots', 'VIP behandeling', 'Exclusieve slots'],
  },
  {
    id: 19,
    name: 'Hard Rock Casino',
    logo: '/casinologos/casilogos/hardrock casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.8,
    bonus: '100% tot €1000',
    minDeposit: '€10',
    features: ['Iconisch merk', 'Premium ervaring', 'Exclusieve games'],
  },
  {
    id: 20,
    name: 'Hommerson',
    logo: '/casinologos/casilogos/hommerson.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Nederlandse traditie', 'Betrouwbaar', 'Persoonlijke service'],
  },
  {
    id: 21,
    name: 'Lucky 7 Casino',
    logo: '/casinologos/casilogos/lucky 7 casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.4,
    bonus: '777 Free Spins',
    minDeposit: '€10',
    features: ['Lucky promoties', 'Klassieke games', 'Wekelijkse bonussen'],
  },
  {
    id: 22,
    name: 'One Casino',
    logo: '/casinologos/casilogos/one casino.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.6,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Eigen games', 'Unieke ervaring', 'Nederlandse klantenservice'],
  },
  {
    id: 23,
    name: 'Scori Pro',
    logo: '/casinologos/casilogos/scori pro.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sports betting', 'Casino games', 'Pro features'],
  },
  {
    id: 24,
    name: 'TonyBet',
    logo: '/casinologos/casilogos/tonybet.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.6,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sportweddenschappen', 'Live casino', 'Crypto-friendly'],
  },
  {
    id: 25,
    name: 'VBet',
    logo: '/casinologos/casilogos/vbet.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €500',
    minDeposit: '€10',
    features: ['Virtuele sports', 'Live betting', 'Casino games'],
  },
  {
    id: 26,
    name: 'Winnit',
    logo: '/casinologos/casilogos/winnit.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.4,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Winnende formule', 'Daily promoties', 'Snelle uitbetalingen'],
  },
  {
    id: 27,
    name: 'ZeBet',
    logo: '/casinologos/casilogos/ze bet.svg',
    logoClassName: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]",
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Modern platform', 'Vele sporten', 'Casino sectie'],
  },
];

const casinoBrandColors: Record<string, string> = {
  'TOTO Casino': '#00CC66',
  BetCity: '#FF6600',
  'Holland Casino': '#FFCC00',
  Kansino: '#0066FF',
  'Circus Casino': '#FF0000',
  "Jack's Casino": '#6600CC',
  Unibet: '#00FF00',
  LeoVegas: '#FF9900',
  '777': '#FF3333',
  'Fair Play': '#33CCFF',
  '365': '#FF6600',
  '711': '#FFCC33',
  'Bet MGM': '#CC9900',
  BetNation: '#FF6600',
  Bingoal: '#FF3333',
  ComeOn: '#00CC99',
  GGPoker: '#FF6600',
  'Goldrun Casino': '#FFCC00',
  'Hard Rock Casino': '#CC0000',
  Hommerson: '#33CC33',
  'Lucky 7 Casino': '#FF9900',
  'One Casino': '#00CCFF',
  'Scori Pro': '#FF6600',
  TonyBet: '#FF3333',
  VBet: '#FF6600',
  Winnit: '#33CCFF',
  ZeBet: '#FFCC33',
};

export const getCasinoUrl = (casinoName: string) => {
  const urls: { [key: string]: string } = {
    'TOTO Casino': 'https://www.toto.nl',
    'BetCity': 'https://www.betcity.nl',
    'Holland Casino': 'https://www.hollandcasino.nl',
    'Kansino': 'https://www.kansino.nl',
    'Circus Casino': 'https://www.circus.nl',
    "Jack's Casino": 'https://www.jacks.nl',
    'Unibet': 'https://www.unibet.nl',
    'LeoVegas': 'https://www.leovegas.nl',
    '777': 'https://www.casino777.nl',
    'Fair Play': 'https://www.fairplaycasino.nl',
    '365': 'https://www.bet365.nl',
    '711': 'https://www.711.nl',
    'Bet MGM': 'https://www.betmgm.nl',
    'BetNation': 'https://www.betnation.nl',
    'Bingoal': 'https://www.bingoal.nl',
    'ComeOn': 'https://www.comeon.nl',
    'GGPoker': 'https://www.ggpoker.nl',
    'Goldrun Casino': 'https://www.goldruncasino.nl',
    'Hard Rock Casino': 'https://www.hardrockcasino.nl',
    'Hommerson': 'https://www.hommerson.nl',
    'Lucky 7 Casino': 'https://www.lucky7.nl',
    'One Casino': 'https://www.onecasino.nl',
    'Scori Pro': 'https://www.scoripro.nl',
    'TonyBet': 'https://www.tonybet.nl',
    'VBet': 'https://www.vbet.nl',
    'Winnit': 'https://www.winnit.nl',
    'ZeBet': 'https://www.zebet.nl',
  };
  return urls[casinoName] || '#';
};

const Casinos = () => {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <Layout>
      <Helmet>
        <title>Online Casino's Nederland 2025 | Reviews & Vergelijking</title>
        <meta
          name="description"
          content="Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen. ✓ KSA-vergund ✓ iDEAL ✓ Betrouwbare reviews"
        />
        <meta
          name="keywords"
          content="online casino vergelijking, casino reviews, legale casino's nederland, beste online casino, ksa vergunning, casino ervaring"
        />
        <link rel="canonical" href="https://gokkerz.nl/casinos" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Casino's Nederland 2025 | Reviews & Vergelijking"
        />
        <meta
          property="og:description"
          content="Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen van KSA-vergunde casino's."
        />
        <meta property="og:url" content="https://gokkerz.nl/casinos" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Casino's Nederland 2025 | Reviews & Vergelijking"
        />
        <meta
          name="twitter:description"
          content="Vergelijk legale Nederlandse online casino's. Actuele reviews en bonussen."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Online Casino's Nederland 2025 | Reviews & Vergelijking",
            description:
              "Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen.",
            author: {
              '@type': 'Organization',
              name: 'Gokkerz.nl',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Gokkerz.nl',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gokkerz.nl/assets/Gokkerz.nl.svg',
              },
            },
            dateModified: '2025-04-30',
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="2025 Casino Overzicht"
        title={
          <>
            Alle Legale <span className="text-gokkerz-green">Online Casinos</span> Nederland
          </>
        }
        description="Bekijk alle betrouwbare en legale online casino's met Nederlandse vergunning. Ontdek casino's met snelle uitbetalingen, aantrekkelijke bonussen en gratis spins. Speel veilig bij gereguleerde Nederlandse casino's."
        bullets={[
          { icon: <Shield className="h-4 w-4 text-gokkerz-green" />, text: "Legale casino's" },
          { icon: <Clock className="h-4 w-4 text-gokkerz-green" />, text: 'Snelle uitbetalingen' },
          { icon: <Gift className="h-4 w-4 text-gokkerz-green" />, text: 'Welkomstbonussen' },
        ]}
      />
      <div className="container mx-auto px-4">
        {/* Casino Cards Container */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
            {isMobile ? (
              <div className="divide-y divide-gray-100">
                {casinos.map((casino) => (
                  <CasinoCardLayout
                    key={casino.id}
                    casino={casino}
                    getCasinoUrl={getCasinoUrl}
                    layout="mobile"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-8 p-8 bg-white/80">
                {casinos.map((casino) => (
                  <CasinoCardLayout
                    key={casino.id}
                    casino={casino}
                    getCasinoUrl={getCasinoUrl}
                    layout="desktop"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Extra SEO-content onder de tabel */}
        <div className="prose mt-12 max-w-none">
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent">
            Hoe Kies Je het Beste Online Casino?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Bij het kiezen van een online casino zijn er verschillende factoren om rekening mee te
            houden:
          </p>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">🎲</span>
                <span>Spelaanbod</span>
              </CardTitle>
              <CardDescription className="text-base">
                Kijk naar het aantal en type spellen dat wordt aangeboden. De beste casino's bieden:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">Slots van top providers</li>
                  <li className="text-gray-700">Live casino games</li>
                  <li className="text-gray-700">Tafelspellen</li>
                  <li className="text-gray-700">Exclusieve titels</li>
                </ul>
              </CardDescription>
            </Card>
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">💰</span>
                <span>Betalingen</span>
              </CardTitle>
              <CardDescription className="text-base">
                Let op de beschikbare betaalmethoden:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">iDEAL</li>
                  <li className="text-gray-700">Bankoverschrijving</li>
                  <li className="text-gray-700">Trustly</li>
                  <li className="text-gray-700">Uitbetalingssnelheid</li>
                </ul>
              </CardDescription>
            </Card>
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">🎁</span>
                <span>Bonussen</span>
              </CardTitle>
              <CardDescription className="text-base">
                Vergelijk de verschillende bonusaanbiedingen:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">Welkomstbonus</li>
                  <li className="text-gray-700">Free spins</li>
                  <li className="text-gray-700">Loyaliteitsprogramma</li>
                  <li className="text-gray-700">Voorwaarden</li>
                </ul>
              </CardDescription>
            </Card>
          </div>

          {/* Verplaatste informatieve kaarten */}
          <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-green-50 p-6">
              <CardTitle className="mb-3 text-lg">
                ✓ Waarom Kiezen voor een Legaal Casino?
              </CardTitle>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-green-600" />
                  <span>Gegarandeerde veilige speelomgeving</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Betrouwbare uitbetalingen</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Nederlandse klantenservice</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Hulp bij problematisch speelgedrag</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 p-6">
              <CardTitle className="mb-3 text-lg">🎰 Beschikbare Casino's</CardTitle>
              <CardDescription className="space-y-2">
                <p>Je vindt hier alle bekende namen zoals:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>TOTO Casino</li>
                  <li>Holland Casino Online</li>
                  <li>BetCity</li>
                  <li>Kansino</li>
                  <li>Jack's Casino</li>
                  <li>En vele anderen...</li>
                </ul>
              </CardDescription>
            </Card>
          </div>

          <h2 className="mb-6 text-2xl font-bold">Veelgestelde Vragen over Online Casino's</h2>
          <div className="mb-12 space-y-8">
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Info className="h-5 w-5 text-gokkerz-green" />
                Zijn alle online casino's in Nederland legaal?
              </h3>
              <p className="leading-relaxed text-gray-600">
                Nee, alleen casino's met een Nederlandse vergunning van de Kansspelautoriteit zijn
                legaal. Deze zijn herkenbaar aan het KSA-logo en .nl-domein.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Shield className="h-5 w-5 text-gokkerz-green" />
                Hoe zit het met de veiligheid?
              </h3>
              <p className="leading-relaxed text-gray-600">
                Legale Nederlandse online casino's zijn verplicht om gebruik te maken van de
                nieuwste beveiligingstechnologieën en moeten voldoen aan strenge eisen op het gebied
                van verantwoord spelen.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Users className="h-5 w-5 text-gokkerz-green" />
                Wat is CRUKS?
              </h3>
              <p className="leading-relaxed text-gray-600">
                CRUKS is het Centraal Register Uitsluiting Kansspelen. Alle legale online casino's
                zijn verplicht om spelers te controleren in dit register voordat ze kunnen spelen.
              </p>
            </div>
          </div>

          {/* Conclusie met verbeterde visuele presentatie */}
          <div className="relative mb-8 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8">
            <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
            <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent">
              Conclusie
            </h2>
            <p className="relative z-10 text-lg leading-relaxed text-gray-600">
              Met 27 legale online casino's in Nederland heb je ruime keus. Elk casino heeft zijn
              eigen sterke punten, of je nu op zoek bent naar de beste bonussen, het grootste
              spelaanbod of de snelste uitbetalingen. Gebruik onze vergelijkingstabel om het beste
              casino voor jouw voorkeuren te vinden.
            </p>
          </div>
        </div>
      </div>
      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default Casinos;
