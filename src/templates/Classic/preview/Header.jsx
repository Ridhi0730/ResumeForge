import React from 'react'
import { displayTitle } from '../../../utils/textFormatter';

const ResumeHeader = ({ formData }) => {
  return (
    <div className="border-b border-gray-300 pb-4 mb-6">
      <h1 className="text-3xl font-bold text-center text-brand-primary">
        {displayTitle(formData.fullName) || "Your Name"}
      </h1>

      <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
        <span>{displayTitle(formData.email) || "email@example.com"}</span>

        <span>|</span>

        <span>{displayTitle(formData.phone) || "+91 XXXXX XXXXX"}</span>

        <span>|</span>

        <span>{displayTitle(formData.city) || "City"}</span>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm text-blue-600">
        <span>{displayTitle(formData.linkedin) || "LinkedIn"}</span>

        <span>|</span>

        <span>{displayTitle(formData.github) || "GitHub"}</span>
      </div>
    </div>
  );
};

export default ResumeHeader;
