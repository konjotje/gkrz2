import React from 'react';
import Layout from '@/components/layout/Layout';
import GokGptChat from '@/components/GokGptChat';
// Make sure the file exists at src/components/GokGptChat.tsx or adjust the path if needed
// import GokGptChat from '@/components/GokGptChat';

const GokGptPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gokkerz-green/10 to-white py-12">
        <div className="w-full max-w-2xl">
          <GokGptChat />
        </div>
      </div>
    </Layout>
  );
};

export default GokGptPage;
