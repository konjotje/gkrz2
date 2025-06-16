import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/KnopComponent';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Shield,
  Award,
  Gift,
  Check,
  MessageCircle,
  Calendar,
  Clock,
  Info,
  ThumbsUp,
  Users,
  User,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useIsMobile from '@/hooks/gebruikMobielHook';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { casinoBrandColors } from '@/lib/casinoKleurenData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CasinoLogoSlider from '@/components/CasinoLogoSlider';
import { casinoLogoStyles } from '@/lib/styles';
import { useMediaQuery } from 'react-responsive';
import { blogPosts } from '@/lib/blogBerichtenData';
import { BlogPostCard } from '@/components/BlogPostCard';
import CasinoCardLayout from '@/components/CasinoCardLayout';
import BonusCardRedesign from '@/components/BonusCardRedesign';

const getCasinoUrl = (casinoName: string) => {
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
    'ZeBet': 'https://www.zebet.nl'
  };
  return urls[casinoName] || '#';
};

const Index = () => {
  const featuredCasinos = [
    {
      id: 1,
      name: 'Fair Play',
      rating: 4.5,
      bonus: '100% tot €200 + 100 Free Spins',
      logo: '/casinologos/casilogos/fairplay casino.svg',
      minDeposit: '€10',
      features: ['Betrouwbaar', 'Live Casino', 'Nederlandse klantenservice'],
    },
    {
      id: 2,
      name: 'GGPoker',
      rating: 4.7,
      bonus: '100% tot €600 + 50 Free Spins',
      logo: '/casinologos/casilogos/ggpoker.svg',
      minDeposit: '€10',
      features: ['Poker specialist', 'Casino games', 'Snelle uitbetalingen'],
    },
    {
      id: 3,
      name: '777',
      rating: 4.5,
      bonus: '100% tot €200 + 77 Free Spins',
      logo: '/casinologos/casilogos/777.svg',
      minDeposit: '€10',
      features: ['Lucky promoties', 'Klassieke games', 'Wekelijkse bonussen'],
    },
    {
      id: 4,
      name: 'Goldrun Casino',
      rating: 4.6,
      bonus: '100% tot €250 + 100 Free Spins',
      logo: '/casinologos/casilogos/goldrun casino.svg',
      minDeposit: '€10',
      features: ['Golden welkomstbonus', 'Uitgebreid spelaanbod', 'VIP programma'],
    },
  ];

  const featuredBonuses = [
    {
      type: 'Welkomstbonus',
      casino: 'TOTO Casino',
      amount: '€1000 + 100 Free Spins',
      description: '100% match bonus',
      requirements: '25x inzetvereiste',
      logo: '/casinologos/casilogos/toto.svg',
    },
    {
      type: 'Free Spins',
      casino: 'BetCity',
      amount: '250 Free Spins',
      description: 'Bij eerste storting',
      requirements: '35x inzetvereiste',
      logo: '/casinologos/casilogos/betcity.svg',
    },
    {
      type: 'Cashback Bonus',
      casino: 'Holland Casino',
      amount: '10% Cashback',
      description: 'Wekelijkse cashback',
      requirements: 'Geen inzetvereiste',
      logo: '/casinologos/casilogos/holland casino.svg',
    },
    {
      type: 'No Deposit',
      casino: 'Kansino',
      amount: '€25 Gratis',
      description: 'Geen storting nodig',
      requirements: '40x inzetvereiste',
      logo: '/casinologos/casilogos/kansino.svg',
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: 'De beste casino bonussen van deze maand',
      excerpt:
        "Ontdek welke casino's deze maand de meest lucratieve bonussen aanbieden en hoe je hier optimaal van kunt profiteren.",
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Casino+Bonussen',
      date: '3 dagen geleden',
      author: 'Casino Expert',
    },
    {
      id: 2,
      title: 'Gokverslaving herkennen en voorkomen',
      excerpt:
        "Tips en adviezen om problematisch gokgedrag te herkennen en verantwoord te blijven spelen bij online casino's.",
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Verantwoord+Spelen',
      date: '5 dagen geleden',
      author: 'Gokkerz Team',
    },
    {
      id: 3,
      title: "Nieuwe spellen bij Nederlandse casino's",
      excerpt:
        'Een overzicht van de nieuwste en meest populaire casino spellen die deze maand zijn toegevoegd.',
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Nieuwe+Spellen',
      date: '1 week geleden',
      author: 'Game Expert',
    },
    {
      id: 4,
      title: 'Live Casino Tips & Tricks',
      excerpt:
        'Expert tips om je live casino ervaring te verbeteren en je winkansen te verhogen bij live dealer games.',
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Live+Casino',
      date: '1 week geleden',
      author: 'Live Casino Expert',
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderCasinoCard = (casino: (typeof featuredCasinos)[0]) => (
    <Card
      key={casino.id}
      className="casino-card-hover flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        ['--brand-shadow-color' as any]: `${casinoBrandColors[casino.name] || '#00CC66'}40`,
      }}
    >
      <CardHeader className="relative p-4 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
              <img
                src={casino.logo}
                alt={casino.name}
                className={`h-24 w-auto transition-transform duration-300 group-hover:scale-105 ${casinoLogoStyles.logo}`}
              />
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-white/90 px-2 py-0.5 shadow-sm">
              <Star className="mr-0.5 h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{casino.rating}</span>
            </div>
          </div>
          <CardTitle className="mb-3 text-lg">{casino.name}</CardTitle>
        </div>
        <div className="space-y-2">
          <CardDescription className="flex flex-col items-center">
            {casino.bonus.includes('+') ? (
              <>
                <span className="mb-2 text-4xl font-bold text-black">
                  {casino.bonus.split('+')[0].trim()}
                </span>
                <span className="text-lg text-gray-500">+ {casino.bonus.split('+')[1].trim()}</span>
              </>
            ) : (
              <span className="mb-2 text-4xl font-bold text-black">{casino.bonus}</span>
            )}
            <span className="mt-2 text-sm font-medium text-gray-500">
              Min. Storting: {casino.minDeposit}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-4 py-2 text-center">
        <ul className="space-y-2">
          {casino.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-sm">
              <Check className="mr-2 h-4 w-4 flex-shrink-0 text-gokkerz-green" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2">
        <div className="flex w-full flex-col gap-2">
          <Button className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90" asChild>
            <a
              href={getCasinoUrl(casino.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center"
            >
              Bezoek Casino
            </a>
          </Button>
          <Button variant="outline" className="w-full text-sm shadow-sm" asChild>
            <Link
              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              className="flex w-full items-center justify-center"
            >
              Lees Review
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <Layout>
      <Helmet>
        <title>Gokkerz.nl | Beste Online Casino's Nederland 2025</title>
        <meta
          name="description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk bonussen, spellen en reviews van KSA-vergunde casino's. ✓ Betrouwbaar ✓ Veilig ✓ 100% Legaal"
        />
        <meta
          name="keywords"
          content="online casino nederland, legaal casino, casino bonus, casino reviews, ksa vergunning, beste online casino"
        />
        <link rel="canonical" href="https://gokkerz.nl/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gokkerz.nl | Beste Online Casino's Nederland 2025" />
        <meta
          property="og:description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk bonussen, spellen en reviews van KSA-vergunde casino's."
        />
        <meta property="og:url" content="https://gokkerz.nl/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gokkerz.nl | Beste Online Casino's Nederland 2025" />
        <meta
          name="twitter:description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk actuele bonussen en eerlijke reviews."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gokkerz.nl',
            url: 'https://gokkerz.nl',
            logo: 'https://gokkerz.nl/assets/Gokkerz.nl.svg',
            description: "Dé gids voor legale online casino's in Nederland",
            sameAs: ['https://twitter.com/Gokkerz_nl'],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pb-24 pt-16">
        <div className="container relative z-10">
          {isMobile ? (
            // Mobile version
            <div className="flex flex-col items-center text-center mb-12">
              {/* Hero section top badge */}
              <div className="mb-4 flex items-center">
                <span className="inline-flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <Award className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">Beste Keuze 2025</span>
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl max-w-4xl">
                <span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">
                  Ontdek Alle Nederlandse
                </span>
                <br />
                Online Casinos
              </h1>

              <p className="max-w-3xl text-lg text-gray-600 md:text-xl mt-4 mb-8">
                Op zoek naar de beste bonussen, hoge RTP's, snelle uitbetalingen en de nieuwste, veiligste én legale online casino's van Nederland? Bij Gokkerz.nl vindt je actueel casinonieuws, eerlijke reviews en meer.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row justify-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="button-pulse bg-green-gradient px-8 py-6 shadow-lg hover:opacity-90"
                >
                  <Link
                    to="/casinos"
                    className="inline-flex items-center gap-2 text-lg font-semibold"
                  >
                    Bekijk Casino's
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 px-8 py-6">
                  <Link
                    to="/bonussen"
                    className="inline-flex items-center gap-2 text-lg font-semibold"
                  >
                    Casino Bonussen
                    <Gift className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Casino Logo Slider */}
              <div className="w-full">
                <CasinoLogoSlider />
              </div>
            </div>
          ) : (
            // Desktop version
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                {/* Hero section top badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                    <Award className="mr-2 h-5 w-5 text-gokkerz-green" />
                    <span className="font-medium">Beste Keuze 2025</span>
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                  <span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">
                    Ontdek Alle Nederlandse
                  </span>
                  <br />
                  Online Casinos
                </h1>

                <p className="max-w-xl text-lg text-gray-600 md:text-xl mt-4 mb-8">
                  Op zoek naar de beste bonussen, hoge RTP's, snelle uitbetalingen en de nieuwste, veiligste én legale online casino's van Nederland? Bij Gokkerz.nl vindt je actueel casinonieuws, eerlijke reviews en meer.
                </p>

                <div className="flex gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="button-pulse bg-green-gradient px-8 py-6 shadow-lg hover:opacity-90"
                  >
                    <Link
                      to="/casinos"
                      className="inline-flex items-center gap-2 text-lg font-semibold"
                    >
                      Bekijk Casino's
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 px-8 py-6">
                    <Link
                      to="/bonussen"
                      className="inline-flex items-center gap-2 text-lg font-semibold"
                    >
                      Casino Bonussen
                      <Gift className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Casino Logo Slider */}
              <div className="flex items-center">
                <CasinoLogoSlider />
              </div>
            </div>
          )}
        </div>

      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/casinos" className="group">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                <Shield className="h-12 w-12 mb-4 text-gokkerz-green" />
                <h3 className="text-xl font-semibold mb-2">Veilig & Legaal Gokken</h3>
                <p className="text-gray-600">Ontdek betrouwbare online casino's met Nederlandse licentie en veilige betaalmethoden.</p>
              </div>
            </Link>
            
            <Link to="/verantwoord-gokken" className="group">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                <ThumbsUp className="h-12 w-12 mb-4 text-gokkerz-green" />
                <h3 className="text-xl font-semibold mb-2">100% Betrouwbaar</h3>
                <p className="text-gray-600">We reviewen alleen legale casino's met een Nederlandse vergunning van de Kansspelautoriteit.</p>
              </div>
            </Link>
            
            <Link to="/bonussen" className="group">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                <Gift className="h-12 w-12 mb-4 text-gokkerz-green" />
                <h3 className="text-xl font-semibold mb-2">Beste Bonussen</h3>
                <p className="text-gray-600">Vergelijk de beste casino bonussen en free spins aanbiedingen van dit moment.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green mb-4">
              Casino Blog
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Laatste Casino Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Blijf op de hoogte van het laatste casino nieuws, reviews en expert tips
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8">
            {/* Featured Large Blog Post */}
            <div className="col-span-6">
              <BlogPostCard post={blogPosts[0]} variant="featured" />
            </div>

            {/* 2x2 Grid of Square Posts */}
            <div className="col-span-6 grid grid-cols-2 gap-6">
              {blogPosts.slice(1, 5).map((post) => (
                <BlogPostCard key={post.id} post={post} variant="square" />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {/* Featured Large Blog Post */}
            <BlogPostCard post={blogPosts[0]} variant="featured" />

            {/* 2x2 Grid of Square Posts */}
            <div className="grid grid-cols-2 gap-4">
              {blogPosts.slice(1, 5).map((post) => (
                <BlogPostCard key={post.id} post={post} variant="square" />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="button-pulse bg-green-gradient shadow-lg hover:opacity-90 px-8 py-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-lg font-semibold">
                Alle Artikelen Bekijken
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Casinos Section */}
      <section className="py-20">
        <div className="container max-w-[1440px]">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Top Online Casino's
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Legale Online Casino's Nederland 2025</h2>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-600">
                Ontdek de beste legale online casino's met een Nederlandse vergunning van de
                Kansspelautoriteit (KSA). Vergelijk betrouwbare casino's op bonus, spelaanbod,
                uitbetalingssnelheid en klantenservice.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <Shield className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">KSA Vergunning</span>
                </div>
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <ThumbsUp className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">iDEAL Betalingen</span>
                </div>
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <Clock className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* VERWIJDERD: <div className="mb-16 overflow-hidden rounded-xl border bg-white shadow-lg"> */}
            {isMobile ? (
              <div className="divide-y divide-gray-100">
                {featuredCasinos.slice(0, 4).map((casino) => (
                  <CasinoCardLayout
                    key={casino.id}
                    casino={casino}
                    getCasinoUrl={getCasinoUrl}
                    layout="mobile"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-8">
                {featuredCasinos.slice(0, 4).map((casino) => (
                  <CasinoCardLayout
                    key={casino.id}
                    casino={casino}
                    getCasinoUrl={getCasinoUrl}
                    layout="desktop"
                  />
                ))}
              </div>
            )}
          {/* VERWIJDERD: </div> */}

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/casinos" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Bekijk Alle Casino's
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Casino Bonussen */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Exclusieve Bonussen
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Casino Bonussen in Nederland</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Ontdek de beste online casino bonussen van dit moment. Van welkomstbonussen tot free
              spins en cashback acties.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredBonuses.map((bonus) => (
              <BonusCardRedesign
                key={bonus.casino}
                offer={{
                  id: bonus.id || bonus.casino,
                  casinoName: bonus.casino,
                  casinoLogo: bonus.logo,
                  bonusAmount: bonus.amount,
                  freeSpins: bonus.freeSpins || 0,
                  description: bonus.description,
                  requirements: bonus.requirements,
                  rating: bonus.rating || 4.5,
                }}
                getCasinoUrl={getCasinoUrl}
              />
            ))}
          </div>

          <div className="mb-20 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/bonussen" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Bekijk Alle Bonussen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Bonus Types Explanation */}
          <div className="mb-16 mt-24">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-gokkerz-green/10 px-6 py-2 text-sm font-medium text-gokkerz-green ring-1 ring-inset ring-gokkerz-green/20">
                Casino Bonus Guide
              </span>
              <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                Soorten Casino Bonussen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Ontdek alle verschillende soorten casino bonussen en leer hoe je er maximaal van
                kunt profiteren
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🎁
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Welkomstbonus</h4>
                    <p className="mb-3 text-gray-600">
                      Ontvang als nieuwe speler een verdubbeling van je eerste storting tot €250. Extra speelgeld en spins bij registratie.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">100% tot €200 + 100 free spins</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    ⭐️
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">No Deposit Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Speel gratis zonder storting. Ontvang automatisch speelgeld of free spins
                      zodra je een account aanmaakt bij het online casino.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">€10 gratis speelgeld</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🔃
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Reload Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Extra bonus bij een nieuwe storting voor bestaande spelers. Vaak beschikbaar
                      tijdens promoties, events of wekelijkse casinoacties.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">50% bonus tot €100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🏆
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Cashback Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Krijg een percentage van je verliezen terug als cashback. Deze bonus heeft
                      meestal lagere inzetvereisten dan andere promoties.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">10% cashback tot €100</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🫶
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Loyaliteitspunten</h4>
                    <p className="mb-3 text-gray-600">Verdien punten bij elke inzet verdien geld terug. Loyaliteitsprogramma’s bieden vaak extra bonussen.</p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">1 punt per €10 inzet</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    👑
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">High Roller Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Speciaal voor spelers die groots storten. Ontvang hogere bonussen bij grote
                      bedragen en profiteer van exclusieve extra’s.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">50% tot €2000 (min. €1000)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Games & Experience Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Casino Games
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Ontdek het Beste Spelaanbod</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Van klassieke tafelspellen tot de nieuwste slots - vind de beste casino games bij onze
              betrouwbare partners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Online Slots */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎰</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Online Slots</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>1000+ video slots</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Klassieke fruitautomaten</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Jackpot slots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Roulette */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎲</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Roulette</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Europees Roulette</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Roulette</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Auto Roulette</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blackjack */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">♠️</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Blackjack</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Classic Blackjack</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Blackjack</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Speed Blackjack</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Live Casino */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎥</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Live Casino</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Dealers</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Game Shows</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>VIP Tables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/casinos" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Hier te spelen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default Index;
