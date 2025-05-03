import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LegalPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, description, children }) => (
  <main className="max-w-3xl mx-auto px-4 py-12">
    <Helmet>
      <title>{title} | Gokkerz.nl</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://gokkerz.nl/${title.toLowerCase().replace(/ /g, '-')}`} />
    </Helmet>
    <h1 className="text-3xl font-bold mb-6 text-gokkerz-green">{title}</h1>
    <div className="prose prose-green max-w-none text-gray-800">
      {children}
    </div>
  </main>
);

export default LegalPage;
