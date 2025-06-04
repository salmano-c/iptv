
import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, MessageSquare } from "lucide-react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import LoadingSpinner from "./ui/LoadingSpinner";

interface AIChatbotProps {
  className?: string;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  completed?: boolean;
}

export function AIChatbot({ className }: AIChatbotProps) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message based on language
  useEffect(() => {
    setMessages([
      { 
        id: 1, 
        text: t("chat_welcome"), 
        isBot: true, 
        completed: true 
      }
    ]);
  }, [language, t]);

  // Animation for floating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        // Create a subtle floating effect by oscillating between values
        // Using a different phase than WhatsAppButton to avoid synchronized movement
        return Math.sin((Date.now() / 1000) + Math.PI) * 3;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Auto responses based on keywords and current language
  const getAutoResponse = (userInput: string): string => {
    const lowercaseInput = userInput.toLowerCase();
    
    // Trial/Free Trial
    if (lowercaseInput.includes("trial") || 
        lowercaseInput.includes("free") || 
        (language === 'fr' && (lowercaseInput.includes("essai") || lowercaseInput.includes("gratuit"))) ||
        (language === 'ar' && (lowercaseInput.includes("تجربة") || lowercaseInput.includes("مجان")))) {
      return language === 'fr' 
        ? "Super ! Je peux vous aider à démarrer avec un essai gratuit de 24 heures. Veuillez cliquer sur le bouton 'Essai Gratuit' dans notre section tarification ou nous contacter directement sur WhatsApp pour une activation instantanée."
        : language === 'ar'
        ? "رائع! يمكنني مساعدتك في البدء بتجربة مجانية لمدة 24 ساعة. يرجى النقر على زر 'تجربة مجانية' في قسم الأسعار أو مراسلتنا مباشرة على WhatsApp للتفعيل الفوري."
        : "Great! I can help you get started with a free 24-hour trial. Please click the 'Free Trial' button on our pricing section or message us directly on WhatsApp for instant activation.";
    }
    
    // Pricing
    if (lowercaseInput.includes("price") || 
        lowercaseInput.includes("cost") || 
        lowercaseInput.includes("pricing") || 
        (language === 'fr' && (lowercaseInput.includes("prix") || lowercaseInput.includes("tarif"))) ||
        (language === 'ar' && (lowercaseInput.includes("سعر") || lowercaseInput.includes("تكلفة")))) {
      return language === 'fr'
        ? "Nous proposons des forfaits compétitifs à partir de seulement 15€/mois avec accès à plus de 10 000 chaînes et 40 000 films. Consultez notre section tarification pour plus de détails !"
        : language === 'ar'
        ? "نقدم خططًا تنافسية تبدأ من 15 يورو فقط شهريًا مع إمكانية الوصول إلى أكثر من 10,000 قناة و 40,000 فيلم. تحقق من قسم الأسعار لدينا للحصول على مزيد من التفاصيل!"
        : "We offer competitive plans starting at just €15/month with access to 10,000+ channels and 40,000+ movies. Check out our pricing section for more details!";
    }
    
    // Default response for any other input
    return language === 'fr'
      ? "Merci pour votre message ! Pour des informations plus spécifiques, veuillez nous contacter directement sur WhatsApp pour une assistance immédiate."
      : language === 'ar'
      ? "شكرًا لرسالتك! للحصول على معلومات أكثر تحديدًا، يرجى الاتصال بنا مباشرة على WhatsApp للحصول على مساعدة فورية."
      : "Thank you for your message! For more specific information, please contact us directly on WhatsApp for immediate assistance.";
  };

  // Function to handle sending a new message
  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { id: userMessageId, text: input, isBot: false, completed: true }]);
    const userInput = input; // Store input before clearing it
    setInput("");
    setIsTyping(true);
    
    // Generate bot response after a delay
    setTimeout(() => {
      const botMessageId = Date.now() + 1;
      const response = getAutoResponse(userInput);
      
      setMessages(prev => [...prev, { 
        id: botMessageId, 
        text: response, 
        isBot: true 
      }]);
      
      setIsTyping(false);
    }, 1500);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{ transform: `translateY(${position}px)` }}
        className={`fixed bottom-24 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-box-neon-purple to-box-neon-blue shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 ${className || ""}`}
      >
        <MessageSquare className="text-white" size={24} />
        
        {/* Pulsing effect to attract attention */}
        <span className="absolute -inset-1 rounded-full bg-box-neon-purple/20 animate-ping"></span>
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <GlassCard 
          className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 max-h-[500px] p-0 overflow-hidden flex flex-col shadow-2xl border-box-neon-purple/30"
          neonColor="purple"
          glowOnHover
          tiltEffect
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-box-neon-purple/80 to-box-neon-blue/80 p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <h3 className="font-bold">{t("chat_title")}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80 bg-black/40">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.isBot 
                      ? "bg-black/40 text-white border border-box-neon-purple/20" 
                      : "bg-gradient-to-r from-box-neon-purple/90 to-box-neon-blue/90 text-white"
                  }`}
                >
                  {message.isBot && !message.completed ? (
                    <TypedText
                      text={message.text}
                      typingSpeed={20}
                      onComplete={() => {
                        setMessages(prev => 
                          prev.map(msg => 
                            msg.id === message.id ? { ...msg, completed: true } : msg
                          )
                        );
                      }}
                    />
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-black/40 rounded-xl p-3 text-white border border-box-neon-purple/20">
                  <div className="flex items-center space-x-2">
                    <LoadingSpinner size="sm" variant="primary" />
                    <span className="text-sm text-white/70">{t("loading")}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t border-white/10 p-3 flex items-center gap-2 bg-black/60">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t("chat_placeholder")}
              className="flex-1 bg-black/30 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-box-neon-purple/50"
            />
            <button
              onClick={handleSend}
              disabled={input.trim() === ""}
              className="bg-gradient-to-r from-box-neon-purple/80 to-box-neon-blue/80 hover:from-box-neon-purple hover:to-box-neon-blue text-white rounded-full p-2 focus:outline-none disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </GlassCard>
      )}
    </>
  );
}

export default AIChatbot;
