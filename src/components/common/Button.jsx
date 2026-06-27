import React from 'react'

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {

  const baseStyle = "px-5 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary: "bg-[#210124] text-white hover:bg-[#35003a]",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
