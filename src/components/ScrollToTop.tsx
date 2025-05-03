import React, { useEffect, useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "p-2 rounded-full bg-white/90 backdrop-blur-sm",
        "border border-gray-200 shadow-lg",
        "transition-all duration-300 ease-spring",
        "hover:bg-gokkerz-green/10 hover:border-gokkerz-green/50",
        "focus:outline-none focus:ring-2 focus:ring-gokkerz-green focus:ring-offset-2",
        "active:scale-95",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUpCircle className={cn(
        "h-6 w-6 text-gray-600",
        "transition-colors duration-200",
        "group-hover:text-gokkerz-green"
      )} />
    </button>
  );
};

export default ScrollToTop;