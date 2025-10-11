import React from "react";
import { useTranslation, Trans } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("education.title")}</h2>
      <div className="space-y-8">

        {/* EURECOM */}
        <ExpandableCard>
          <div className="flex gap-8">
            <img
              src="/EURECOM_logo.png"
              alt="EURECOM"
              className="h-20 w-20 object-contain rounded"
            />
            <div>
              <h3 className="text-2xl font-semibold">{t("education.eurecom.title")}</h3>
              <p className="text-base text-gray-700">{t("education.eurecom.subtitle")}</p>
              <p className="text-sm text-gray-500">
                {t("education.eurecom.year")} • {t("education.eurecom.city")}
              </p>

              {/* Description avec paragraphes + mise en forme */}
              <div className="mt-2 text-base text-gray-600 text-justify leading-relaxed space-y-3">
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
          <div className="flex gap-8">
            <img
              src="/lyce_jacques_decour_logo.jpg"
              alt="Lycée Jacques Decour"
              className="h-20 w-20 object-contain rounded"
            />
            <div>
              <h3 className="text-2xl font-semibold">{t("education.jacques.title")}</h3>
              <p className="text-base text-gray-700">{t("education.jacques.subtitle")}</p>
              <p className="text-sm text-gray-500">
                {t("education.jacques.year")} • {t("education.jacques.city")}
              </p>
              <div className="mt-2 text-base text-gray-600 text-justify leading-relaxed space-y-3">
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
