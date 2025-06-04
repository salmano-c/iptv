
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TypedText from "./ui/TypedText";
import GlassCard from "./ui/GlassCard";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/40">
      {/* Scroll to top button - now on right side */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30 p-3 bg-Box-neon-purple rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 animate-pulse-glow"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={24} />
        </button>
      )}
      
      {/* Grid lines background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-line" style={{top: '10%', opacity: '0.1'}}></div>
        <div className="grid-line" style={{top: '30%', opacity: '0.1'}}></div>
        <div className="grid-line" style={{top: '50%', opacity: '0.1'}}></div>
        <div className="grid-line" style={{top: '70%', opacity: '0.1'}}></div>
        <div className="grid-line" style={{top: '90%', opacity: '0.1'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Futuristic Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="inline-block mb-4 relative overflow-hidden group">
            <span className="text-5xl font-bold text-gradient relative z-10 transition-all duration-500">
              BoxIPTV
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-Box-neon-blue via-Box-neon-purple to-Box-neon-pink transform transition-all duration-500 group-hover:h-full opacity-20 group-hover:opacity-10"></span>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-Box-neon-blue/10 via-Box-neon-purple/10 to-Box-neon-pink/10 transition-all duration-700"></div>
            </div>
          </Link>
          
          <p className="text-lg text-white/60 text-center max-w-2xl">
            <TypedText 
              text="Premium IPTV streaming service with thousands of live channels and VOD content from around the world."
              typingSpeed={30}
              showCursor={false}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <GlassCard className="p-6" glowOnHover neonColor="blue">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Home</span>
              </a></li>
              <li><a href="#channels" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Channels</span>
              </a></li>
              <li><a href="#movies" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Movies</span>
              </a></li>
              <li><a href="#pricing" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Pricing</span>
              </a></li>
              <li><a href="#trial" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Free Trial</span>
              </a></li>
              <li><a href="#install" className="hover:text-Box-neon-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-blue rounded-full"></span>
                <span>Installation</span>
              </a></li>
            </ul>
          </GlassCard>
          
          {/* Legal */}
          <GlassCard className="p-6" glowOnHover neonColor="purple">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-Box-neon-purple transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-purple rounded-full"></span>
                <span>Terms of Service</span>
              </a></li>
              <li><a href="#" className="hover:text-Box-neon-purple transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-purple rounded-full"></span>
                <span>Privacy Policy</span>
              </a></li>
              <li><a href="#" className="hover:text-Box-neon-purple transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-purple rounded-full"></span>
                <span>Refund Policy</span>
              </a></li>
              <li><a href="#" className="hover:text-Box-neon-purple transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-Box-neon-purple rounded-full"></span>
                <span>FAQ</span>
              </a></li>
            </ul>
          </GlassCard>
          
          {/* Contact */}
          <GlassCard className="p-6" glowOnHover neonColor="pink">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a 
                  href="https://wa.me/212643264633" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-Box-neon-pink transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp Support</span>
                </a>
              </li>
              <li className="hover:text-Box-neon-pink transition-colors flex items-center gap-2">
                <MailIcon className="w-4 h-4" />
                <span>support@Boxiptv.com</span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white/60 hover:text-Box-neon-blue transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-Box-neon-blue transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-Box-neon-blue transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-Box-neon-blue transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </GlassCard>
          
          {/* Newsletter */}
          <GlassCard className="p-6" glowOnHover neonColor="green">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-white/60 mb-4 text-sm">Subscribe to our newsletter for the latest updates and special offers.</p>
            
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-Box-neon-green/50"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-Box-neon-green/80 to-Box-neon-blue/80 text-white py-2 px-4 rounded-md hover:from-Box-neon-green hover:to-Box-neon-blue transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </GlassCard>
        </div>
        
        {/* Copyright with futuristic divider */}
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-Box-neon-purple/50 to-transparent">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6">
              <div className="absolute inset-0 bg-Box-neon-purple rounded-full animate-ping opacity-40"></div>
              <div className="absolute inset-1 bg-black rounded-full"></div>
              <div className="absolute inset-2 bg-Box-neon-purple/30 rounded-full"></div>
            </div>
          </div>
          
          <div className="pt-8 text-center text-white/40 text-sm">
            <p>© {currentYear} BoxIPTV. All rights reserved.</p>
            <p className="mt-2 text-xs">Made with <span className="text-Box-neon-pink">♥</span> for IPTV enthusiasts worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Adding these as local components to avoid errors
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default Footer;
