import React from "react";

import SectionTitle from "../../../components/common/SectionTitle";

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import {
  formatDateRange,
  getBullets,
} from "../helpers";

const Experience = ({ formData }) => {
  const experience = formData.experience || [];

  if (!experience.length) return null;

  return (
    <section className="mt-6">
      <SectionTitle>
        Experience
      </SectionTitle>

      <div className="mt-4 space-y-5">
        {experience.map((item) => {
          const bullets = getBullets(item);

          return (
            <div key={item.id}>
              {/* Position + Dates */}

              <div className="flex items-start justify-between gap-4">

                <h3 className="text-sm font-semibold">
                  {displayTitle(item.title)}
                </h3>

                <span className="whitespace-nowrap text-xs text-gray-600">
                  {formatDateRange(
                    item.startDate,
                    item.endDate,
                    item.current
                  )}
                </span>

              </div>

              {/* Company + Location */}

              <div className="mt-1 flex justify-between text-sm italic">

                <span>
                  {displayTitle(item.company)}
                </span>

                <span className="text-xs text-gray-600">
                  {displayTitle(item.location)}
                </span>

              </div>

              {/* Bullets */}

              {bullets.length > 0 && (
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  {bullets.map((bullet, index) => (
                    <li key={index}>
                      {displaySentence(bullet)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;