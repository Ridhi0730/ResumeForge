import { useState } from "react";
import { skillCategories } from "../constants/SkillCategories";
import Card from "../common/Card";
import FormLayout from "./FormLayout";
import SkillSection from "../cards/SkillSection";

const SkillsForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus
}) => {

  const [activeCategory, setActiveCategory] = useState("technical")

  const addSkill = (category, skill) => {
    const formattedSkill = skill?.trim();

    // Ignore empty/whitespace-only input
    if (!formattedSkill) return;

    setFormData((prev) => {
      const existing = prev.skills[category] || [];

      // Case-insensitive duplicate check — this is the actual fix.
      // Previously there was no check at all here, which is how the
      // same tag (e.g. "Tailwind CSS") could end up added multiple
      // times and show up as "Tailwind CSS CSS CSS" in the resume.
      const alreadyExists = existing.some(
        (item) => item.toLowerCase() === formattedSkill.toLowerCase()
      );

      if (alreadyExists) return prev;

      return {
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...existing, formattedSkill],
        },
      };
    });
  };

  const removeSkill = (category, skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter(
          (item) => item !== skill
        ),
      },
    }));
  };

  return (
    <Card className="h-full flex flex-col">
      <FormLayout
        title="Skills"
        subtitle="Showcase your technical and professional skills."
        step={step}
        setStep={setStep}
        totalSteps={totalSteps}
        saveDraftManually={saveDraftManually}
        saveStatus={saveStatus}
      >
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <SkillSection
              key={category.id}
              title={category.title}
              category={category.id}
              isOpen={activeCategory === category.id}
              onToggle={() => 
                setActiveCategory((prev) => 
                prev === category.id ? null : category.id)}
              skills={formData.skills[category.id]}
              placeholder={category.placeholder}
              onAdd={addSkill}
              onRemove={removeSkill}
            />
          ))}
        </div>
      </FormLayout>
    </Card>
  );
};

export default SkillsForm;