
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypedTextProps {
  text: string;
  className?: string;
  delay?: number;
  typingSpeed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  startTyping?: boolean;
  loop?: boolean;
  cursorClassName?: string;
  cursorBlinkSpeed?: number;
}

export function TypedText({
  text,
  className,
  delay = 0,
  typingSpeed = 40,
  showCursor = true,
  onComplete,
  startTyping = true,
  loop = false,
  cursorClassName = "",
  cursorBlinkSpeed = 700,
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const completedRef = useRef(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!startTyping) {
      return;
    }
    
    // Reset state if text changes
    setDisplayedText("");
    completedRef.current = false;
    
    // Clear existing timeouts
    if (initialDelayRef.current) clearTimeout(initialDelayRef.current);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    
    // Initial delay before typing starts
    initialDelayRef.current = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      // Type each character one by one
      typingIntervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
          setIsTyping(false);
          
          if (!completedRef.current) {
            completedRef.current = true;
            if (onComplete) onComplete();
          }
          
          // If loop is enabled, restart after a pause
          if (loop) {
            setTimeout(() => {
              setDisplayedText("");
              completedRef.current = false;
              setTimeout(() => {
                setIsTyping(true);
                let loopIndex = 0;
                
                typingIntervalRef.current = setInterval(() => {
                  if (loopIndex < text.length) {
                    setDisplayedText(text.substring(0, loopIndex + 1));
                    loopIndex++;
                  } else {
                    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
                    setIsTyping(false);
                  }
                }, typingSpeed);
              }, delay);
            }, 2000); // 2 second pause before restarting
          }
        }
      }, typingSpeed);
      
      return () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      };
    }, delay);
    
    return () => {
      if (initialDelayRef.current) clearTimeout(initialDelayRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [text, delay, typingSpeed, onComplete, startTyping, loop]);

  const cursorStyle = {
    animationDuration: `${cursorBlinkSpeed}ms`,
  };

  return (
    <span className={cn(className)}>
      {displayedText}
      {showCursor && (isTyping || loop) && (
        <span 
          className={cn("typing-cursor-element", cursorClassName)} 
          style={cursorStyle}
        ></span>
      )}
    </span>
  );
}

export default TypedText;
