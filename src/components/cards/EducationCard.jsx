import Card from "../common/Card";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { ChevronRight } from "lucide-react";

const EducationCard = ({
  education,
  index,
  handleChange,
  removeEducation,
  canRemove,
  isOpen,
  onToggle,
}) => {
  const gradeConfig = {
    CGPA: {
      placeholder: "8.75",
      max: 10,
    },
    Percentage: {
      placeholder: "92.50",
      max: 100,
    },
    GPA: {
      placeholder: "3.85",
      max: 4,
    },
  };

  const updateField = (field) => (e) => {
    let value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    // Validate grade value
    if (field === "gradeValue" && value !== "") {
      const num = Number(value);

      const max = gradeConfig[education.gradeType].max;

      if (num > max) {
        value = max.toString();
      }

      if (num < 0) {
        value = "0";
      }
    }

    // Validate Dates
    if (field === "startDate") {
      if (education.endDate && value > education.endDate) {
        return;
      }
    }

    if (field === "endDate") {
      if (education.startDate && value < education.startDate) {
        return;
      }
    }

    handleChange(education.id, field, value);

    // Reset grade when grade type changes
    if (field === "gradeType") {
      handleChange(education.id, "gradeValue", "");
    }

    // Clear end date when currently studying
    if (field === "currentlyStudying" && value) {
      handleChange(education.id, "endDate", "");
    }
  };

  return (
    <Card className="h-full flex flex-col">
      {/* Header */}
      <div
        onClick={onToggle}
        className={`
        cursor-pointer w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-200
        ${isOpen ? "bg-brand-primary/5" : "hover:bg-gray-50"}
    `}
  >
    <div className="flex items-center gap-3">
      <ChevronRight
        size={22}
        className={`
          text-brand-primary
          transition-transform
          duration-200
          ${isOpen ? "rotate-90" : ""}
        `}
      />

      <div>
        <h3
          className={`text-lg font-semibold ${
            isOpen
            ? "text-brand-primary"
            : "text-text-primary"
          }`}
        >
        {education.degree || "New Education"}
        </h3>

        <p className="text-sm text-text-secondary">
          {education.branch || "Branch"}
        </p>
      </div>
    </div>

    {canRemove && (
      <Button
        variant="danger"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          removeEducation(education.id);
        }}
      >
        Delete
      </Button>
    )}
  </div>

    {isOpen && (
      <div className="px-5 py-5 border-t border-border space-y-5">

      {/* Degree */}
      <InputField
        label="Degree"
        name="degree"
        value={education.degree}
        placeholder="Bachelor of Technology"
        onChange={updateField("degree")}
      />

      {/* Branch */}
      <InputField
        label="Branch / Specialization"
        name="branch"
        value={education.branch}
        placeholder="Electronics & Communication Engineering"
        onChange={updateField("branch")}
      />

      {/* Institution */}
      <InputField
        label="Institution"
        name="institution"
        value={education.institution}
        placeholder="University Institute of Technology"
        onChange={updateField("institution")}
      />

      {/* Location */}
      <InputField
        label="Location"
        name="location"
        value={education.location}
        placeholder="Shimla, Himachal Pradesh"
        onChange={updateField("location")}
      />

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="month"
          label="Start Date"
          name="startDate"
          value={education.startDate}
          max={education.endDate || undefined}
          onChange={updateField("startDate")}
        />

        <InputField
          type="month"
          label="End Date"
          name="endDate"
          value={education.endDate}
          min={education.startDate || undefined}
          disabled={education.currentlyStudying}
          onChange={updateField("endDate")}
        />
      </div>

      {/* Currently Studying */}
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={education.currentlyStudying}
          onChange={updateField("currentlyStudying")}
        />

        Currently Studying Here
      </label>

      {/* Grade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="select"
          label="Grade Type"
          name="gradeType"
          value={education.gradeType}
          onChange={updateField("gradeType")}
          options={[
            {
              label: "CGPA",
              value: "CGPA",
            },
            {
              label: "Percentage",
              value: "Percentage",
            },
            {
              label: "GPA",
              value: "GPA",
            },
          ]}
        />

        <InputField
          type="number"
          label={education.gradeType}
          name="gradeValue"
          value={education.gradeValue}
          placeholder={gradeConfig[education.gradeType].placeholder}
          step="0.01"
          min="0"
          max={gradeConfig[education.gradeType].max}
          onChange={updateField("gradeValue")}
        />
      </div>

      {/* Description */}
      <InputField
        type="textarea"
        label="Description"
        name="description"
        value={education.description}
        placeholder="Relevant coursework, achievements, honors, clubs, certifications..."
        onChange={updateField("description")}
      />
      </div>
    )}
    </Card>
  );
};

export default EducationCard;