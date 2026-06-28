import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white 
        rounded-2xl 
        shadow-lg 
        p-8 
        w-full 
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;