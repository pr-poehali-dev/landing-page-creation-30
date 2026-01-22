import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';
import TelegramChatButton from '@/components/TelegramChatButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    
    if (id === 'booking') {
      setTimeout(() => {
        element?.classList.add('highlight-on-scroll');
        setTimeout(() => {
          element?.classList.remove('highlight-on-scroll');
        }, 2000);
      }, 500);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <MainSections scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
      <TelegramChatButton />
    </div>
  );
};

export default Index;