
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationKey, getTranslation } from '@/lib/translations';
import { detectBrowserLanguage, setDocumentLanguageAttributes } from '@/utils/languageDetector';
import { toast } from "sonner";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  dir: 'ltr' | 'rtl';
  availableLanguages: Array<{code: LanguageCode, name: string}>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const availableLanguages = [
  { code: 'en' as LanguageCode, name: 'English' },
  { code: 'fr' as LanguageCode, name: 'Français' },
  { code: 'ar' as LanguageCode, name: 'العربية' },
  { code: 'es' as LanguageCode, name: 'Español' }
];

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  dir: 'ltr',
  availableLanguages: availableLanguages
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Get the direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  // Translation function with improved error handling
  const t = (key: TranslationKey): string => {
    const translation = getTranslation(key, language);
    // If the translation is the same as the key, it likely means it's missing
    return translation || key;
  };

  // Set language with notification
  const setLanguage = (newLanguage: LanguageCode) => {
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
      
      // Show a toast notification when language changes (except on initial load)
      if (isInitialized) {
        const languageName = availableLanguages.find(lang => lang.code === newLanguage)?.name || newLanguage;
        toast.success(`Language changed to ${languageName}`, {
          position: "bottom-center",
          duration: 2000
        });
      }
    }
  };
  
  // Update HTML dir attribute and lang when language changes
  useEffect(() => {
    setDocumentLanguageAttributes(language);
    
    // Add RTL specific styles when Arabic is selected
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    // Save language preference to localStorage
    if (isInitialized) {
      localStorage.setItem('preferredLanguage', language);
    }
  }, [language, isInitialized]);
  
  // Load user's preferred language from localStorage or detect from browser
  useEffect(() => {
    // First try to get from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && ['en', 'fr', 'ar', 'es'].includes(savedLanguage)) {
      setLanguageState(savedLanguage as LanguageCode);
    } else {
      // If not in localStorage, auto-detect
      const detectedLanguage = detectBrowserLanguage();
      setLanguageState(detectedLanguage);
    }
    
    setIsInitialized(true);
  }, []);
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      dir,
      availableLanguages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
