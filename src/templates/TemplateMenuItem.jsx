import React from "react";
import { Check } from "lucide-react";

const TemplateMenuItem = ({
  template,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-start
        justify-between
        rounded-xl
        px-4
        py-3
        text-left
        transition-all
        hover:bg-brand-primary/5
        ${
          selected
            ? "bg-brand-primary/10"
            : ""
        }
      `}
    >
      <div>
        <h4 className="font-semibold text-text-primary">
          {template.name}
        </h4>

        <p className="mt-1 text-sm text-text-secondary">
          {template.description}
        </p>
      </div>

      {selected && (
        <Check
          size={18}
          className="text-brand-primary"
        />
      )}
    </button>
  );
};

export default TemplateMenuItem;