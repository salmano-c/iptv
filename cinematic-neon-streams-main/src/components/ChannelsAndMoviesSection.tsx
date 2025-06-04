import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AutoScrollingCarousel from "./AutoScrollingCarousel";
import MovieCarousel from "./MovieCarousel";
import { toast } from "sonner";

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface ChannelsAndMoviesSectionProps {
  movieData: Movie[];
}

interface MovieCarouselProps {
  movies: Movie[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
  pauseOnHover?: boolean;
}

const ChannelsAndMoviesSection: React.FC<ChannelsAndMoviesSectionProps> = ({ movieData }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "live" | "movies" | "featured">("all");
  
  // Channels list with logos for auto-scrolling
  const channels = [
    { name: "13max HD", logo: "/lovable-uploads/channels/13max-hd-ar.png", category: "Entertainment" },
    { name: "360 TuneBox", logo: "/lovable-uploads/channels/360-tunebox-int.png", category: "Music" },
    { name: "A&E", logo: "/lovable-uploads/channels/a-and-e-ar.png", category: "Entertainment" },
    { name: "A24", logo: "/lovable-uploads/channels/a24-ar.png", category: "Movies" },
    { name: "ABC", logo: "/lovable-uploads/channels/abc-al.png", category: "Entertainment" },
    { name: "Allegro HD", logo: "/lovable-uploads/channels/allegro-hd-ar.png", category: "Music" },
    { name: "AMC", logo: "/lovable-uploads/channels/amc-ar.png", category: "Movies" },
    { name: "America", logo: "/lovable-uploads/channels/america-ar.png", category: "Entertainment" },
    { name: "America Sports", logo: "/lovable-uploads/channels/america-sports-ar.png", category: "Sports" },
    { name: "Animal Planet", logo: "/lovable-uploads/channels/animal-planet-ar.png", category: "Documentary" },
    { name: "Animal Planet Int", logo: "/lovable-uploads/channels/animal-planet-int.png", category: "Documentary" },
    { name: "Argentinisima Satelital", logo: "/lovable-uploads/channels/argentinisima-satelital-ar.png", category: "Entertainment" },
    { name: "Arirang", logo: "/lovable-uploads/channels/arirang-int.png", category: "International" },
    { name: "Atreseries", logo: "/lovable-uploads/channels/atreseries-ar.png", category: "Series" },
    { name: "AXN", logo: "/lovable-uploads/channels/axn-ar.png", category: "Entertainment" },
    { name: "Baby TV", logo: "/lovable-uploads/channels/baby-tv-ar.png", category: "Kids" },
    { name: "BBC Arabic", logo: "/lovable-uploads/channels/bbc-arabic-int.png", category: "News" },
    { name: "BBC News Arabic", logo: "/lovable-uploads/channels/bbc-news-arabic-int.png", category: "News" },
    { name: "BBC Persian", logo: "/lovable-uploads/channels/bbc-persian-int.png", category: "News" },
    { name: "BBC World News", logo: "/lovable-uploads/channels/bbc-world-news-int.png", category: "News" },
    { name: "beIN Sports", logo: "/lovable-uploads/channels/bein-sports-int.png", category: "Sports" },
    { name: "beIN Sports 4K", logo: "/lovable-uploads/channels/bein-sports-4k-int.png", category: "Sports" },
    { name: "Boomerang", logo: "/lovable-uploads/channels/boomerang-ar.png", category: "Kids" },
    { name: "C5N", logo: "/lovable-uploads/channels/c5n-ar.png", category: "News" },
    { name: "Canal 10", logo: "/lovable-uploads/channels/canal-10-ar.png", category: "Entertainment" },
    { name: "Canal 13", logo: "/lovable-uploads/channels/canal-13-ar.png", category: "Entertainment" },
    { name: "Canal 26", logo: "/lovable-uploads/channels/canal-26-ar.png", category: "News" },
    { name: "Cartoon Network", logo: "/lovable-uploads/channels/cartoon-network-ar.png", category: "Kids" },
    { name: "CGTN", logo: "/lovable-uploads/channels/cgtn-int.png", category: "News" },
    { name: "Cinecanal", logo: "/lovable-uploads/channels/cine-canal-ar.png", category: "Movies" },
    { name: "Cinemax", logo: "/lovable-uploads/channels/cinemax-ar.png", category: "Movies" },
    { name: "CNN International", logo: "/lovable-uploads/channels/cnn-international-int.png", category: "News" },
    { name: "Comedy Central", logo: "/lovable-uploads/channels/comedy-central-ar.png", category: "Entertainment" },
    { name: "Crónica HD", logo: "/lovable-uploads/channels/cronica-hd-ar.png", category: "News" },
    { name: "DAZN", logo: "/lovable-uploads/channels/dazn-int.png", category: "Sports" },
    { name: "Discovery Channel", logo: "/lovable-uploads/channels/discovery-channel-ar.png", category: "Documentary" },
    { name: "Discovery Kids", logo: "/lovable-uploads/channels/discovery-kids-ar.png", category: "Kids" },
    { name: "Disney Channel", logo: "/lovable-uploads/channels/disney-channel-ar.png", category: "Kids" },
    { name: "Disney Junior", logo: "/lovable-uploads/channels/disney-jr-ar.png", category: "Kids" },
    { name: "Disney XD", logo: "/lovable-uploads/channels/disney-xd-ar.png", category: "Kids" },
    { name: "El Trece", logo: "/lovable-uploads/channels/eltrece-ar.png", category: "Entertainment" },
    { name: "ESPN", logo: "/lovable-uploads/channels/espn-ar.png", category: "Sports" },
    { name: "ESPN 2", logo: "/lovable-uploads/channels/espn-2-ar.png", category: "Sports" },
    { name: "ESPN 3", logo: "/lovable-uploads/channels/espn-3-ar.png", category: "Sports" },
    { name: "Eurochannel", logo: "/lovable-uploads/channels/euro-channel-int.png", category: "International" },
    { name: "Euronews", logo: "/lovable-uploads/channels/euro-news-int.png", category: "News" },
    { name: "EWTN", logo: "/lovable-uploads/channels/ewtn-int.png", category: "Religious" },
    { name: "Fashion TV", logo: "/lovable-uploads/channels/fashion-tv-int.png", category: "Lifestyle" },
    { name: "FilmBox", logo: "/lovable-uploads/channels/filmbox-int.png", category: "Movies" },
    { name: "Food Network", logo: "/lovable-uploads/channels/food-network-ar.png", category: "Lifestyle" },
    { name: "Fox Sports", logo: "/lovable-uploads/channels/fox-sports-ar.png", category: "Sports" },
    { name: "France 24", logo: "/lovable-uploads/channels/france-24-int.png", category: "News" },
    { name: "FX", logo: "/lovable-uploads/channels/fx-ar.png", category: "Entertainment" },
    { name: "FXM", logo: "/lovable-uploads/channels/fxm-ar.png", category: "Movies" },
    { name: "HBO", logo: "/lovable-uploads/channels/hbo-ar.png", category: "Movies" },
    { name: "HBO 2", logo: "/lovable-uploads/channels/hbo-2-ar.png", category: "Movies" },
    { name: "HBO Family", logo: "/lovable-uploads/channels/hbo-family-ar.png", category: "Family" },
    { name: "HBO Plus", logo: "/lovable-uploads/channels/hbo-plus-ar.png", category: "Movies" },
    { name: "HBO Pop", logo: "/lovable-uploads/channels/hbo-pop-ar.png", category: "Entertainment" },
    { name: "HBO Xtreme", logo: "/lovable-uploads/channels/hbo-xtreme-ar.png", category: "Action" },
    { name: "History Channel", logo: "/lovable-uploads/channels/history-channel-ar.png", category: "Documentary" },
    { name: "Investigation Discovery", logo: "/lovable-uploads/channels/id-investigation-discovery-ar.png", category: "Documentary" },
    { name: "KBS World", logo: "/lovable-uploads/channels/kbs-world-int.png", category: "International" },
    { name: "Lifetime", logo: "/lovable-uploads/channels/lifetime-ar.png", category: "Entertainment" },
    { name: "MTV", logo: "/lovable-uploads/channels/mtv-ar.png", category: "Music" },
    { name: "MTV 00s", logo: "/lovable-uploads/channels/mtv-00s-ar.png", category: "Music" },
    { name: "National Geographic", logo: "/lovable-uploads/channels/national-geographic-ar.png", category: "Documentary" },
    { name: "Nat Geo Kids", logo: "/lovable-uploads/channels/nat-geo-kids-ar.png", category: "Kids" },
    { name: "Nat Geo Wild", logo: "/lovable-uploads/channels/national-geographic-wild-ar.png", category: "Documentary" },
    { name: "NBA TV", logo: "/lovable-uploads/channels/nba-tv-ar.png", category: "Sports" },
    { name: "Netflix", logo: "/lovable-uploads/channels/netflix-int.png", category: "Movies" },
    { name: "Nickelodeon", logo: "/lovable-uploads/channels/nickelodeon-ar.png", category: "Kids" },
    { name: "Nick Jr", logo: "/lovable-uploads/channels/nick-jr-ar.png", category: "Kids" },
    { name: "Nick Music", logo: "/lovable-uploads/channels/nick-music-ar.png", category: "Music" },
    { name: "Paramount Channel", logo: "/lovable-uploads/channels/paramount-channel-int.png", category: "Movies" },
    { name: "Paramount Network", logo: "/lovable-uploads/channels/paramount-network-ar.png", category: "Entertainment" },
    { name: "Pasiones", logo: "/lovable-uploads/channels/pasiones-ar.png", category: "Entertainment" },
    { name: "Red Bull TV", logo: "/lovable-uploads/channels/red-bull-tv-int.png", category: "Sports" },
    { name: "RT Documentary", logo: "/lovable-uploads/channels/rt-documentary-int.png", category: "Documentary" },
    { name: "Sony Channel", logo: "/lovable-uploads/channels/sony-channel-ar.png", category: "Entertainment" },
    { name: "Space", logo: "/lovable-uploads/channels/space-ar.png", category: "Sci-Fi" },
    { name: "Star Channel", logo: "/lovable-uploads/channels/star-channel-ar.png", category: "Movies" },
    { name: "Star Cinema", logo: "/lovable-uploads/channels/star-cinema-ar.png", category: "Movies" },
    { name: "Star Classics", logo: "/lovable-uploads/channels/star-classics-ar.png", category: "Movies" },
    { name: "Star Comedy", logo: "/lovable-uploads/channels/star-comedy-ar.png", category: "Comedy" },
    { name: "Star Life", logo: "/lovable-uploads/channels/star-life-ar.png", category: "Entertainment" },
    { name: "Star Series", logo: "/lovable-uploads/channels/star-series-ar.png", category: "Series" },
    { name: "Studio Universal", logo: "/lovable-uploads/channels/studio-universal-ar.png", category: "Movies" },
    { name: "SuperSport 1", logo: "/lovable-uploads/channels/supersport-1-al.png", category: "Sports" },
    { name: "SuperSport 2", logo: "/lovable-uploads/channels/supersport-2-al.png", category: "Sports" },
    { name: "SuperSport 3", logo: "/lovable-uploads/channels/supersport-3-al.png", category: "Sports" },
    { name: "SuperSport 4", logo: "/lovable-uploads/channels/supersport-4-al.png", category: "Sports" },
    { name: "SuperSport 5", logo: "/lovable-uploads/channels/supersport-5-al.png", category: "Sports" },
    { name: "SuperSport 6", logo: "/lovable-uploads/channels/supersport-6-al.png", category: "Sports" },
    { name: "SuperSport 7", logo: "/lovable-uploads/channels/supersport-7-al.png", category: "Sports" },
    { name: "Syfy", logo: "/lovable-uploads/channels/syfy-ar.png", category: "Sci-Fi" },
    { name: "TBS", logo: "/lovable-uploads/channels/tbs-ar.png", category: "Entertainment" },
    { name: "TCM", logo: "/lovable-uploads/channels/tcm-ar.png", category: "Movies" },
    { name: "Telefe", logo: "/lovable-uploads/channels/telefe-ar.png", category: "Entertainment" },
    { name: "Telemundo", logo: "/lovable-uploads/channels/telemundo-international-ar.png", category: "Entertainment" },
    { name: "TLC", logo: "/lovable-uploads/channels/tlc-ar.png", category: "Lifestyle" },
    { name: "TNT", logo: "/lovable-uploads/channels/tnt-ar.png", category: "Entertainment" },
    { name: "TNT Sports", logo: "/lovable-uploads/channels/tnt-sports-ar.png", category: "Sports" },
    { name: "Tooncast", logo: "/lovable-uploads/channels/tooncast-ar.png", category: "Kids" },
    { name: "Travel Channel", logo: "/lovable-uploads/channels/travel-channel-int.png", category: "Travel" },
    { name: "TruTV", logo: "/lovable-uploads/channels/tru-tv-ar.png", category: "Entertainment" },
    { name: "TV5 Monde", logo: "/lovable-uploads/channels/tv5-monde-int.png", category: "International" },
    { name: "TYC Sports", logo: "/lovable-uploads/channels/tyc-sports-ar.png", category: "Sports" },
    { name: "Universal TV", logo: "/lovable-uploads/channels/universal-tv-ar.png", category: "Entertainment" },
    { name: "Warner Channel", logo: "/lovable-uploads/channels/warner-channel-ar.png", category: "Entertainment" },
  ];

  // Handler for adding to favorites (demo)
  const handleAddToFavorites = (title: string) => {
    toast.success(`Added "${title}" to favorites!`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <section id="channels" className="py-16 px-4 bg-box-darkest">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Entertainment</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our vast library of movies and shows with thousands of live channels from around the world
          </p>
        </div>
        
        {/* Content tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {(["all", "live", "movies", "featured"] as Array<"all" | "live" | "movies" | "featured">).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-box-neon-purple to-box-neon-blue text-white shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab === "all" && "All Content"}
              {tab === "live" && "Live TV"}
              {tab === "movies" && "Movies & Shows"}
              {tab === "featured" && "Featured Channels"}
            </button>
          ))}
        </div>

        {/* Featured Channels Section */}
        {(activeTab === "all" || activeTab === "featured" || activeTab === "live") && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Featured Channels</h3>
              <a href="#all-channels" className="text-box-neon-blue hover:text-box-neon-purple transition-colors">
                View all channels →
              </a>
            </div>
            
            {/* Auto-scrolling channel carousel */}
            <AutoScrollingCarousel 
              id="channel-carousel" 
              speed={0.5}  // Adjusted speed for better user experience
              pauseOnHover={true}  // Pause on hover for better UX
              className="mb-8"
            >
              {channels.map((channel, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 min-w-[160px] hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-black/30 p-4 flex items-center justify-center mb-3 border border-white/10 backdrop-blur-sm hover:border-box-neon-blue/30 transition-all duration-300">
                    <img 
                      src={channel.logo} 
                      alt={channel.name} 
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"  // Lazy loading for better performance
                    />
                  </div>
                  <h4 className="font-medium text-center">{channel.name}</h4>
                  <p className="text-xs text-white/50">{channel.category}</p>
                </div>
              ))}
            </AutoScrollingCarousel>
          </div>
        )}
        
        {/* Movies & Shows Section */}
        {(activeTab === "all" || activeTab === "movies") && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Movies & Series Highlights</h3>
              <a href="#full-library" className="text-box-neon-blue hover:text-box-neon-purple transition-colors">
                View full library →
              </a>
            </div>
            
            {/* MovieCarousel with automatic scrolling */}
            <MovieCarousel
              movies={movieData}
              autoScroll={true}
              autoScrollInterval={3000}
              pauseOnHover={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ChannelsAndMoviesSection;