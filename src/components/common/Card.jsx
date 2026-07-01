import React from "react";

const Card = ({ children, className = "", noPadding = false }) => {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-lg
        w-full
        ${noPadding ? "" : "p-8"}
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;