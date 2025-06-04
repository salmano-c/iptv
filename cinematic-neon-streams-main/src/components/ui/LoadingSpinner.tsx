
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({ 
  size = "md", 
  variant = "default",
  className,
  text
}: LoadingSpinnerProps) => {
  // Size mappings
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-14 h-14 border-4",
    xl: "w-20 h-20 border-4"
  };
  
  // Variant mappings for colors
  const variantClasses = {
    default: "border-t-white/80 border-r-white/20 border-b-white/30 border-l-white/50",
    primary: "border-t-box-neon-purple border-r-box-neon-purple/20 border-b-box-neon-purple/30 border-l-box-neon-purple/50",
    secondary: "border-t-box-neon-pink border-r-box-neon-pink/20 border-b-box-neon-pink/30 border-l-box-neon-pink/50"
  };
  
  // Neon shadow based on variant
  const variantShadow = {
    default: "shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    primary: "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    secondary: "shadow-[0_0_15px_rgba(217,70,239,0.5)]"
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={cn(
          "relative animate-spin rounded-full", 
          sizeClasses[size],
          variantClasses[variant],
          variantShadow[variant],
          className
        )}
      />
      {text && (
        <p className="mt-4 text-white/80 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
