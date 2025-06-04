
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.floor(window.innerWidth * window.innerHeight / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const colors = [
          "rgba(139, 92, 246, 0.6)", // purple
          "rgba(217, 70, 239, 0.5)", // pink
          "rgba(30, 174, 219, 0.6)", // blue
          "rgba(255, 255, 255, 0.4)", // white
        ];
        
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Draw particles on canvas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });
      
      drawConnections();
      
      animationFrameRef.current = requestAnimationFrame(drawParticles);
    };

    // Draw connections between particles that are close to each other
    const drawConnections = () => {
      const maxDistance = 100;
      
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5 * (1 - distance / maxDistance);
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    // Initialize
    setCanvasSize();
    initParticles();
    drawParticles();
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60"
    />
  );
};

export default ParticleBackground;
