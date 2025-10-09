import React from "react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("education.title")}</h2>
      <div className="space-y-8">
        {/* EURECOM */}
        <div className="flex items-center gap-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm">
          <img
            src="/EURECOM_logo.png"
            alt="EURECOM"
            className="h-20 w-20 object-contain rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{t("education.eurecom.title")}</h3>
            <p className="text-base text-gray-700">{t("education.eurecom.subtitle")}</p>
            <p className="text-sm text-gray-500">{t("education.eurecom.year")} • {t("education.eurecom.city")}</p>
            <p className="mt-2 text-base text-gray-600">{t("education.eurecom.description")}</p>
          </div>
        </div>

        {/* Lycée Jacques Decour */}
        <div className="flex items-center gap-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm">
          <img
            src="/lyce_jacques_decour_logo.jpg"
            alt="Lycée Jacques Decour"
            className="h-20 w-20 object-contain rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{t("education.jacques.title")}</h3>
            <p className="text-base text-gray-700">{t("education.jacques.subtitle")}</p>
            <p className="text-sm text-gray-500">{t("education.jacques.year")} • {t("education.jacques.city")}</p>
            <p className="mt-2 text-base text-gray-600">{t("education.jacques.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
