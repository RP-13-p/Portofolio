import React from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("experience.title")}</h2>
      <div className="space-y-6">
        {/* Add your experience cards here */}
      </div>
    </section>
  );
}
