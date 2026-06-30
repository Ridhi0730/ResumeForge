import Card from "../common/Card";
import InputField from "../common/InputField";
import Button from "../common/Button";
import TagInput from "../common/TagInput";
import { ChevronRight } from "lucide-react";

const ProjectCard = ({
  project,
  index,
  handleChange,
  removeProject,
  canRemove,
  isOpen,
  onToggle,
}) => {

  const updateField = (field) => (e) => {
    handleChange(project.id, field, e.target.value);
  };

  return (
    <Card className="space-y-5">

      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className={`
          flex justify-between items-center
          px-5 py-4
          -mx-5 -mt-5 mb-5
          rounded-t-xl
          cursor-pointer
          transition-all
          ${
            isOpen
              ? "bg-brand-primary/5"
              : "hover:bg-gray-50"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            size={22}
            className={`text-brand-primary transition-transform duration-200      ${
              isOpen ? "rotate-90" : ""
            }`}
          />

          <div>
            <h3
              className={`font-semibold ${
                isOpen
                  ? "text-brand-primary"
                  : "text-text-primary"
              }`}
            >
              {project.title || `Project #${index + 1}`}
            </h3>

            <p className="text-sm text-text-secondary">
              {project.technologies.length}{" "}
              {project.technologies.length === 1
                ? "technology"
                : "technologies"}
            </p>
          </div>
        </div>

        {canRemove && (
          <div onClick={(e) => e.stopPropagation()}>
            <Button
              variant="danger"
              onClick={() => removeProject(project.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      {isOpen && (
        <>
      <InputField
        label="Project Title"
        name="title"
        value={project.title}
        placeholder="ResumeForge"
        onChange={updateField("title")}
      />

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={project.isPersonal}
          onChange={(e) =>
            handleChange(
              project.id,
              "isPersonal",
              e.target.checked
            )
          }
        />

        This is a personal project (built individually).
      </label>

      {!project.isPersonal && (
        <InputField
          label="Role / Contribution"
          name="role"
          value={project.role}
          placeholder="Frontend Developer"
          description="Describe your contribution to this project."
          onChange={updateField("role")}
        />
      )}

      <TagInput
        label="Technologies"
        placeholder="Add a technology..."
        tags={project.technologies || []}
        onAdd={(tech) => 
          handleChange(
            project.id,
            "technologies",
            [...(project.technologies || []), tech]
          )
        }
        onRemove={(tech) => 
          handleChange(
            project.id,
            "technologies",
            (project.technologies || []).filter(
              (item) => item !== tech
            )
          )
        }
      />

      <div className="grid md:grid-cols-2 gap-4">

        <InputField
          type="month"
          label="Start Date"
          value={project.startDate}
          onChange={updateField("startDate")}
        />

        <InputField
          type="month"
          label="End Date"
          value={project.endDate}
          onChange={updateField("endDate")}
        />

      </div>

      <InputField
        label="Live Demo"
        name="liveLink"
        value={project.liveLink}
        placeholder="https://..."
        onChange={updateField("liveLink")}
      />

      <InputField
        label="GitHub Repository"
        name="githubLink"
        value={project.githubLink}
        placeholder="https://github.com/..."
        onChange={updateField("githubLink")}
      />

      <InputField
        type="textarea"
        label="Description"
        name="description"
        value={project.description}
        placeholder="Describe the project, features, achievements..."
        onChange={updateField("description")}
      />
      </>
    )}
    </Card>
  );
};

export default ProjectCard;