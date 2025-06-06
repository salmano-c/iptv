import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import TypedText from "@/components/ui/TypedText";
import { Globe, Tv, Star, Shield } from "lucide-react";

// Enhanced Hero component with logo similar to raverr.net
const Hero = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events for the animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section
      className="min-h-[85vh] relative flex items-center justify-center overflow-hidden py-20 lg:py-32"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 174, 219, 0.1) 1px, transparent 1px)', 
          backgroundSize: '25px 25px'
        }}></div>
      </div>
      
      {/* Main content container */}
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`text-center lg:text-left fade-in-up ${isScrolled ? 'visible' : ''}`}
          >
            <div className="mb-6 inline-block">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                {/* Logo inspired by raverr.net */}
                <div className="relative h-20 w-auto">
                  <div className="absolute inset-0 blur-lg bg-gradient-to-r from-box-neon-blue via-box-neon-purple to-box-neon-pink rounded-full opacity-60"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <span className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-box-neon-blue via-white to-box-neon-pink drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                      BOX
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-white ml-2 bg-gradient-to-r from-box-neon-blue to-box-neon-pink px-2 py-1 rounded">
                      IPTV
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
                aria-label={t('welcome_message')}
              >
                <span className="block text-white mb-2">{t('welcome_message')}</span>
                <span className="block bg-gradient-to-r from-box-neon-blue via-white to-box-neon-pink text-transparent bg-clip-text">
                  {t('power_of_entertainment')}
                </span>
              </h1>
              
              <h2 className="text-xl text-gray-300 mb-6">
                <TypedText 
                  text={t('best_experience')} 
                  delay={100} 
                  className="font-light"
                  aria-label={t('best_experience')}
                />
              </h2>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="neon-button text-lg font-semibold px-8 py-6 bg-gradient-to-r from-box-neon-purple to-box-neon-blue hover:from-box-neon-blue hover:to-box-neon-purple transition-all duration-300 rounded-full shadow-glow"
                  aria-label="Start free trial"
                  asChild
                >
                  <a
                    href="https://wa.me/212643264633"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('free_trial')}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg font-semibold px-8 py-6 border-2 border-box-neon-blue hover:bg-box-neon-blue/20 text-white rounded-full transition-all duration-300"
                  aria-label="View pricing plans"
                >
                  {t('pricing')}
                </Button>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <Globe className="h-6 w-6 text-box-neon-blue" />
                <span className="text-sm md:text-base text-white">10,000+ Channels</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <Tv className="h-6 w-6 text-box-neon-pink" />
                <span className="text-sm md:text-base text-white">Premium HD Quality</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <Star className="h-6 w-6 text-box-neon-blue" />
                <span className="text-sm md:text-base text-white">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-box-neon-pink" />
                <span className="text-sm md:text-base text-white">Secure Streaming</span>
              </div>
            </div>
          </div>

          {/* Hero image - stylized TV/device with streaming content */}
          <div className={`relative ${isScrolled ? 'visible' : ''} fade-in-up hidden lg:block`}>
            <div className="absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-r from-box-neon-blue via-box-neon-purple to-box-neon-pink opacity-30"></div>
            <div className="relative aspect-video bg-gradient-to-br from-[#0f0f18] to-[#1a1a2e] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <div className="absolute inset-0 opacity-50" style={{ 
                backgroundImage: "url('/lovable-uploads/c75bc413-6c2a-4658-a485-91c15e68761e.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'brightness(0.6)'
              }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* TV Screen Content - World map with streaming points */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <img 
                    src="/lovable-uploads/a9cdd86c-15c7-4ca3-abc3-472c3899a1d5.png" 
                    alt="World map with streaming illustration" 
                    className="w-full h-full object-contain opacity-80"
                  />
                  
                  {/* Animated streaming points */}
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-box-neon-blue animate-pulse-glow"></div>
                  <div className="absolute top-1/3 left-2/3 w-2 h-2 rounded-full bg-box-neon-pink animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-2/3 left-1/2 w-2 h-2 rounded-full bg-box-neon-blue animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-box-neon-pink animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
              
              {/* Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
              
              {/* Content labels */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-xs text-box-neon-blue">4K</span>
                  <span className="text-xs text-white ml-1">Ultra HD</span>
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-xs text-box-neon-pink">LIVE</span>
                </div>
              </div>
            </div>
            
            {/* Decorative remote or controller */}
            <div className="absolute -right-10 bottom-10 w-20 h-40 bg-gradient-to-br from-[#0f0f18] to-[#1a1a2e] rounded-xl border border-white/10 transform rotate-12 shadow-lg">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-box-neon-blue"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white/20"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-2">
                <div className="w-3 h-3 rounded-sm bg-box-neon-pink"></div>
                <div className="w-3 h-3 rounded-sm bg-box-neon-blue"></div>
                <div className="w-3 h-3 rounded-sm bg-white/60"></div>
                <div className="w-3 h-3 rounded-sm bg-white/60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-white/60 mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-box-neon-blue">
            <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-box-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-box-neon-pink/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
