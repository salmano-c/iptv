
import React, { useRef, useEffect } from "react";

interface AutoScrollingCarouselProps {
  id: string;
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const AutoScrollingCarousel: React.FC<AutoScrollingCarouselProps> = ({
  id,
  children,
  reverse = false,
  speed = 1,
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;
    
    // Clone children for seamless looping
    const originalItems = Array.from(content.children);
    originalItems.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      content.appendChild(clone);
    });
    
    // Set scroll speed based on content width and speed prop
    const scrollDistance = content.scrollWidth / 2;
    const scrollDuration = scrollDistance / speed * 40; // Adjust to control speed
    
    // Apply animation style
    content.style.animationDuration = `${scrollDuration}ms`;
    content.classList.add(reverse ? 'auto-scroll-reverse' : 'auto-scroll');
    
    // Handle pause on hover
    if (pauseOnHover) {
      container.addEventListener('mouseenter', () => {
        content.style.animationPlayState = 'paused';
      });
      
      container.addEventListener('mouseleave', () => {
        content.style.animationPlayState = 'running';
      });
    }
    
    // Mobile touch support
    let touchStartX: number;
    
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      content.style.animationPlayState = 'paused';
    }, { passive: true });
    
    container.addEventListener('touchend', () => {
      content.style.animationPlayState = 'running';
    }, { passive: true });
    
    container.addEventListener('touchmove', (e) => {
      const touchDiff = touchStartX - e.touches[0].clientX;
      container.scrollLeft += touchDiff / 5;
    }, { passive: true });
    
    return () => {
      // Cleanup event listeners
      if (pauseOnHover) {
        container.removeEventListener('mouseenter', () => {
          content.style.animationPlayState = 'paused';
        });
        
        container.removeEventListener('mouseleave', () => {
          content.style.animationPlayState = 'running';
        });
      }
    };
  }, [reverse, speed, pauseOnHover]);
  
  return (
    <div 
      id={id} 
      ref={containerRef}
      className={`scroll-container hide-scrollbar overflow-hidden ${className}`}
    >
      <div 
        ref={contentRef}
        className="flex"
      >
        {children}
      </div>
    </div>
  );
};

export default AutoScrollingCarousel;
