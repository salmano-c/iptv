
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  neonColor?: "purple" | "pink" | "blue" | "green";
  glowIntensity?: "low" | "medium" | "high";
  pulsate?: boolean;
  tiltEffect?: boolean;
  floatingEffect?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = false,
  neonColor = "purple",
  glowIntensity = "medium",
  pulsate = false,
  tiltEffect = false,
  floatingEffect = false
}: GlassCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map neon color to actual color class
  const neonColorMap = {
    purple: {
      low: "hover:border-box-neon-purple/30 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
      medium: "hover:border-box-neon-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
      high: "hover:border-box-neon-purple/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
    },
    pink: {
      low: "hover:border-box-neon-pink/30 hover:shadow-[0_0_10px_rgba(217,70,239,0.3)]",
      medium: "hover:border-box-neon-pink/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
      high: "hover:border-box-neon-pink/70 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)]"
    },
    blue: {
      low: "hover:border-box-neon-blue/30 hover:shadow-[0_0_10px_rgba(30,174,219,0.3)]",
      medium: "hover:border-box-neon-blue/50 hover:shadow-[0_0_20px_rgba(30,174,219,0.4)]",
      high: "hover:border-box-neon-blue/70 hover:shadow-[0_0_30px_rgba(30,174,219,0.6)]"
    },
    green: {
      low: "hover:border-box-neon-green/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
      medium: "hover:border-box-neon-green/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]",
      high: "hover:border-box-neon-green/70 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
    }
  };

  // Active neon glow when hovered
  const activeNeonMap = {
    purple: "border-box-neon-purple/70 shadow-[0_0_20px_rgba(139,92,246,0.6)]",
    pink: "border-box-neon-pink/70 shadow-[0_0_20px_rgba(217,70,239,0.6)]",
    blue: "border-box-neon-blue/70 shadow-[0_0_20px_rgba(30,174,219,0.6)]",
    green: "border-box-neon-green/70 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
  };

  const pulsateClass = pulsate ? "animate-pulse-glow" : "";
  const hoverClass = glowOnHover ? `transition-all duration-300 ${neonColorMap[neonColor][glowIntensity]}` : "";
  const activeGlowClass = isHovered && glowOnHover ? activeNeonMap[neonColor] : "";
  const floatingClass = floatingEffect ? "animate-float" : "";
  
  // Ref for tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!tiltEffect || !cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate percentage position within element (0 to 1)
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Calculate tilt angle (maximum of 10 degrees)
      const tiltX = (0.5 - yPercent) * 8;
      const tiltY = (xPercent - 0.5) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [tiltEffect]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card transition-transform duration-300", 
        hoverClass, 
        pulsateClass, 
        activeGlowClass,
        floatingClass,
        tiltEffect && "transform-gpu",
        className
      )}
    >
      {/* Add neon glow effect on the edges */}
      {isHovered && glowOnHover && (
        <div className="absolute inset-0 -z-10 opacity-50 blur-md" 
          style={{
            background: `radial-gradient(
              circle at center,
              var(--box-neon-${neonColor}) 0%,
              transparent 70%
            )`
          }}
        />
      )}
      
      {children}
    </div>
  );
}

export default GlassCard;
