import React from 'react'

const ResumeHeader = ({ formData }) => {
  return (
    <div className="border-b border-gray-300 pb-4 mb-6">
      <h1 className="text-3xl font-bold text-center text-brand-primary">
        {formData.fullName || "Your Name"}
      </h1>

      <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
        <span>{formData.email || "email@example.com"}</span>

        <span>|</span>

        <span>{formData.phone || "+91 XXXXX XXXXX"}</span>

        <span>|</span>

        <span>{formData.city || "City"}</span>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm text-blue-600">
        <span>{formData.linkedin || "LinkedIn"}</span>

        <span>|</span>

        <span>{formData.github || "GitHub"}</span>
      </div>
    </div>
  );
};

export default ResumeHeader;
