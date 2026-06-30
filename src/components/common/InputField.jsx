import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,

  type = "text",
  options = [],
  prefix = "",
  variant = "default",

  required = false,
  LeftIcon,
  RightIcon,
  description = "",
  error = "",
  disabled = false,
  ...props
}) => {
  const variants = {
    default: "bg-white border-border",

    filled: "bg-gray-100 border-transparent",

    minimal: "bg-transparent border-b rounded-none border-border",
  };

  const inputClasses = `
    w-full
    rounded-xl
    border
    py-3
    text-text-primary
    placeholder:text-gray-400
    transition-all
    duration-200
    outline-none

    ${prefix ? "pl-12" : LeftIcon ? "pl-11" : "pl-4"}
    ${RightIcon ? "pr-11" : "pr-4"}

    ${variants[variant]}

    ${
      error
        ? "border-status-danger focus:ring-2 focus:ring-status-danger/20"
        : "border-border focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
    }

    ${disabled ? "bg-gray-100 cursor-not-allowed opacity-70" : ""}
  `;

  const renderField = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={5}
            className={inputClasses}
            {...props}
          />
        );

      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            {...props}
          >
            <option value="">Select...</option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
        );
    }
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-text-primary"
        >
          {label}

          {required && (
            <span className="ml-1 text-status-danger">*</span>
          )}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        {LeftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
            <LeftIcon size={18} />
          </div>
        )}

        {RightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
            <RightIcon size={18} />
          </div>
        )}

        {prefix && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-secondary">
            {prefix}
          </div>
        )}

        {renderField()}
      </div>

      {/* Helper Text */}
      {description && (
        <p className="mt-2 text-sm text-text-secondary">
          {description}
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm text-status-danger">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;