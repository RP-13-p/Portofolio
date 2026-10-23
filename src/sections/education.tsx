import React from "react";
import { useTranslation, Trans } from "react-i18next";
import ExpandableCard from "../components/ExpandableCard";
import ScrollReveal from "../components/ScrollReveal";

type SchoolCardProps = {
  id: string;
  logo: string;
  alt: string;
};

// Same card for every school: logo, title, degree, dates, then the description
// (paragraphs split on "\n\n", with <strong>/<em> support for the coursework).
function SchoolCard({ id, logo, alt }: SchoolCardProps) {
  const { t } = useTranslation();
  return (
    <ExpandableCard>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
        <img
          src={logo}
          alt={alt}
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded mx-auto sm:mx-0 flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{t(`education.${id}.title`)}</h3>
          <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left mb-1">{t(`education.${id}.subtitle`)}</p>
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left mb-2">
            {t(`education.${id}.year`)} • {t(`education.${id}.city`)}
          </p>

          <div className="sm:block mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 text-justify leading-relaxed space-y-1 sm:space-y-3 mobile-description">
            {t(`education.${id}.description`)
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>
                  <Trans
                    i18nKey={`education.${id}.description_part_${i}`}
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
  );
}

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="flex flex-col items-center justify-start px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      <ScrollReveal className="flex flex-col items-center w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("education.title")}</h2>
        <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
          <SchoolCard id="eurecom" logo="/EURECOM_logo.png" alt="EURECOM" />
          <SchoolCard id="berkeley" logo="/berkeley.webp" alt="UC Berkeley – Haas School of Business" />
          <SchoolCard id="edhec" logo="/edhec.jpg" alt="EDHEC Business School" />
          <SchoolCard id="skk" logo="/SKK.jpeg" alt="SKK Graduate School of Business – Sungkyunkwan University" />
          <SchoolCard id="jacques" logo="/lyce_jacques_decour_logo.jpg" alt="Lycée Jacques Decour" />
        </div>
      </ScrollReveal>
    </section>
  );
}
