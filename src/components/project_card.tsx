import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, tech, demo, repo }: Project) {
  return (
    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <li key={t} className="bg-gray-200 px-2 py-1 rounded text-xs">{t}</li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {demo && <a href={demo} className="text-blue-500" target="_blank" rel="noreferrer">Demo</a>}
        {repo && <a href={repo} className="text-gray-700" target="_blank" rel="noreferrer">Code</a>}
      </div>
    </div>
  );
}
