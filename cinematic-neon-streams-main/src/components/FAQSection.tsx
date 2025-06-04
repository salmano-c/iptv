
import { useContext } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageContext } from "@/contexts/LanguageContext";
import GlassCard from "./ui/GlassCard";

const FAQSection = () => {
  const { t } = useContext(LanguageContext);
  
  const faqItems = [
    {
      question: t("faq_q1"),
      answer: t("faq_a1")
    },
    {
      question: t("faq_q2"),
      answer: t("faq_a2")
    },
    {
      question: t("faq_q3"),
      answer: t("faq_a3")
    },
    {
      question: t("faq_q4"),
      answer: t("faq_a4")
    },
    {
      question: t("faq_q5"),
      answer: t("faq_a5")
    },
    {
      question: t("faq_q6"),
      answer: t("faq_a6")
    },
    {
      question: t("faq_q7"),
      answer: t("faq_a7")
    },
    {
      question: t("faq_q8"),
      answer: t("faq_a8")
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-10 max-w-7xl mx-auto reveal-animation">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t("faq_title")}</h2>
        <p className="text-white/70 max-w-2xl mx-auto">{t("faq_subtitle")}</p>
      </div>

      <GlassCard 
        className="max-w-4xl mx-auto p-6 md:p-8"
        glowOnHover
        neonColor="purple"
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-box-neon-purple/30 rounded-full"></div>
            <div className="relative z-10 bg-gradient-to-r from-box-neon-purple to-box-neon-blue p-3 rounded-full animate-pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full divide-y divide-white/10">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="py-2 border-none transition-all duration-300 hover:bg-white/5 rounded-lg px-2"
            >
              <AccordionTrigger className="text-white text-lg font-medium hover:text-box-neon-purple hover:no-underline transition-colors group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                <div className="pl-1 border-l-2 border-box-neon-purple/50">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
          <a href="#pricing" className="btn-secondary flex items-center gap-2 transform hover:scale-105 transition-transform">
            <span>{t("free_trial")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </GlassCard>
    </section>
  );
};

export default FAQSection;
