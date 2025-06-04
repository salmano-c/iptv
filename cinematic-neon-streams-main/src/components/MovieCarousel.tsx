
import { useEffect, useState } from 'react';
import { Film } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface MoviePoster {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface MovieCarouselProps {
  movies: MoviePoster[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

const MovieCarousel = ({ 
  movies,
  autoScroll = true,
  autoScrollInterval = 3000
}: MovieCarouselProps) => {
  const { t, language } = useLanguage();
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || !api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [api, autoScroll, autoScrollInterval]);

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
      "Adventure": { en: "Adventure", fr: "Aventure", es: "Aventura", ar: "مغامرة" },
      "Crime": { en: "Crime", fr: "Crime", es: "Crimen", ar: "جريمة" },
      "Musical": { en: "Musical", fr: "Musical", es: "Musical", ar: "موسيقي" }
    };
    
    return genreMap[genre]?.[language] || genre;
  };

  // Add to favorites handler
  const handleAddToFavorites = (title: string) => {
    toast.success(`Added "${title}" to favorites!`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <div className="mt-8 pb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Film className="mr-2 text-box-neon-blue" />
          <h3 className="text-2xl font-semibold text-gradient">
            {t('movie_showcase_title')}
          </h3>
        </div>
        <a href="#full-library" className="text-box-neon-blue hover:text-box-neon-purple transition-colors">
          View full library →
        </a>
      </div>

      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <div className="relative group overflow-hidden rounded-lg border border-white/10 shadow-xl">
                  <AspectRatio ratio={2/3}>
                    <img 
                      src={movie.image} 
                      alt={`${movie.title} - ${movie.year}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 right-2 bg-box-darkest/80 backdrop-blur-sm text-sm py-1 px-2 rounded-lg">
                    <span>{movie.rating.toFixed(1)}</span>
                    <span className="text-box-neon-purple ml-1">★</span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <button 
                      onClick={() => handleAddToFavorites(movie.title)}
                      className="bg-box-neon-purple/90 hover:bg-box-neon-purple text-white py-2 px-4 rounded-lg mb-2 transition-all duration-300"
                    >
                      Watch Now
                    </button>
                    <button 
                      onClick={() => handleAddToFavorites(movie.title)}
                      className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      + Add to Favorites
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-white truncate" title={movie.title}>
                    {movie.title}
                  </h4>
                  <p className="text-xs text-white/70">
                    {movie.year} • {getGenreLabel(movie.genre)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-8 bg-black/50 hover:bg-black/70" />
        <CarouselNext className="right-0 md:-right-8 bg-black/50 hover:bg-black/70" />
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
