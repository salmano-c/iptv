import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Tv, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define structure for country data with channels
interface Country {
  name: string;
  code: string;
  channels: number;
  flag: string;
}

// Enhanced Channel Showcase component with worldwide channels list
const ChannelShowcase = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Array of countries with their channels count and flag codes (similar to raverr.net)
  const countries: Country[] = [
    { name: "United States", code: "us", channels: 850, flag: "🇺🇸" },
    { name: "United Kingdom", code: "uk", channels: 620, flag: "🇬🇧" },
    { name: "Canada", code: "ca", channels: 380, flag: "🇨🇦" },
    { name: "France", code: "fr", channels: 410, flag: "🇫🇷" },
    { name: "Germany", code: "de", channels: 295, flag: "🇩🇪" },
    { name: "Spain", code: "es", channels: 265, flag: "🇪🇸" },
    { name: "Italy", code: "it", channels: 310, flag: "🇮🇹" },
    { name: "Portugal", code: "pt", channels: 180, flag: "🇵🇹" },
    { name: "Netherlands", code: "nl", channels: 165, flag: "🇳🇱" },
    { name: "Belgium", code: "be", channels: 140, flag: "🇧🇪" },
    { name: "Sweden", code: "se", channels: 125, flag: "🇸🇪" },
    { name: "Norway", code: "no", channels: 110, flag: "🇳🇴" },
    { name: "Denmark", code: "dk", channels: 105, flag: "🇩🇰" },
    { name: "Finland", code: "fi", channels: 95, flag: "🇫🇮" },
    { name: "Ireland", code: "ie", channels: 85, flag: "🇮🇪" },
    { name: "Switzerland", code: "ch", channels: 120, flag: "🇨🇭" },
    { name: "Austria", code: "at", channels: 110, flag: "🇦🇹" },
    { name: "Poland", code: "pl", channels: 190, flag: "🇵🇱" },
    { name: "Romania", code: "ro", channels: 150, flag: "🇷🇴" },
    { name: "Greece", code: "gr", channels: 130, flag: "🇬🇷" },
    { name: "Turkey", code: "tr", channels: 240, flag: "🇹🇷" },
    { name: "Russia", code: "ru", channels: 280, flag: "🇷🇺" },
    { name: "Ukraine", code: "ua", channels: 190, flag: "🇺🇦" },
    { name: "India", code: "in", channels: 320, flag: "🇮🇳" },
    { name: "Pakistan", code: "pk", channels: 170, flag: "🇵🇰" },
    { name: "Australia", code: "au", channels: 210, flag: "🇦🇺" },
    { name: "New Zealand", code: "nz", channels: 95, flag: "🇳🇿" },
    { name: "Japan", code: "jp", channels: 180, flag: "🇯🇵" },
    { name: "South Korea", code: "kr", channels: 145, flag: "🇰🇷" },
    { name: "China", code: "cn", channels: 220, flag: "🇨🇳" },
    { name: "Brazil", code: "br", channels: 270, flag: "🇧🇷" },
    { name: "Mexico", code: "mx", channels: 230, flag: "🇲🇽" },
    { name: "Argentina", code: "ar", channels: 180, flag: "🇦🇷" },
    { name: "Chile", code: "cl", channels: 140, flag: "🇨🇱" },
    { name: "Colombia", code: "co", channels: 150, flag: "🇨🇴" },
    { name: "Peru", code: "pe", channels: 120, flag: "🇵🇪" },
    { name: "South Africa", code: "za", channels: 160, flag: "🇿🇦" },
    { name: "Egypt", code: "eg", channels: 210, flag: "🇪🇬" },
    { name: "Morocco", code: "ma", channels: 180, flag: "🇲🇦" },
    { name: "Saudi Arabia", code: "sa", channels: 230, flag: "🇸🇦" },
    { name: "United Arab Emirates", code: "ae", channels: 190, flag: "🇦🇪" },
    { name: "Qatar", code: "qa", channels: 150, flag: "🇶🇦" },
    { name: "Lebanon", code: "lb", channels: 140, flag: "🇱🇧" },
    { name: "Tunisia", code: "tn", channels: 120, flag: "🇹🇳" },
    { name: "Algeria", code: "dz", channels: 135, flag: "🇩🇿" },
    { name: "Nigeria", code: "ng", channels: 110, flag: "🇳🇬" },
    { name: "Kenya", code: "ke", channels: 85, flag: "🇰🇪" },
    { name: "Singapore", code: "sg", channels: 95, flag: "🇸🇬" },
    { name: "Malaysia", code: "my", channels: 105, flag: "🇲🇾" },
    { name: "Indonesia", code: "id", channels: 125, flag: "🇮🇩" },
    { name: "Thailand", code: "th", channels: 115, flag: "🇹🇭" },
    { name: "Vietnam", code: "vn", channels: 90, flag: "🇻🇳" },
    { name: "Philippines", code: "ph", channels: 100, flag: "🇵🇭" }
  ];

  // Channel categories
  const categories = [
    { id: "all", label: t('all_channels'), icon: <Globe className="h-4 w-4" /> },
    { id: "entertainment", label: t('entertainment'), icon: <Tv className="h-4 w-4" /> },
    { id: "sports", label: t('sports'), icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="M6 12h12"></path><path d="M12 6v12"></path></svg> },
    { id: "movie", label: t('movies'), icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> },
    { id: "news", label: t('news'), icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg> },
    { id: "music", label: t('music'), icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> },
    { id: "documentary", label: t('documentary'), icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  ];

  // Total channels count
  const totalChannels = countries.reduce((sum, country) => sum + country.channels, 0);

  return (
    <section id="channels" className="py-16 lg:py-24 relative glass-morphism">
      {/* Section background with gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-box-darker to-box-darkest opacity-90"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-box-neon-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-box-neon-purple to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white heading-glow">
            {t('channels_from_worldwide')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            {t('worldwide_channels_desc')}
          </p>
          
          {/* Total Channels Counter */}
          <div className="flex items-center justify-center mt-6">
            <div className="bg-black/40 backdrop-blur-sm border border-box-neon-purple/30 rounded-lg px-6 py-3 inline-flex items-center">
              <Globe className="text-box-neon-blue mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">
                  {totalChannels.toLocaleString()}+
                </div>
                <div className="text-sm text-white/70">Total Channels Worldwide</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category filter buttons - all same size and in same line */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 uniform-button-container">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full min-w-[120px] transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-gradient-to-r from-box-neon-blue to-box-neon-purple text-white shadow-glow" 
                  : "bg-black/20 border border-white/10 text-white hover:border-box-neon-blue/50 hover:text-box-neon-blue"
              }`}
              aria-label={`Filter by ${category.label}`}
            >
              <span className="flex items-center gap-2">
                {category.icon}
                <span>{category.label}</span>
              </span>
            </Button>
          ))}
        </div>

        {/* Country Grid Layout - styled like raverr.net */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {countries.map((country) => (
            <div
              key={country.code}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 rounded-md text-white overflow-hidden transition-all duration-300"
            >
              <a href="#" className="flex items-center justify-between p-3 w-full group">
                <div className="flex items-center gap-3">
                  <Plus className="h-5 w-5 text-white/70 group-hover:text-purple-400" />
                  <span className="font-medium uppercase">{country.name}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-white/50 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Channel Action Button */}
        <div className="text-center mt-12">
          <Button
            size="lg" 
            className="neon-button text-lg font-semibold px-8 py-6 bg-gradient-to-r from-box-neon-purple to-box-neon-blue hover:from-box-neon-blue hover:to-box-neon-purple transition-all duration-300 rounded-full shadow-glow"
            aria-label="View all channels"
          >
            View All Channels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChannelShowcase;
