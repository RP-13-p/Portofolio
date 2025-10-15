import React from "react";
import { useTranslation, Trans } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-6">{t("education.title")}</h2>
      <div className="space-y-6 sm:space-y-8">

        {/* EURECOM */}
        <ExpandableCard>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            <img
              src="/EURECOM_logo.png"
              alt="EURECOM"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("education.eurecom.title")}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">{t("education.eurecom.subtitle")}</p>
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                {t("education.eurecom.year")} • {t("education.eurecom.city")}
              </p>

              {/* Description avec paragraphes + mise en forme */}
              <div className="mt-2 text-sm sm:text-base text-gray-600 text-justify leading-relaxed space-y-2 sm:space-y-3">
                {t("education.eurecom.description")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>
                      <Trans
                        i18nKey={`education.eurecom.description_part_${i}`}
                        defaults={para}
                        components={{
                          strong: <strong className="font-semibold text-gray-900" />,
                          em: <em className="italic text-gray-700" />
                        }}
                      />
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* Lycée Jacques Decour */}
        <ExpandableCard>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            <img
              src="/lyce_jacques_decour_logo.jpg"
              alt="Lycée Jacques Decour"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t("education.jacques.title")}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">{t("education.jacques.subtitle")}</p>
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                {t("education.jacques.year")} • {t("education.jacques.city")}
              </p>
              <div className="mt-2 text-sm sm:text-base text-gray-600 text-justify leading-relaxed space-y-2 sm:space-y-3">
                {t("education.jacques.description")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

      </div>
    </section>
  );
}