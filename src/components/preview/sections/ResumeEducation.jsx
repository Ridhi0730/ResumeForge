import React from "react";
import { formatMonthYear } from "../../../utils/formatDate";

const ResumeEducation = ({ formData }) => {
  const { education = [] } = formData;

  if (!education.length) return null;

  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase border-b-2 border-brand-primary pb-1">
        Education
      </h2>

      <div className="mt-4 space-y-5">
        {education.map((item) => (
          <div key={item.id}>
            {/* Degree + Dates */}
            <div className="flex justify-between items-start gap-4">
              <div>
                {(item.degree || item.branch) && (
                  <h3 className="font-semibold text-sm">
                    {item.degree}
                    {item.branch && (
                      <span className="font-normal">
                        {" "}
                        ({item.branch})
                      </span>
                    )}
                  </h3>
                )}

                {item.institution && (
                  <p className="text-sm italic">
                    {item.institution}
                  </p>
                )}
              </div>

              <span className="text-xs text-gray-600 whitespace-nowrap">
                {item.startDate && formatMonthYear(item.startDate)}

                {item.startDate && " - "}

                {item.currentlyStudying
                  ? "Present"
                  : item.endDate
                  ? formatMonthYear(item.endDate)
                  : ""}
              </span>
            </div>

            {/* Location + Grade */}
            {(item.location || item.gradeValue) && (
              <div className="flex flex-wrap justify-between text-xs text-gray-600 mt-1">
                {item.location && (
                  <span>{item.location}</span>
                )}

                {item.gradeValue && (
                  <span>
                    {item.gradeType}: {item.gradeValue}
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            {item.description && (
              <p className="text-xs mt-2 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeEducation;