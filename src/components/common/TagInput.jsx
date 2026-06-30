import { useState } from "react";
import { titleCase } from "../../utils/textFormatter";
import InputField from "./InputField";
import Button from "./Button";
import Chip from "./Chip";

const TagInput = ({
  label,
  placeholder,
  tags = [],
  onAdd,
  onRemove,
}) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const formattedTag = titleCase(value.trim());

    if (!formattedTag) return;
      if (tags.includes(formattedTag)) {
        setValue("");
        return;
      }

    onAdd(formattedTag);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-3">

      {label && (
        <h4 className="text-sm font-medium text-text-primary">
          {label}
        </h4>
      )}

      {/* Chips */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <Chip
                    key={`${tag}-${index}`}
                    skill={tag}
                    onRemove={() => onRemove(tag)}
                />
            ))}
        </div>
        )}

      {/* Input */}
      <div className="flex gap-3">
        <InputField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
        />

        <Button
            type="button"
            variant="secondary"
            onClick={handleAdd}
        >
            Add
        </Button>
      </div>

    </div>
  );
};

export default TagInput;