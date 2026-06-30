import React, {useState} from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ProjectCard from "../cards/ProjectCard";
import FormLayout from "./FormLayout";
import { titleCase, sentenceCase, plainText } from "../../utils/textFormatter";

const ProjectForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus
}) => {

  const [activeProject, setActiveProject] = useState(
      formData.projects[0]?.id || null
    );

  const addProject = () => {
    const newProject = {
        id: Date.now(),
        title: "",
        isPersonal: true,
        role: "",
        technologies: [],
        startDate: "",
        endDate: "",
        liveLink: "",
        githubLink: "",
        description: "",
      }
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects, newProject
      ],
    }));
    setActiveProject(newProject.id)
  };

  const removeProject = (id) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(
        project => project.id !== id
      ),
    }));
  };

  const handleProjectChange = (id, field, value) => {

      let formattedValue = value;

      switch (field) {
      case "title":
      case "role":
        formattedValue = titleCase(value);
        break;

      case "description":
        formattedValue = sentenceCase(value);
        break;

      case "liveLink":
      case "githubLink":
        formattedValue = value.trim();
        break;

      default:
        formattedValue = plainText(value);
    }

    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(project =>
        project.id === id
          ? { ...project, [field]: formattedValue }
          : project
      ),
    }));
  };

  return (
    <Card className="h-full flex flex-col">

      <FormLayout
        title="Projects"
        subtitle="Showcase your best projects."
        step={step}
        setStep={setStep}
        totalSteps={totalSteps}
        saveDraftManually={saveDraftManually}
        saveStatus={saveStatus}
      >

        {formData.projects.length === 0 && (
          <div className="text-center py-10 border-2 border-dashed border-border rounded-xl">

            <p className="text-text-secondary mb-4">
              No projects added yet.
            </p>

            <p className="text-sm text-text-secondary">
              Click below to add your first project.
            </p>

          </div>
        )}

        <div className="space-y-6">

          {formData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              handleChange={handleProjectChange}
              removeProject={removeProject}
              canRemove={formData.projects.length > 1}
              isOpen={activeProject === project.id}
              onToggle={() => 
                setActiveProject((prev) => 
                prev === project.id ? null : project.id
              )}
            />
          ))}

        </div>

        <div className="flex justify-center pt-4">

          <Button
            variant="secondary"
            type="button"
            onClick={addProject}
          >
            + Add Project
          </Button>

        </div>

      </FormLayout>

    </Card>
  );
};

export default ProjectForm;