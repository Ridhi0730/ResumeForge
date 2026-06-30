import { ChevronRight } from "lucide-react";
import TagInput from "../common/TagInput";

const SkillSection = ({
  title,
  category,
  skills,
  placeholder,
  onAdd,
  onRemove,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-border rounded-xl bg-white transition-all duration-200">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={onToggle}
        className={`
          w-full
          flex
          items-center
          justify-between
          px-5
          py-4
          rounded-xl
          text-left
          transition-all
          duration-200
          ${
            isOpen
              ? "bg-brand-primary/5"
              : "hover:bg-gray-50"
          }
        `}
      >
        {/* Left Section */}
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

          <h3
            className={`
              text-lg
              font-semibold
              transition-colors
              ${
                isOpen
                  ? "text-brand-primary"
                  : "text-text-primary"
              }
            `}
          >
            {title}
          </h3>
        </div>

        {/* Right Badge */}
        <span
          className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-medium
            min-w-[48px]
            text-center
            ${
              skills.length
                ? "bg-brand-primary/10 text-brand-primary"
                : "bg-gray-100 text-text-secondary"
            }
          `}
        >
          {skills.length || "Add"}
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-5 py-5 border-t border-border">
          <TagInput
            placeholder={placeholder}
            tags={skills}
            onAdd={(skill) => onAdd(category, skill)}
            onRemove={(skill) => onRemove(category, skill)}
          />
        </div>
      )}
    </div>
  );
};

export default SkillSection;