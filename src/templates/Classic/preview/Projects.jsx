import React from "react";

import SectionTitle from "../../../components/common/SectionTitle";
import config from "../config"

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import {
  formatDateRange,
  getBullets,
} from "../helpers";

const Projects = ({ formData }) => {
  const projects = formData.projects || [];

  if (!projects.length) return null;

  return (
    <section className="mt-6">
      <SectionTitle>
        {config.sectionTitles.projects}
      </SectionTitle>

      <div className="mt-4 space-y-5">
        {projects.map((project) => {
          const bullets = getBullets(project);

          return (
            <div key={project.id}>
              {/* Title + Dates */}

              <div className="flex items-start justify-between gap-4">

                <h3 className="text-sm font-semibold">
                  {displayTitle(project.title)}
                </h3>

                <span className="whitespace-nowrap text-xs text-gray-600">
                  {formatDateRange(
                    project.startDate,
                    project.endDate
                  )}
                </span>

              </div>

              {/* Role */}

              {project.role && (
                <p className="mt-1 text-sm italic text-gray-700">
                  {displayTitle(project.role)}
                </p>
              )}

              {/* Technologies — deduped before rendering, so a
                  repeated tag entered twice (or a data glitch) can't
                  render as e.g. "Tailwind CSS CSS CSS" */}

              {project.technologies?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {[...new Set(project.technologies)].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium text-brand-primary"
                    >
                      {displayTitle(tech)}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}

              {bullets.length > 0 && (
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  {bullets.map((bullet, index) => (
                    <li key={index}>
                      {displaySentence(bullet)}
                    </li>
                  ))}
                </ul>
              )}

              {/* Links */}

              {(project.githubLink || project.liveLink) && (
                <div className="mt-2 flex gap-4 text-xs">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-primary hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;