import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import TypedText from "@/components/ui/TypedText";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageCode } from "@/lib/translations";

// Define nav link structure with the new order: Home, Channels&Movies, Pricing, Reseller, Installation, FAQ
interface NavLink {
  translationKey: 'home' | 'channels' | 'pricing' | 'reseller' | 'installation' | 'faq';
  url: string;
}

const NavLinks: NavLink[] = [
  { translationKey: "home", url: "/" },
  { translationKey: "channels", url: "#channels" },
  { translationKey: "pricing", url: "#pricing" },
  { translationKey: "reseller", url: "#reseller" },
  { translationKey: "installation", url: "#install" },
  { translationKey: "faq", url: "#faq" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
  { code: "es", name: "Español" },
];

export function NavBar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detect which section is in view
      const sections = document.querySelectorAll("section[id], div[id='home']");
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");
        
        if (sectionTop < window.innerHeight / 2 && sectionTop > -window.innerHeight / 2) {
          const navLink = NavLinks.find(link => link.url === `#${sectionId}` || (link.url === "/" && sectionId === "home"));
          if (navLink) {
            setActiveSection(navLink.translationKey);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add neon cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('neon-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHovering = () => cursor.classList.add('hovering');
    const removeHovering = () => cursor.classList.remove('hovering');

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHovering);
      el.addEventListener('mouseleave', removeHovering);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHovering);
        el.removeEventListener('mouseleave', removeHovering);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  // Get language name from code
  const getLanguageName = (code: string) => {
    return languages.find(lang => lang.code === code)?.name || 'English';
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageChange = (langCode: string) => {
    if (['en', 'fr', 'ar', 'es'].includes(langCode)) {
      setLanguage(langCode as LanguageCode);
      setLanguageMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/10" : "bg-transparent"
      )}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl logo-text text-gradient">
              <TypedText
                text="boxIPTV"
                typingSpeed={70}
                showCursor={false}
                loop={false}
              />
            </span>
          </Link>

          {/* Desktop Navigation - Properly centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {NavLinks.map((link) => (
              <a
                key={link.translationKey}
                href={link.url}
                title={t(link.translationKey)}
                className={cn(
                  "text-white/80 hover:text-white transition-colors duration-200 font-medium relative",
                  activeSection === link.translationKey && "text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-box-neon-purple"
                )}
              >
                {t(link.translationKey)}
              </a>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <button 
                onClick={toggleLanguageMenu} 
                className="language-selector group"
              >
                <Globe className="w-4 h-4 text-box-neon-purple" />
                <span>{getLanguageName(language)}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="language-dropdown">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`language-option ${language === lang.code ? 'bg-white/10' : ''}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#trial" className="btn-primary">
              {t("free_trial")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-card rounded-xl animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-6 py-2">
              {NavLinks.map((link) => (
                <a
                  key={link.translationKey}
                  href={link.url}
                  title={t(link.translationKey)}
                  className={cn(
                    "text-white/80 hover:text-white py-2 transition-colors duration-200 font-medium text-center",
                    activeSection === link.translationKey && "text-white border-l-2 border-box-neon-purple pl-2"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <TypedText text={t(link.translationKey)} typingSpeed={50} delay={100 * NavLinks.indexOf(link)} showCursor={false} />
                </a>
              ))}
              
              {/* Language selector in mobile menu */}
              <div className="py-2">
                <div className="flex justify-center gap-3">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`px-3 py-1 rounded ${
                        language === lang.code 
                          ? 'bg-box-neon-purple/20 text-white' 
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <a href="#trial" className="btn-primary text-center mt-2">
                {t("free_trial")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
