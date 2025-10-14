import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
        {t("hero.title")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
        {t("hero.subtitle")}
      </p>
    </section>
  );
}