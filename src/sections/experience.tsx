import React from "react";
import { useTranslation } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";
import ScrollReveal from "../components/ScrollReveal";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="flex flex-col items-center justify-start px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("experience.title")}</h2>
      </ScrollReveal>
      <div className="w-full max-w-4xl space-y-4 sm:space-y-6">

        {/* CiviBot */}
        <ScrollReveal delay={0.2}>
          <ExpandableCard>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src="/CiviBot_logo.png"
                alt="CiviBot"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("experience.civibot.title")}</h3>
                <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left mb-1">{t("experience.civibot.company")}</p>
                <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left mb-2">
                  {t("experience.civibot.duration")} • {t("experience.civibot.location")}
                </p>
                <div className="sm:block mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 text-justify leading-relaxed space-y-1 sm:space-y-3 mobile-description">
                  {t("experience.civibot.description").split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </ExpandableCard>
        </ScrollReveal>

        {/* Water ID */}
        <ScrollReveal delay={0.3}>
          <ExpandableCard>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src="/Water_id_logo.png"
                alt="Water ID"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("experience.waterid.title")}</h3>
                <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left mb-1">{t("experience.waterid.company")}</p>
                <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left mb-2">
                  {t("experience.waterid.duration")} • {t("experience.waterid.location")}
                </p>
                <p className="sm:block mt-2 text-sm sm:text-base text-gray-600 text-justify mobile-description">
                  {t("experience.waterid.description")}
                </p>
              </div>
            </div>
          </ExpandableCard>
        </ScrollReveal>

      </div>
    </section>
  );
}