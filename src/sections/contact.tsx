import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
      <p className="text-gray-700 mb-6">{t("contact.text")}</p>
      <a href="mailto:youremail@example.com" className="text-blue-600 font-medium underline">
        {t("contact.cta")}
      </a>
    </section>
  );
}
