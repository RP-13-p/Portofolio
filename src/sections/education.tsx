import React from "react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("education.title")}</h2>
      <div className="space-y-6">
        {/* Add your education cards here */}
      </div>
    </section>
  );
}
