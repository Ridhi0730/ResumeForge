import React from 'react'
import { displayTitle } from '../shared/formatters';
import headerConfig from "../config";
import { joinValues } from "../helpers";

const Header = ({ formData }) => {
  const contacts = joinValues(
    [
      displayTitle(formData.email),
      displayTitle(formData.phone),
      displayTitle(formData.city),
    ],
    headerConfig.separator
  );

  const links = joinValues(
    [
      displayTitle(formData.linkedin),
      displayTitle(formData.github),
    ],
    headerConfig.separator
  );

  return (
    <div className="border-b border-gray-300 pb-4 mb-6">
      <h1 className="text-center text-3xl font-bold text-brand-primary">
        {displayTitle(formData.fullName) || "Your Name"}
      </h1>

      {contacts && (
        <p className="mt-3 text-center text-sm text-gray-700">
          {contacts}
        </p>
      )}

      {links && (
        <p className="mt-2 text-center text-sm text-blue-600">
          {links}
        </p>
      )}
    </div>
  );
};

export default Header;

