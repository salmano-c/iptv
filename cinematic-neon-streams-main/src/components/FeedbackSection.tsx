
import { useState, useEffect } from 'react';
import { StarIcon, Send } from 'lucide-react';
import TypedText from './ui/TypedText';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '@/contexts/LanguageContext';

export function FeedbackSection() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Alex M.",
      country: "🇺🇸 USA",
      rating: 5,
      comment: "Best IPTV service I've used. Incredible channel selection and reliable streams!"
    },
    {
      id: 2,
      name: "Mohammed H.",
      country: "🇦🇪 UAE",
      rating: 5,
      comment: "Finally found a service with all Arabic channels in HD. Customer support is amazing too."
    },
    {
      id: 3,
      name: "Sophie L.",
      country: "🇫🇷 France",
      rating: 4,
      comment: "Great selection of French channels. Occasional buffer but overall very satisfied."
    },
    {
      id: 4,
      name: "David K.",
      country: "🇬🇧 UK",
      rating: 5,
      comment: "All sports channels I need plus VOD content. Excellent value for money!"
    }
  ]);
  
  // Load saved testimonials from localStorage on initial render
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('userTestimonials');
    if (savedTestimonials) {
      try {
        const parsedTestimonials = JSON.parse(savedTestimonials);
        setTestimonials(prev => [...prev, ...parsedTestimonials]);
      } catch (e) {
        console.error('Error parsing testimonials from localStorage:', e);
      }
    }
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new testimonial from the form data
    const newTestimonial = {
      id: Date.now(), // Use timestamp as unique ID
      name,
      country: "Customer", // Default display for user submissions
      rating,
      comment: message
    };
    
    // Add to testimonials state
    setTestimonials(prev => [...prev, newTestimonial]);
    
    // Save to localStorage
    try {
      const savedTestimonials = localStorage.getItem('userTestimonials');
      const existingTestimonials = savedTestimonials ? JSON.parse(savedTestimonials) : [];
      localStorage.setItem('userTestimonials', JSON.stringify([...existingTestimonials, newTestimonial]));
    } catch (e) {
      console.error('Error saving testimonial to localStorage:', e);
    }
    
    console.log({ name, email, message, rating });
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setRating(0);
    
    // Reset submitted state after a delay
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <section id="feedback" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient heading-glow">
            <TypedText text={t('customer_feedback')} delay={300} typingSpeed={40} />
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            <TypedText 
              text={t('feedback_description')}
              delay={1000}
              typingSpeed={20}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 text-box-neon-blue">
              <TypedText text={t('customers_say')} typingSpeed={30} />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((testimonial) => (
                <GlassCard 
                  key={testimonial.id} 
                  glowOnHover
                  neonColor={testimonial.id % 2 === 0 ? "blue" : "purple"}
                  className="p-6 h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.country}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon 
                          key={i} 
                          size={16} 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          strokeWidth={i < testimonial.rating ? 0 : 2}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">{testimonial.comment}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          
          {/* Feedback Form */}
          <GlassCard className="p-6" glowOnHover neonColor="pink" tiltEffect>
            <h3 className="text-xl font-semibold mb-6 text-box-neon-pink">
              <TypedText text={t('share_experience')} typingSpeed={30} />
            </h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-box-neon-green to-box-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">{t('thank_you')}</h4>
                <p className="text-white/70">{t('feedback_submitted')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-1 text-sm">{t('name')}</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-box-neon-pink/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-1 text-sm">{t('email')}</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-box-neon-pink/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/70 mb-1 text-sm">{t('rating')}</label>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(i + 1)}
                        onMouseEnter={() => setHoverRating(i + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <StarIcon 
                          size={24}
                          className={`${
                            (hoverRating || rating) > i 
                              ? 'text-yellow-400' 
                              : 'text-white/30'
                          }`}
                          fill={(hoverRating || rating) > i ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/70 mb-1 text-sm">{t('your_experience')}</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-box-neon-pink/50"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-box-neon-pink to-box-neon-purple text-white py-3 rounded-md flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all duration-300"
                >
                  <span>{t('submit_feedback')}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-5 w-24 h-24 bg-box-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-5 w-32 h-32 bg-box-neon-pink/10 rounded-full blur-3xl"></div>
    </section>
  );
}

export default FeedbackSection;
