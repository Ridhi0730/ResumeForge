import React, { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import EducationCard from "../cards/EducationCard";
import FormLayout from "./FormLayout";
import { titleCase, sentenceCase, plainText } from "../../utils/textFormatter";

const EducationForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus,
}) => {

  const [activeEducation, setActiveEducation] = useState(
    formData.education[0]?.id || null
  );

  const addEducation = () => {
    const newEducation = {
        id: Date.now(),

        degree: "",
        branch: "",
        institution: "",
        location: "",

        startDate: "",
        endDate: "",
        currentlyStudying: false,

        gradeType: "CGPA",
        gradeValue: "",

        description: "",
      };

    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        newEducation,
      ],
    }));
    setActiveEducation(newEducation.id)
  };

  const removeEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (item) => item.id !== id
      ),
    }));
  };

  const handleEducationChange = (id, field, value) => {

    let formattedValue = value;

    switch (field) {
      case "degree":
      case "branch":
      case "institution":
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
      education: prev.education.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: formattedValue,
            }
          : item
      ),
    }));
  };

  return (
    <Card className="h-full flex flex-col">
      <FormLayout
        title="Education"
        subtitle="Add your educational qualifications."
        step={step}
        setStep={setStep}
        totalSteps={totalSteps}
        saveDraftManually={saveDraftManually}
        saveStatus={saveStatus}
      >
        {formData.education.length === 0 && (
          <div className="text-center py-10 border-2 border-dashed border-border rounded-xl">
            <p className="text-text-secondary mb-4">
              No education added yet.
            </p>

            <p className="text-sm text-text-secondary">
              Click the button below to add your first education.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {formData.education.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              handleChange={handleEducationChange}
              removeEducation={removeEducation}
              canRemove={formData.education.length > 1}
              isOpen={activeEducation === education.id}
              onToggle={() => 
                setActiveEducation((prev) => 
                prev === education.id ? null : education.id
              )}
            />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={addEducation}
          >
            + Add Education
          </Button>
        </div>
      </FormLayout>
    </Card>
  );
};

export default EducationForm;