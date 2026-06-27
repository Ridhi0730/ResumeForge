import React from 'react'

const InputField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
}) => {
  return (
    <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
            {label}
        </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-purple-500 outline-none"
      />
    </div>
  )
}

export default InputField
