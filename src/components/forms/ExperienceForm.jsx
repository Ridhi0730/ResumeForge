import React, { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ExperienceCard from "../cards/ExperienceCard";
import FormLayout from "./FormLayout";
import { titleCase, sentenceCase, plainText } from "../../utils/textFormatter";

const ExperienceForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus
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
        }
      };
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience, newExperience],
    }));
    setActiveExperience(newExperience.id)
  };

  // Remove Experience
  const removeExperience = (id) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };

  // Update Experience Field
  const handleExperienceChange = (id, field, value) => {
    let formattedValue = value;

    switch (field) {
      case "title":
      case "company":
      case "location":
        formattedValue = titleCase(value);
        break;

      case "description":
        formattedValue = sentenceCase(value);
        break;

      default:
        formattedValue = plainText(value);
    }
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: formattedValue,
            }
          : item
      ),
    }));
  };

  const canRemove = formData.experience.length > 1;

  const generateBulletPoints = (text) => {
  // MOCK AI (replace later with real API)
    return {
      bullets: [
        `Developed and maintained features based on ${text?.slice(0, 25)}...`,
        "Improved application performance and user experience.",
        "Collaborated with cross-functional teams to deliver features on time.",
      ],
      suggestions: [
        "Add measurable impact (e.g., improved speed by 30%)",
        "Mention tools/technologies used (React, APIs, etc.)",
        "Highlight scale (users, traffic, clients)",
      ],
    };
  };

  const handleAIImprove = (id) => {
    const exp = formData.experience.find(
      (e) => e.id === id
    );

    if (!exp.description?.trim()) return;

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
        {/* Empty State */}
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

        {/* Experience Cards */}
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
                prev === experience.id ? null : experience.id
            )}
            />
          ))}
        </div>

        {/* Add Button */}
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