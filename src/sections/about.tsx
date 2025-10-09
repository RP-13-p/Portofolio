import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
      <p className="text-gray-700 leading-relaxed">{t("about.text")}</p>
    </section>
  );
}
