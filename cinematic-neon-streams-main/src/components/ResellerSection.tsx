
import { useState } from "react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";
import { Zap, Shield, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function ResellerSection() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const features = [
    {
      title: "reseller_competitive_pricing" as const,
      description: "reseller_competitive_pricing_desc" as const,
      icon: <Zap className="w-8 h-8 text-box-neon-purple" />,
      color: "purple"
    },
    {
      title: "reseller_white_label" as const,
      description: "reseller_white_label_desc" as const,
      icon: <Star className="w-8 h-8 text-box-neon-blue" />,
      color: "blue"
    },
    {
      title: "reseller_support" as const,
      description: "reseller_support_desc" as const,
      icon: <Shield className="w-8 h-8 text-box-neon-green" />,
      color: "green"
    },
  ];

  const plans = [
    {
      title: "reseller_starter" as const,
      credits: 10,
      price: 100,
      features: [
        "reseller_feature_credits_10" as const,
        "reseller_feature_basic_panel" as const,
        "reseller_feature_email_support" as const,
        "reseller_feature_white_label" as const
      ],
      color: "blue" as const
    },
    {
      title: "reseller_pro" as const,
      credits: 25,
      price: 200,
      features: [
        "reseller_feature_credits_25" as const,
        "reseller_feature_advanced_panel" as const,
        "reseller_feature_priority_support" as const,
        "reseller_feature_white_label" as const,
        "reseller_feature_custom_domain" as const,
        "reseller_feature_marketing" as const
      ],
      color: "purple" as const,
      popular: true
    },
    {
      title: "reseller_enterprise" as const,
      credits: 100,
      price: 600,
      features: [
        "reseller_feature_credits_100" as const,
        "reseller_feature_premium_panel" as const,
        "reseller_feature_vip_support" as const,
        "reseller_feature_white_label" as const,
        "reseller_feature_custom_domain_included" as const,
        "reseller_feature_marketing" as const,
        "reseller_feature_account_manager" as const,
        "reseller_feature_api_access" as const
      ],
      color: "pink" as const
    }
  ];

  // Animation variants for feature cards
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Animation variants for plan cards
  const planVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="reseller" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-box-neon-purple/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-box-neon-blue/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-box-neon-green/5 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Animated grid pattern for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)', 
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-box-neon-purple to-box-neon-blue">
            <TypedText text={t('reseller_title')} delay={100} />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('reseller_subtitle')}
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
            >
              <GlassCard 
                className="p-6 flex flex-col items-center text-center h-full transform transition-transform hover:scale-105"
                glowOnHover
                neonColor={feature.color as "purple" | "blue" | "green"}
                glowIntensity="high"
                tiltEffect
                pulsate={index === 1}
              >
                <div className="mb-4 p-3 bg-white/5 rounded-full ring-2 ring-white/10 shadow-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{t(feature.title)}</h3>
                <p className="text-white/70">{t(feature.description)}</p>
                
                {/* Enhanced neon reflection */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-box-neon-purple/5 to-transparent rounded-b-xl"></div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Reseller Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const neonColor = plan.color as "purple" | "pink" | "blue" | "green";
            const isPopular = plan.popular;
            
            return (
              <motion.div 
                key={index} 
                className={`relative ${isPopular ? "md:-mt-4" : ""}`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={planVariants}
                onMouseEnter={() => setIsHovered(prev => ({ ...prev, [`card${index+1}`]: true }))}
                onMouseLeave={() => setIsHovered(prev => ({ ...prev, [`card${index+1}`]: false }))}
              >
                {/* Animated neon border */}
                <div className={`absolute -inset-[1px] rounded-xl ${
                  isPopular 
                    ? 'bg-gradient-to-r from-box-neon-purple via-box-neon-blue to-box-neon-purple bg-size-200 animate-gradient-x'
                    : 'bg-gradient-to-r from-white/20 to-white/10'
                }`}></div>
                
                {isPopular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-box-neon-purple px-4 py-1 rounded-full text-sm font-medium animate-pulse-glow shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                      {t('reseller_most_popular')}
                    </span>
                  </div>
                )}
                
                <GlassCard
                  className={`p-6 flex flex-col h-full border-0 relative z-10 transform transition-transform hover:scale-[1.02]`}
                  glowOnHover
                  neonColor={neonColor}
                  glowIntensity="high"
                  tiltEffect
                  floatingEffect={isPopular}
                  pulsate={isPopular}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-gradient' : 'text-white'}`}>{t(plan.title)}</h3>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold ${isPopular ? 'text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-white'}`}>${plan.price}</span>
                  </div>
                  <p className="text-box-neon-blue mb-5">
                    {plan.credits} {t('reseller_credits')}
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${
                          isPopular ? 'text-box-neon-green' : 'text-box-neon-blue'
                        } ${isHovered[`card${index+1}` as keyof typeof isHovered] ? 'animate-pulse-fast' : ''}`} />
                        <span className="text-sm">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/212657263966?text=${encodeURIComponent(`${t('reseller_interested_in')} ${t(plan.title)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full text-center py-2 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group ${
                      isPopular 
                        ? 'bg-gradient-to-r from-box-neon-purple to-box-neon-blue hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}
                  >
                    {/* Moving light effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:animate-shine"></span>
                    <span className="relative z-10">{t('reseller_get_started')}</span>
                  </a>
                </GlassCard>

                {/* Enhanced glow effect when hovered */}
                {isHovered[`card${index+1}` as keyof typeof isHovered] && (
                  <div className="absolute inset-0 -z-10 rounded-lg" 
                    style={{
                      background: `radial-gradient(circle at center, var(--box-neon-${neonColor}) 0%, transparent 70%)`,
                      opacity: 0.2,
                      filter: "blur(30px)"
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to action with enhanced neon effect */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/70 mb-6">
            {t('reseller_questions')}
          </p>
          <a 
            href="https://wa.me/212657263966?text=I need more information about becoming a reseller"
            target="_blank"
            rel="noopener noreferrer" 
            className="relative inline-block py-3 px-8 rounded-full bg-box-darkest border border-box-neon-purple/50 text-white font-medium transform transition-transform hover:scale-105 overflow-hidden group"
          >
            {/* Inner neon glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-box-neon-blue/20 to-box-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            
            {/* Border glow */}
            <span className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{ 
                boxShadow: "0 0 15px rgba(139,92,246,0.5), inset 0 0 10px rgba(139,92,246,0.5)",
                background: "linear-gradient(to right, rgba(139,92,246,0.1), rgba(30,174,219,0.1))"
              }}>
            </span>
            
            {/* Text */}
            <span className="relative z-10 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-box-neon-purple to-box-neon-blue">{t('reseller_contact_us')}</span>
            
            {/* Animated glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:animate-shine"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ResellerSection;
