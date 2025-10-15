import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4 py-16"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[auto,1fr]">
        <div className="flex justify-center md:justify-start">
          <img
            src="/portrait.jpg"
            alt="Portrait"
            className="h-48 w-48 rounded-full object-cover shadow-lg ring-2 ring-gray-200 md:h-48 md:w-48"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-3">{t("hero.title")}</h1>
          <p className="text-lg text-gray-700">{t("hero.subtitle")}</p>
        </div>
      </div>
    </section>
  );
}
