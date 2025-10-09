import React from "react";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, image, tech, demo, repo }: Project) {
  const { t } = useTranslation();

  return (
    <article className="rounded-xl shadow p-5 bg-white">
      <img src={image} alt={title} className="rounded mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-1 mb-2">{description}</p>
      <ul className="flex gap-2 flex-wrap text-xs mb-3">
        {tech.map((tch) => (
          <li key={tch} className="px-2 py-1 bg-gray-100 rounded">
            {tch}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {demo && (
          <a href={demo} target="_blank">
            {t("footer.demo")}
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank">
            {t("footer.code")}
          </a>
        )}
      </div>
    </article>
  );
}
