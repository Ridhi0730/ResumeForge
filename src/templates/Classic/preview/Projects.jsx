import { displayTitle, displaySentence, displayDate } from "../../../utils/textFormatter";

const ResumeProject = ({ formData }) => {
  const { projects } = formData;

  if (!projects.length) return null;

  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase border-b-2 border-brand-primary pb-1">
        Projects
      </h2>

      <div className="mt-3 space-y-5">
        {projects.map((project) => {
          const bullets = project.description
            ?.split("\n")
            .filter((line) => line.trim());

          return (
            <div key={project.id}>
              {/* Title + Dates */}
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm">
                  {displayTitle(project.title)}
                </h3>

                <span className="text-xs text-gray-600 whitespace-nowrap">
                  {displayDate(project.startDate)}
                  {project.startDate && project.endDate && " – "}
                  {displayDate(project.endDate)}
                </span>
              </div>

              {/* Role */}
              {project.role && (
                <p className="text-sm italic text-gray-700">
                  {displayTitle(project.role)}
                </p>
              )}

              {/* Technologies */}
              {project.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-0.5 mt-1.5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-2
                      py-0.5
                      rounded-full
                      text-brand-primary
                      text-[10px]
                      font-medium
                    "
                  >
                    {displayTitle(tech)}
                  </span>
                ))}
              </div>
            )}

              {/* Description */}
              {bullets?.length > 0 && (
                <ul className="list-disc ml-5 mt-2 space-y-1 text-xs">
                  {bullets.map((bullet, index) => (
                    <li key={index}>
                      {displaySentence(bullet)}
                      </li>
                  ))}
                </ul>
              )}

              {/* Links */}
              {(project.githubLink || project.liveLink) && (
                <div className="flex gap-4 mt-2 text-xs">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
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

export default ResumeProject;