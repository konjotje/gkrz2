import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroHeader from '@/components/HeroHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Search,
  MessageCircle,
  Calendar,
  ArrowRight,
  Star,
  ThumbsUp,
  Clock,
  Info,
  ChevronRight,
  Gift,
  Shield,
  ExternalLink,
  BookOpen,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '../lib/blogPosts';
import { BlogPostCard } from '@/components/BlogPostCard';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('alle');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 9;

  const blogCategories = [
    {
      id: 'nieuws',
      title: 'Nieuws',
      articles: blogPosts.filter((post) => post.category === 'Nieuws'),
    },
    {
      id: 'reviews',
      title: 'Reviews',
      articles: blogPosts.filter((post) => post.category === 'Reviews'),
    },
    { id: 'gids', title: 'Gids', articles: blogPosts.filter((post) => post.category === 'Gids') },
  ];

  // Sort blogs by date (newest first) and handle pagination
  const filteredArticles = React.useMemo(() => {
    let filtered = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (selectedCategory !== 'alle') {
      const cat = blogCategories.find((c) => c.id === selectedCategory);
      filtered = cat ? cat.articles : [];
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredArticles.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredArticles.length / blogsPerPage);

  // Check if a blog is one of the three most recent
  const isNewBlog = (blogDate: string) => {
    const sortedDates = [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
      .map((post) => post.date);
    return sortedDates.includes(blogDate);
  };

  return (
    <Layout>
      <Helmet>
        <title>Casino Blog | Nieuws, Tips & Gidsen 2025</title>
        <meta
          name="description"
          content="Lees het laatste nieuws, expert reviews en diepgaande gidsen over online casino's in Nederland. Casino tips, strategieën en trends door casino experts."
        />
        <meta
          name="keywords"
          content="casino nieuws, casino blog, casino tips, casino strategie, online casino gids, casino reviews"
        />
        <link rel="canonical" href="https://gokkerz.nl/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Casino Blog | Nieuws, Tips & Gidsen 2025" />
        <meta
          property="og:description"
          content="Ontdek het laatste nieuws en expert tips over online casino's in Nederland. Actuele casino informatie en strategieën."
        />
        <meta property="og:url" content="https://gokkerz.nl/blog" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casino Blog | Nieuws, Tips & Gidsen 2025" />
        <meta
          name="twitter:description"
          content="Casino nieuws, tips en expert inzichten. Blijf op de hoogte van de laatste ontwikkelingen."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Gokkerz Casino Blog',
            description: 'Expert casino nieuws, tips en gidsen voor Nederlandse spelers',
            publisher: {
              '@type': 'Organization',
              name: 'Gokkerz.nl',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gokkerz.nl/assets/Gokkerz.nl.svg',
              },
            },
            url: 'https://gokkerz.nl/blog',
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="2025 Blog Overzicht"
        title={
          <>
            Casino <span className="text-gokkerz-green">Nieuws & Gidsen</span>
          </>
        }
        description="Lees het laatste nieuws, tips en diepgaande gidsen over online casino’s in Nederland. Altijd actueel, betrouwbaar en geschreven door experts."
        bullets={[
          { icon: <BookOpen className="h-4 w-4 text-gokkerz-green" />, text: 'Uitgebreide Gidsen' },
          { icon: <Clock className="h-4 w-4 text-gokkerz-green" />, text: 'Altijd Actueel' },
          { icon: <User className="h-4 w-4 text-gokkerz-green" />, text: 'Expert Inzichten' },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-6">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 md:grid-cols-4">
            <button
              key="alle"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-br from-orange-500 to-orange-700 px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${selectedCategory === 'alle' ? 'ring-2 ring-orange-500 ring-offset-2' : ''}`}
              onClick={() => setSelectedCategory('alle')}
            >
              <MessageCircle className="mr-1 h-5 w-5" />
              <span>Alle</span>
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                className={`group relative flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-br px-3 py-2 ${
                  category.id === 'nieuws'
                    ? 'from-blue-500 to-blue-700'
                    : category.id === 'reviews'
                      ? 'from-purple-500 to-purple-700'
                      : 'from-green-500 to-green-700'
                } text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  selectedCategory === category.id
                    ? 'ring-2 ring-offset-2 ' +
                      (category.id === 'nieuws'
                        ? 'ring-blue-500'
                        : category.id === 'reviews'
                          ? 'ring-purple-500'
                          : 'ring-green-500')
                    : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.id === 'nieuws' && <Clock className="mr-1 h-5 w-5" />}
                {category.id === 'reviews' && <Star className="mr-1 h-5 w-5" />}
                {category.id === 'gids' && <Info className="mr-1 h-5 w-5" />}
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="relative">
            <Input
              type="search"
              placeholder="Zoek in blogs..."
              className="w-full rounded-xl border-gray-200 py-3 pl-12 pr-4 focus:border-gokkerz-green focus:ring-gokkerz-green/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            <span className="font-medium text-black">{filteredArticles.length}</span> blogs gevonden
          </p>
        </div>
        {/* Blog Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((article) => (
            <div key={article.id} className="relative">
              {isNewBlog(article.date) && (
                <div className="absolute -right-2 -top-2 z-10">
                  <span className="inline-flex animate-pulse items-center rounded-full bg-gokkerz-green px-2.5 py-0.5 text-xs font-medium text-white">
                    NIEUW
                  </span>
                </div>
              )}
              <BlogPostCard post={article} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Vorige
            </Button>
            <span className="text-sm text-gray-600">
              Pagina {currentPage} van {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              Volgende
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredArticles.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4">
              <Search className="mx-auto h-12 w-12 text-gray-300" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">Geen blogs gevonden</h3>
            <p className="text-gray-600">Probeer andere zoektermen of pas je filters aan</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
