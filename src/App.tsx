
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import Casinos from './pages/Casinos';
import CasinoReview from './pages/CasinoReview';
import Bonussen from './pages/Bonussen';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import VerantwoordGokken from './pages/VerantwoordGokken';
import OverOns from './pages/OverOns';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Privacybeleid from './pages/privacybeleid';
import Cookiebeleid from './pages/cookiebeleid';
import AlgemeneVoorwaarden from './pages/algemenevoorwaarden';
import Games from './pages/Games';
import GokGptPage from './pages/gokgpt';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casinos" element={<Casinos />} />
          <Route path="/casinos/:name" element={<CasinoReview />} />
          <Route path="/bonussen" element={<Bonussen />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verantwoord-gokken" element={<VerantwoordGokken />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/privacybeleid" element={<Privacybeleid />} />
          <Route path="/cookiebeleid" element={<Cookiebeleid />} />
          <Route path="/algemenevoorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gokgpt" element={<GokGptPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
