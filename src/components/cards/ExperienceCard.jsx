import Card from "../common/Card";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { ChevronRight } from "lucide-react";

const ExperienceCard = ({
  experience,
  index,
  handleChange,
  removeExperience,
  handleAIImprove,
  canRemove,
  isOpen,
  onToggle,
}) => {
  const updateField = (field) => (e) => {
    handleChange(
      experience.id,
      field,
      e.target.value
    );
  };

  const updateCheckbox = (field) => (e) => {
    const checked = e.target.checked;

    handleChange(
      experience.id,
      field,
      checked
    );

    if (field === "current" && checked) {
      handleChange(
        experience.id,
        "endDate",
        ""
      );
    }
  };

  return (
    <Card className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">

        <button
          type="button"
          onClick={onToggle}
          className={`flex items-center gap-3 flex-1 text-left py-2 transition-colors duration-200 hover:bg-brand-primary/5`}
        >
          <ChevronRight
            size={22}
            className={`text-brand-primary transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />

          <div>
            <h3
              className={`text-lg font-semibold ${
                isOpen
                  ? "text-brand-primary"
                  : "text-text-primary"
              }`}
            >
              {experience.title || "New Experience"}
            </h3>

            <p className="text-sm text-text-secondary">
              {experience.company || "Company"}
            </p>
          </div>
        </button>

        {canRemove && (
          <Button
            variant="danger"
            type="button"
            onClick={() => removeExperience(experience.id)}
          >
            Delete
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="mt-5 space-y-5 border-t border-border pt-5">
      {/* Fields */}
      <InputField
        label="Job Title"
        name="title"
        value={experience.title}
        placeholder="Frontend Developer"
        onChange={updateField("title")}
      />

      <InputField
        label="Company"
        name="company"
        value={experience.company}
        placeholder="Google / Startup Name"
        onChange={updateField("company")}
      />

      <InputField
        label="Location"
        name="location"
        value={experience.location}
        placeholder="Bangalore, India"
        onChange={updateField("location")}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          type="month"
          label="Start Date"
          name="startDate"
          value={experience.startDate}
          onChange={updateField("startDate")}
        />

        <InputField
          type="month"
          label="End Date"
          name="endDate"
          value={experience.endDate}
          disabled={experience.current}
          onChange={updateField("endDate")}
        />
      </div>

      {/* Current job toggle */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={experience.current}
          onChange={updateCheckbox("current")}
        />
        I currently work here
      </label>

      <InputField
        type="textarea"
        label="Description"
        name="description"
        value={experience.description}
        placeholder="Write your responsibilities, achievements, tools used..."
        onChange={updateField("description")}
      />

      <Button
        variant="secondary"
        type="button"
        onClick={() => handleAIImprove?.(experience.id)}
        disabled={!handleAIImprove || !experience.description?.trim()}
      >
        ✨ Improve with AI
      </Button>

      {experience.ai?.bullets?.length > 0 && (
        <Card className="bg-brand-primary/5 border border-brand-primary/15 shadow-none">
          <h4 className="font-semibold text-brand-primary mb-2">
            ✨ AI Generated Bullet Points
          </h4>

          <ul className="list-disc ml-5 space-y-1 text-sm">
            {experience.ai.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          {experience.ai.suggestions.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 mb-2 text-brand-primary">
                Suggestions
              </h4>

              <ul className="list-disc ml-5 space-y-1 text-sm       text-text-secondary">
                {experience.ai.suggestions.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </>
          )}
        </Card>
      )}
      </div>
      )}

    </Card>
  );
};

export default ExperienceCard;