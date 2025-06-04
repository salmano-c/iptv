
import { useState, useEffect, useRef } from 'react';
import { Film } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import './MovieShowcase.css';

interface MoviePoster {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface MovieShowcaseProps {
  additionalMovies?: MoviePoster[];
}

const MovieShowcase = ({ additionalMovies = [] }: MovieShowcaseProps) => {
  const { t, language } = useLanguage();
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let interval: NodeJS.Timeout;
    
    // Speed up the auto-scroll
    const scrollSpeed = 1.5; // pixels per interval
    const intervalDelay = 20; // milliseconds between each movement

    if (scrollPosition < maxScroll) {
      interval = setInterval(() => {
        setScrollPosition(prev => {
          const newPos = prev + scrollSpeed;
          if (newPos >= maxScroll) {
            // Reset with animation
            setTimeout(() => {
              // Use a smooth transition back to the start
              container.style.scrollBehavior = 'auto';
              setScrollPosition(0);
              // After a brief moment, turn smooth scrolling back on
              setTimeout(() => {
                container.style.scrollBehavior = 'smooth';
              }, 100);
            }, 2000); // Pause at the end for 2 seconds before resetting
            return maxScroll;
          }
          return newPos;
        });
      }, intervalDelay);
    }

    return () => clearInterval(interval);
  }, [autoScroll, scrollPosition]);

  // Apply scroll position to the container
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Pause auto-scroll on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  const genres = [
    "Action", "Comedy", "Drama", "Sci-Fi", "Horror", 
    "Romance", "Thriller", "Fantasy", "Animation", "Adventure"
  ];
  
  // Get genre labels based on language
  const getGenreLabel = (genre: string) => {
    const genreMap: Record<string, Record<string, string>> = {
      "Action": { en: "Action", fr: "Action", es: "Acción", ar: "أكشن" },
      "Comedy": { en: "Comedy", fr: "Comédie", es: "Comedia", ar: "كوميديا" },
      "Drama": { en: "Drama", fr: "Drame", es: "Drama", ar: "دراما" },
      "Sci-Fi": { en: "Sci-Fi", fr: "Science-Fiction", es: "Ciencia Ficción", ar: "خيال علمي" },
      "Horror": { en: "Horror", fr: "Horreur", es: "Terror", ar: "رعب" },
      "Romance": { en: "Romance", fr: "Romance", es: "Romance", ar: "رومانسي" },
      "Thriller": { en: "Thriller", fr: "Thriller", es: "Suspense", ar: "إثارة" },
      "Fantasy": { en: "Fantasy", fr: "Fantaisie", es: "Fantasía", ar: "خيال" },
      "Animation": { en: "Animation", fr: "Animation", es: "Animación", ar: "رسوم متحركة" },
      "Adventure": { en: "Adventure", fr: "Aventure", es: "Aventura", ar: "مغامرة" }
    };
    
    return genreMap[genre]?.[language] || genre;
  };

  return (
    <section id="movies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient heading-glow">
            {t('movie_showcase_title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('movie_showcase_description')}
          </p>
        </div>

        {/* Genre Carousel */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Film className="mr-2 text-box-neon-blue" />
            <span className="text-gradient">{t('all_genres')}</span>
          </h3>
          
          <div className="flex flex-wrap gap-2 md:gap-4 uniform-button-container justify-center">
            {genres.map((genre) => (
              <button 
                key={genre}
                className="bg-black/30 border border-box-neon-blue/30 rounded-full px-4 py-2 text-sm 
                         text-white/70 hover:bg-box-neon-blue/20 hover:text-white transition-all duration-300
                         hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] min-w-[100px]"
                aria-label={`Filter by ${getGenreLabel(genre)}`}
              >
                {getGenreLabel(genre)}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Posters with Auto-Scroll */}
        <div 
          className="relative mt-8 py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-6 movie-scroll-smooth"
          >
            {additionalMovies.map((movie) => (
              <div 
                key={movie.id}
                className="flex-shrink-0 w-48 transition-all duration-300 transform hover:scale-105"
              >
                <div className="group relative rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] h-72">
                  <img 
                    src={movie.image} 
                    alt={`${movie.title} - ${movie.year} - boxIPTV Movie`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white font-semibold truncate">{movie.title}</h4>
                    <div className="text-sm flex justify-between items-center mt-1">
                      <span className="text-box-neon-blue">{movie.year}</span>
                      <span className="bg-yellow-500/90 text-black px-2 py-0.5 rounded-sm text-xs font-bold">
                        {movie.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{getGenreLabel(movie.genre)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Left and right gradients for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-box-darkest to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-box-darkest to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Decorative glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-box-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-box-neon-purple/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MovieShowcase;
