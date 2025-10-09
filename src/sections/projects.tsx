import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/project_card";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

export default function Projects() {
  const { t } = useTranslation();

  const projects: Project[] = [
    // { title: "", description: "", image: "", tech: [], demo: "", repo: "" },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">{t("projects.title")}</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
