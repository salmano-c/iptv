
import { LanguageCode } from "@/lib/translations";

export const detectBrowserLanguage = (): LanguageCode => {
  // Check if window is available (for SSR compatibility)
  if (typeof window !== 'undefined') {
    // Supported languages
    const supportedLanguages: LanguageCode[] = ['en', 'fr', 'ar', 'es'];
    
    try {
      // Get browser language preferences (prioritized list)
      const userLanguages = navigator.languages || [navigator.language];
      
      // Try to find the first supported language in the user's preference list
      for (const lang of userLanguages) {
        const langCode = lang.slice(0, 2).toLowerCase();
        if (supportedLanguages.includes(langCode as LanguageCode)) {
          return langCode as LanguageCode;
        }
      }
      
      // If specific browser language check fails, check for language families
      const userLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
      
      // Map similar languages to our supported ones
      const languageFamilies: Record<string, LanguageCode> = {
        en: 'en', // English family (en-US, en-GB, etc)
        fr: 'fr', // French family (fr-FR, fr-CA, etc)
        ar: 'ar', // Arabic family (ar-SA, ar-EG, etc)
        es: 'es', // Spanish family (es-ES, es-MX, etc)
        
        // Map other languages to closest match
        pt: 'es', // Portuguese → Spanish
        ca: 'es', // Catalan → Spanish
        it: 'fr', // Italian → French
        ro: 'fr', // Romanian → French
        de: 'en', // German → English
        nl: 'en', // Dutch → English
      };
      
      if (languageFamilies[userLang]) {
        return languageFamilies[userLang];
      }
    } catch (error) {
      console.error("Error detecting browser language:", error);
    }
  }
  
  // Default to English
  return 'en';
};

export const setDocumentLanguageAttributes = (language: LanguageCode) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  
  // Add language class to the HTML element for better CSS targeting
  document.documentElement.className = document.documentElement.className
    .replace(/lang-\w+/g, '')
    .trim() + ` lang-${language}`;
  
  // Set the meta tag for language
  let metaLang = document.querySelector('meta[name="language"]');
  if (!metaLang) {
    metaLang = document.createElement('meta');
    metaLang.setAttribute('name', 'language');
    document.head.appendChild(metaLang);
  }
  metaLang.setAttribute('content', language);
};

// Method to update the page direction based on language
export const applyRtlSupport = (language: LanguageCode) => {
  const isRtl = language === 'ar';
  
  // Apply RTL styles if needed
  if (isRtl) {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
  
  return isRtl;
};
