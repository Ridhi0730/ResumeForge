import React from 'react'

const InputField = ({
    label,
    name,
    value,
    onChange,
    placeholder,

    type = 'text',
    options = [],
    prefix = "",
    variant = "default",

    required = false,
    LeftIcon: LeftIcon,
    RightIcon: RightIcon,
    description = "",
    error = "",
    disabled = false,

}) => {

  const variants = {
    default:
      "bg-white border-border",

      filled:
      "bg-gray-100 border-transparent",

      minimal:
      "bg-transparent border-b rounded-none border-border"
  }

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

    ${prefix ? "pl-4" : LeftIcon ? "pl-11" : "pl-4"}
    ${RightIcon ? "pr-11" : "pr-4"}

    ${variants[variant]}

    ${
      error
        ? "border-status-danger focus:ring-2 focus:ring-status-danger/20"
        : "border-border focus:border-brand-accent focus:ring-2      focus:ring-brand-accent/20"
    }

    ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
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
        >
          <option value="">
            Select...
          </option>

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
        />
      );
  }
};

  return (
    <div className="w-full">

      {LeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
        <LeftIcon size={18} />
    </div>
    )}

      {RightIcon && (
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
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
  )
}

export default InputField
