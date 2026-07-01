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

    const formattedValue = value;

    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [
          ...prev.skills[category],
          formattedSkill,
        ],
      },
    }));
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