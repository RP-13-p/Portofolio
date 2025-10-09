import React from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("experience.title")}</h2>
      <div className="space-y-8">
        {/* CiviBot */}
        <div className="flex items-center gap-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm">
          <img
            src="/CiviBot_logo.png"
            alt="CiviBot"
            className="h-20 w-20 object-contain rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{t("experience.civibot.title")}</h3>
            <p className="text-base text-gray-700">{t("experience.civibot.company")}</p>
            <p className="text-sm text-gray-500">{t("experience.civibot.duration")} • {t("experience.civibot.location")}</p>
            <p className="mt-2 text-base text-gray-600">{t("experience.civibot.description")}</p>
          </div>
        </div>

        {/* Water ID */}
        <div className="flex items-center gap-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm">
          <img
            src="/Water_id_logo.png"
            alt="Water ID"
            className="h-20 w-20 object-contain rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{t("experience.waterid.title")}</h3>
            <p className="text-base text-gray-700">{t("experience.waterid.company")}</p>
            <p className="text-sm text-gray-500">{t("experience.waterid.duration")} • {t("experience.waterid.location")}</p>
            <p className="mt-2 text-base text-gray-600">{t("experience.waterid.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
