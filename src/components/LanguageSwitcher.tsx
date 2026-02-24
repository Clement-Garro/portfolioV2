"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 rounded-md"
      )}
      aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
    >
      <span className={cn("transition-opacity", locale === "en" ? "opacity-100 font-bold" : "opacity-50")}>
        EN
      </span>
      <span className="text-gray-300">/</span>
      <span className={cn("transition-opacity", locale === "fr" ? "opacity-100 font-bold" : "opacity-50")}>
        FR
      </span>
    </button>
  );
};

