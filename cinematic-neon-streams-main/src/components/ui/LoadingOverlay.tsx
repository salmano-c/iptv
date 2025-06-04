
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
  isLoading: boolean;
  fullScreen?: boolean;
  message?: string;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const LoadingOverlay = ({
  isLoading,
  fullScreen = false,
  message,
  className,
  variant = "primary"
}: LoadingOverlayProps) => {
  const { t } = useContext(LanguageContext);
  
  if (!isLoading) return null;
  
  // Container styles based on whether it's fullscreen or not
  const containerStyles = fullScreen ? 
    "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg" :
    "absolute inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-md";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(containerStyles, "transition-all duration-500", className)}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2
        }}
        className="flex flex-col items-center p-10 rounded-2xl bg-black/70 border border-white/10 shadow-2xl relative"
      >
        {/* Enhanced background glow effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-box-neon-purple/20 via-box-neon-blue/20 to-box-neon-purple/20 animate-pulse"></div>
          <div className="absolute -inset-1 bg-grid-pattern opacity-20"></div>
        </div>
        
        {/* Orbital loading animation */}
        <div className="relative w-32 h-32 mb-6">
          {/* Center spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="lg" variant={variant} />
          </div>
          
          {/* Orbiting elements */}
          <motion.div 
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-box-neon-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </motion.div>
          
          <motion.div 
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-box-neon-purple rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
          </motion.div>
          
          <motion.div 
            className="absolute w-full h-full"
            animate={{ rotate: 180, scale: [1, 1.1, 1] }}
            transition={{ 
              rotate: { duration: 7, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-box-neon-pink rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
          </motion.div>
        </div>
        
        <div className="mt-2 relative z-10">
          <motion.h3 
            className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-box-neon-purple via-box-neon-blue to-box-neon-purple loading-text"
            animate={{ 
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {message || t("loading")}
          </motion.h3>
          
          <motion.p 
            className="text-white/70 text-sm mt-2 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {t("please_wait")}
          </motion.p>
        </div>
        
        <div className="mt-8 w-full max-w-xs">
          {/* Enhanced progress bar */}
          <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              className="h-full bg-gradient-to-r from-box-neon-blue via-box-neon-purple to-box-neon-pink"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="mt-6 flex justify-center space-x-3">
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-box-neon-blue"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-box-neon-purple"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-box-neon-pink"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-box-neon-green"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </div>
        
        {/* Digital code effect in the background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
          <div className="binary-rain"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingOverlay;
