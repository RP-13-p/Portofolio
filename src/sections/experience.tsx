import React from "react";
import { useTranslation } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center">
      <h2 className="text-2xl mb-4 sm:text-3xl font-bold mb-6 sm:mb-6">{t("experience.title")}</h2>
      <div className="space-y-6 sm:space-y-8">

        {/* CiviBot */}
        <ExpandableCard>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            <img
              src="/CiviBot_logo.png"
              alt="CiviBot"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("experience.civibot.title")}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">{t("experience.civibot.company")}</p>
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                {t("experience.civibot.duration")} • {t("experience.civibot.location")}
              </p>
              <div className="mt-2 text-sm sm:text-base text-gray-600 text-justify leading-relaxed space-y-2 sm:space-y-3">
                {t("experience.civibot.description").split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* Water ID */}
        <ExpandableCard>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            <img
              src="/Water_id_logo.png"
              alt="Water ID"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("experience.waterid.title")}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">{t("experience.waterid.company")}</p>
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                {t("experience.waterid.duration")} • {t("experience.waterid.location")}
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-600 text-justify">
                {t("experience.waterid.description")}
              </p>
            </div>
          </div>
        </ExpandableCard>

      </div>
    </section>
  );
}