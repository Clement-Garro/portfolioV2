"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { en, fr, type Translations, type Locale, defaultLocale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = {
  en,
  fr,
};

const STORAGE_KEY = "portfolio-locale";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Récupérer la langue sauvegardée depuis localStorage
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale && (savedLocale === "en" || savedLocale === "fr")) {
      setLocaleState(savedLocale);
    }
    setIsHydrated(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === "en" ? "fr" : "en";
    setLocale(newLocale);
  }, [locale, setLocale]);

  const t = translations[locale];

  // Éviter le flash de contenu non-hydraté
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{ locale: defaultLocale, t: translations[defaultLocale], setLocale, toggleLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

