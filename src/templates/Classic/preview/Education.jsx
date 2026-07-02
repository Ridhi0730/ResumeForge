import React from "react";

import SectionTitle from "../../../components/common/SectionTitle";

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import {
  formatDateRange,
  formatDegree,
  formatGrade,
} from "../helpers";

const Education = ({ formData }) => {
  const education = formData.education || [];

  if (!education.length) return null;

  return (
    <section className="mt-6">
      <SectionTitle>
        Education
      </SectionTitle>

      <div className="mt-4 space-y-5">
        {education.map((item) => (
          <div key={item.id}>
            {/* Degree + Date */}

            <div className="flex items-start justify-between gap-4">

              <div>

                {formatDegree(
                  item.degree,
                  item.branch
                ) && (
                  <h3 className="text-sm font-semibold">
                    {formatDegree(
                      item.degree,
                      item.branch
                    )}
                  </h3>
                )}

                {item.institution && (
                  <p className="text-sm italic">
                    {displayTitle(
                      item.institution
                    )}
                  </p>
                )}

              </div>

              <span className="whitespace-nowrap text-xs text-gray-600">

                {formatDateRange(
                  item.startDate,
                  item.endDate,
                  item.currentlyStudying
                )}

              </span>

            </div>

            {/* Location + Grade */}

            {(item.location ||
              item.gradeValue) && (
              <div className="mt-1 flex flex-wrap justify-between text-xs text-gray-600">

                <span>
                  {displayTitle(item.location)}
                </span>

                <span>
                  {formatGrade(
                    item.gradeType,
                    item.gradeValue
                  )}
                </span>

              </div>
            )}

            {/* Description */}

            {item.description && (
              <p className="mt-2 text-xs leading-relaxed">
                {displaySentence(
                  item.description
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;