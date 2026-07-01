import React, { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ExperienceCard from "../cards/ExperienceCard";
import FormLayout from "./FormLayout";

const ExperienceForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus,
}) => {
  const [activeExperience, setActiveExperience] = useState(
    formData.experience[0]?.id || null
  );

  // Add Experience
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),

      title: "",
      company: "",
      location: "",

      startDate: "",
      endDate: "",
      current: false,

      description: "",

      ai: {
        bullets: [],
        suggestions: [],
      },
    };

    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));

    setActiveExperience(newExperience.id);
  };

  // Remove Experience
  const removeExperience = (id) => {
    setFormData((prev) => {
      const updatedExperience = prev.experience.filter(
        (item) => item.id !== id
      );

      if (activeExperience === id) {
        setActiveExperience(updatedExperience[0]?.id || null);
      }

      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };

  // Update Experience Field
  const handleExperienceChange = (id, field, value) => {

    const formattedValue = value;


    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          [field]: formattedValue,

          // Clear End Date if current job is checked
          ...(field === "current" && formattedValue
            ? { endDate: "" }
            : {}),
        };
      }),
    }));
  };

  const canRemove = formData.experience.length > 1;

  // -----------------------------
  // Mock AI
  // -----------------------------
  const generateBulletPoints = (text) => {
    return {
      bullets: [
        `Developed and maintained features based on ${text.slice(0, 25)}...`,
        "Collaborated with cross-functional teams to deliver features on schedule.",
        "Improved application performance and user experience through optimization.",
      ],

      suggestions: [
        "Add measurable impact (e.g. increased performance by 30%).",
        "Mention technologies used (React, APIs, MongoDB, etc.).",
        "Highlight business value or project scale.",
      ],
    };
  };

  // AI Improve
  const handleAIImprove = (id) => {
    const exp = formData.experience.find(
      (e) => e.id === id
    );

    if (!exp?.description?.trim()) return;

    const result = generateBulletPoints(exp.description);

    setFormData((prev) => ({
      ...prev,

      experience: prev.experience.map((item) =>
        item.id === id
          ? {
              ...item,

              ai: {
                bullets: result.bullets,
                suggestions: result.suggestions,
              },
            }
          : item
      ),
    }));
  };

  return (
    <Card className="h-full flex flex-col">
      <FormLayout
        title="Experience"
        subtitle="Add your work or internship experience."
        step={step}
        setStep={setStep}
        totalSteps={totalSteps}
        saveDraftManually={saveDraftManually}
        saveStatus={saveStatus}
      >
        {formData.experience.length === 0 && (
          <div className="text-center py-10 border-2 border-dashed border-border rounded-xl">
            <p className="text-text-secondary mb-4">
              No experience added yet.
            </p>

            <p className="text-sm text-text-secondary">
              Click below to add your first experience.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {formData.experience.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              handleChange={handleExperienceChange}
              removeExperience={removeExperience}
              canRemove={canRemove}
              handleAIImprove={handleAIImprove}
              isOpen={activeExperience === experience.id}
              onToggle={() =>
                setActiveExperience((prev) =>
                  prev === experience.id
                    ? null
                    : experience.id
                )
              }
            />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            variant="secondary"
            type="button"
            onClick={addExperience}
          >
            + Add Experience
          </Button>
        </div>
      </FormLayout>
    </Card>
  );
};

export default ExperienceForm;