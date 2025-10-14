import React from "react";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "JavaScript", image: "/skills/js.svg" },
  { name: "TypeScript", image: "/skills/ts.svg" },
  { name: "React", image: "/skills/react.svg" },
  { name: "Cloud", image: "/skills/cloud.svg" },
  { name: "TailwindCSS", image: "/skills/tailwind.svg" },
  { name: "Python", image: "/skills/python.svg" },
  { name: " C ", image: "/skills/c.svg" },
  { name: "SQL", image: "/skills/sql.svg" },
  { name: "Machine Learning", image: "/skills/machine-learning.svg" },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-6 sm:py-8 px-6 md:px-20 -mt-24 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-20">{t("skills.title")}</h2>
      <div className="relative w-[85vw] md:w-[70vw] h-[18vh] justify-center items-center overflow-hidden py-6 mx-auto">
        <div className="absolute flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="inline-block px-6 md:px-10 text-center">
              <div className="h-[8vh] w-[8vh] grid place-items-center mx-auto">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-auto"
                />
              </div>
              <p className="text-sm text-gray-700 mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


