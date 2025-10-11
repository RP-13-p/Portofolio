import React from "react";
import { useTranslation } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("experience.title")}</h2>
      <div className="space-y-8">

        {/* CiviBot */}
        <ExpandableCard>
          <div className="flex gap-8">
            <img
              src="/CiviBot_logo.png"
              alt="CiviBot"
              className="h-20 w-20 object-contain rounded"
            />
            <div>
              <h3 className="text-2xl font-semibold">{t("experience.civibot.title")}</h3>
              <p className="text-base text-gray-700">{t("experience.civibot.company")}</p>
              <p className="text-sm text-gray-500">
                {t("experience.civibot.duration")} • {t("experience.civibot.location")}
              </p>
              <div className="mt-2 text-base text-gray-600 text-justify leading-relaxed space-y-3">
                {t("experience.civibot.description").split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* Water ID */}
        <ExpandableCard>
          <div className="flex gap-8">
            <img
              src="/Water_id_logo.png"
              alt="Water ID"
              className="h-20 w-20 object-contain rounded"
            />
            <div>
              <h3 className="text-2xl font-semibold">{t("experience.waterid.title")}</h3>
              <p className="text-base text-gray-700">{t("experience.waterid.company")}</p>
              <p className="text-sm text-gray-500">
                {t("experience.waterid.duration")} • {t("experience.waterid.location")}
              </p>
              <p className="mt-2 text-base text-gray-600">
                {t("experience.waterid.description")}
              </p>
            </div>
          </div>
        </ExpandableCard>

      </div>
    </section>
  );
}
