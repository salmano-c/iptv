import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ChannelShowcase from "@/components/ChannelShowcase";
import ChannelsAndMoviesSection from "@/components/ChannelsAndMoviesSection";
import PricingSection from "@/components/PricingSection";
import ResellerSection from "@/components/ResellerSection";
import InstallGuide from "@/components/InstallGuide";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticleBackground from "@/components/ParticleBackground";
import FeedbackSection from "@/components/FeedbackSection";
import FAQSection from "@/components/FAQSection";
import LanguageNotice from "@/components/LanguageNotice";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import "@/styles/loadingStyles.css";
import { useLanguage } from "@/contexts/LanguageContext";

type MoviePoster = {
  id: number;
  title: string;
  genre: string;
  year: number | null;
  rating: number;
  image: string;
};

interface ChannelsAndMoviesSectionProps {
  movieData: MoviePoster[];
}

const Index = () => {
  const { t } = useLanguage();
  
  // Add scroll animation observer
  useEffect(() => {
    // Show loading overlay for a brief period for the enhanced loading effect
    const loadingTimeout = setTimeout(() => {
      const loadingOverlay = document.querySelector('.loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
          loadingOverlay.remove();
          document.body.classList.remove('overflow-hidden');
        }, 500);
      }
    }, 2000);
    
    // Add body class to prevent scrolling during loading
    document.body.classList.add('overflow-hidden');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Slightly before the element enters the viewport
    });

    const fadeElements = document.querySelectorAll(".fade-in-up, .reveal-animation");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Initialize enhanced cursor effect
    const cursorInit = () => {
      const cursor = document.createElement('div');
      cursor.className = "neon-cursor";
      document.body.appendChild(cursor);
      
      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };
      
      const activateCursor = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        cursor.classList.add("hovering");
        
        // Special styling based on element type
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          cursor.classList.add("hovering-button");
        } else if (target.tagName === 'A' || target.closest('a')) {
          cursor.classList.add("hovering-link");
        }
      };
      
      const deactivateCursor = () => {
        cursor.classList.remove("hovering", "hovering-button", "hovering-link");
      };
      
      document.addEventListener('mousemove', moveCursor);
      
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', activateCursor);
        el.addEventListener('mouseleave', deactivateCursor);
      });
      
      // Create futuristic trail effect
      document.addEventListener('mousemove', (e) => {
        // Throttle to avoid performance issues
        if (Math.random() > 0.8) {
          const trail = document.createElement('div');
          trail.className = 'cursor-trail';
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
          document.body.appendChild(trail);
          
          // Remove trail after animation completes
          setTimeout(() => {
            if (document.body.contains(trail)) {
              document.body.removeChild(trail);
            }
          }, 600);
        }
      });
    };
    
    // Call cursor init with a slight delay to ensure DOM is ready
    setTimeout(cursorInit, 100);

    return () => {
      clearTimeout(loadingTimeout);
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Define movie posters to be added to the MovieShowcase component
  const moviePosters = [
    {
      id: 101,
      title: "Ana de Armas",
      genre: "Dolby Wallpaper",
      year: 2025,
      rating: 8.5,
      image: "/lovable-uploads/Ana de Armas Dolby Wallpaper.png"
    },
    {
      id: 102,
      title: "Battlefield 2025",
      genre: "Action / FPS",
      year: 2025,
      rating: 8.5,
      image: "/lovable-uploads/battlefield-2025-60559081d9d87.png"
    },
    {
      id: 103,
      title: "Captain America",
      genre: "Superhero / Action",
      year: 2025,
      rating: 9.2,
      image: "/lovable-uploads/Captain America.png"
    },
    {
      id: 104,
      title: "Deadpool",
      genre: "Action / Comedy",
      year: 2016,
      rating: 8.7,
      image: "/lovable-uploads/deadpool-55e2407d3e26e.png"
    },
    {
      id: 105,
      title: "Despicable Me 4",
      genre: "Animation / Comedy",
      year: 2024,
      rating: 7.5,
      image: "/lovable-uploads/despicable-me-4-669696b777a6a.png"
    },
    {
      id: 106,
      title: "Final Fantasy",
      genre: "Fantasy / RPG",
      year: 2025,
      rating: 8.9,
      image: "/lovable-uploads/Final Fantasy.png"
    },
    {
      id: 107,
      title: "Final Destination: Bloodlines",
      genre: "Horror / Thriller",
      year: 2025,
      rating: 6.8,
      image: "/lovable-uploads/Final Destination- Bloodlines Dolby Wallpaper.png"
    },
    {
      id: 108,
      title: "Inside Out 2",
      genre: "Animation / Family",
      year: 2024,
      rating: 8.1,
      image: "/lovable-uploads/inside-out-2-66cd0ba61e4b8.png"
    },
    {
      id: 109,
      title: "Jurassic World",
      genre: "Adventure / Sci-Fi",
      year: 2015,
      rating: 7.9,
      image: "/lovable-uploads/jurassic-world-558fdb9b06ce7.png"
    },
    {
      id: 110,
      title: "Kung Fu Panda 4",
      genre: "Animation / Action",
      year: 2024,
      rating: 7.6,
      image: "/lovable-uploads/kung-fu-panda-4-662cc08d23d37.png"
    },
    {
      id: 111,
      title: "Lilo & Stitch: The Series",
      genre: "Animation / Comedy",
      year: 2003,
      rating: 8.4,
      image: "/lovable-uploads/lilo--stitch-the-series-64ab071b5b225.png"
    },
    {
      id: 112,
      title: "Marvel Thunderbolts",
      genre: "Superhero / Action",
      year: 2025,
      rating: 8.0,
      image: "/lovable-uploads/Marvel Thunderbolts Wallpaper.png"
    },
    {
      id: 113,
      title: "Mickey 17",
      genre: "Sci-Fi / Thriller",
      year: 2025,
      rating: 7.8,
      image: "/lovable-uploads/mickey-17-67edd6a606da0.png"
    },
    {
      id: 114,
      title: "Mission Impossible",
      genre: "Action / Spy",
      year: 1996,
      rating: 8.3,
      image: "/lovable-uploads/mission-impossible-617528d4020e9.png"
    },
    {
      id: 115,
      title: "Moana 2",
      genre: "Animation / Adventure",
      year: 2024,
      rating: 7.8,
      image: "/lovable-uploads/moana-2-66ba17e9c4254.png"
    },
    {
      id: 116,
      title: "Novocaine",
      genre: "Thriller / Crime",
      year: 2001,
      rating: 6.5,
      image: "/lovable-uploads/novocaine-68060e30288b0.png"
    },
    {
      id: 117,
      title: "Spider-Man",
      genre: "Superhero / Action",
      year: null,
      rating: 9.4,
      image: "/lovable-uploads/Spider-Man Digital Art Wallpaper.png"
    },
    {
      id: 118,
      title: "Star Wars Episode",
      genre: "Sci-Fi / Adventure",
      year: 2025,
      rating: 9.0,
      image: "/lovable-uploads/star-wars-episode-3840x2160-22267.png"
    },
    {
      id: 119,
      title: "The Fantastic Four",
      genre: "Superhero / Sci-Fi",
      year: 2025,
      rating: 7.5,
      image: "/lovable-uploads/the-fantastic-four-65d43b68f046e.png"
    },
    {
      id: 120,
      title: "Thunderbolts",
      genre: "Superhero / Action",
      year: 2025,
      rating: 6.5,
      image: "/lovable-uploads/thunderbolts-681ccc38da664.png"
    }
  ];

  return (
    <div className="min-h-screen bg-box-darkest overflow-x-hidden">
      {/* Enhanced Loading Overlay */}
      <div className="loading-overlay bg-black/90 fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center transition-opacity duration-500">
        <div className="relative">
          <div className="text-5xl font-black mb-8 flex items-center justify-center">
            <span className="text-gradient-primary bg-gradient-to-r from-box-neon-blue via-box-neon-purple to-box-neon-pink bg-clip-text text-transparent">
              box IPTV
            </span>
          </div>
          
          <div className="relative flex flex-col items-center">
            {/* Spinner with rings */}
            <div className="loading-spinner mb-6">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-core"></div>
            </div>
            
            {/* Loading text */}
            <div className="loading-text text-lg font-bold mb-3">
              {t('loading')}
            </div>
            
            {/* Progress bar */}
            <div className="cyber-progress-container w-60 mb-4">
              <div className="cyber-progress-bar"></div>
            </div>
            
            {/* Loading dots */}
            <div className="loading-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Background */}
      <div className="animated-bg"></div>
      <div className="animated-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      <ParticleBackground />
      
      {/* Enhanced Cyberpunk Light Beams */}
      <div className="light-beam light-beam-1"></div>
      <div className="light-beam light-beam-2"></div>
      <div className="light-beam light-beam-3"></div>
      
      {/* Neural Network Grid Effect */}
      <div className="neural-grid"></div>

      {/* Navigation */}
      <div id="home"></div>
      <NavBar />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-box-dark"></path>
          </svg>
        </div>
        
        {/* SEO Content Section */}
        <section className="py-12 px-4 bg-box-dark">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Welcome to Box IPTV - Your Gateway to Premium Entertainment</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 mb-6">
                Looking to <a href="#pricing" className="text-box-neon-blue hover:text-box-neon-purple">buy IPTV</a>? 
                Box IPTV offers the best <a href="#pricing" className="text-box-neon-blue hover:text-box-neon-purple">IPTV subscription</a> 
                for global audiences. Experience the ultimate in entertainment with our premium HD channels and a vast library of movies. 
                As a leading <a href="#reseller" className="text-box-neon-blue hover:text-box-neon-purple">IPTV reseller</a>, 
                we provide reliable service, fast support, and unbeatable value.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Box IPTV?</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-box-neon-blue">✓</span> 
                  <span><b>HD Channels:</b> Enjoy crystal-clear HD quality on all your favorite channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-box-neon-blue">✓</span> 
                  <span><b>Extensive Movie Library:</b> Access thousands of movies on demand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-box-neon-blue">✓</span> 
                  <span><b>Fast Support:</b> Our dedicated support team is here to assist you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-box-neon-blue">✓</span> 
                  <span><b>Compatible Devices:</b> Works seamlessly on IPTV for Android, IPTV for Firestick, and more.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-box-neon-blue">✓</span> 
                  <span><b>Best IPTV 2025:</b> Stay ahead with the best IPTV service in 2025.</span>
                </li>
              </ul>
              
              <p className="text-lg text-white/80 mt-6">
                Ready to get started? <a href="#pricing" className="text-box-neon-pink font-bold hover:text-box-neon-purple">
                Buy IPTV</a> now and experience the difference! Contact us for more information.
              </p>
            </div>
          </div>
        </section>
        
        <div className="section-divider"></div>
        
        <ChannelShowcase />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-box-dark"></path>
          </svg>
        </div>
        
        {/* NEW Combined Channels and Movies Section with consistent movie sizes and auto-scrolling */}
        <ChannelsAndMoviesSection movieData={moviePosters} />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-box-darker"></path>
          </svg>
        </div>
        
        <PricingSection />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-box-darker"></path>
          </svg>
        </div>
        
        <ResellerSection />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-box-dark"></path>
          </svg>
        </div>
        
        <InstallGuide />
        
        <div className="section-divider"></div>
                
        {/* Enhanced FAQ Section */}
        <FAQSection />
        
        <div className="section-divider"></div>
        
        <FeedbackSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button - Positioned on the right side with enhanced style */}
      <WhatsAppButton 
        phoneNumber="212643264633"
        text="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 animate-float"
      />
      
      {/* Language Notice */}
      <LanguageNotice />
    </div>
  );
};

export default Index;