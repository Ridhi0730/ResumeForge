import React from "react";
import { displayTitle, displaySentence, displayDate } from "../../../utils/textFormatter";

const ResumeEducation = ({ formData }) => {
  const { education = [] } = formData;

  if (!education.length) return null;

  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase border-b-2 border-brand-primary pb-1">
        Education
      </h2>

      <div className="mt-4 space-y-5">
        {education.map((item) => {

          return (
          <div key={item.id}>
            {/* Degree + Dates */}
            <div className="flex justify-between items-start gap-4">
              <div>
                {(item.degree || item.branch) && (
                  <h3 className="font-semibold text-sm">
                    {displayTitle(item.degree)}
                    {item.branch && (
                      <span className="font-normal">
                        {" "}
                        ({displayTitle(item.branch)})
                      </span>
                    )}
                  </h3>
                )}

                {item.institution && (
                  <p className="text-sm italic">
                    {displayTitle(item.institution)}
                  </p>
                )}
              </div>

              <span className="text-xs text-gray-600 whitespace-nowrap">
                {item.startDate && displayDate(item.startDate)}

                {item.startDate && " - "}

                {item.currentlyStudying
                  ? "Present"
                  : item.endDate
                  ? displayDate(item.endDate)
                  : ""}
              </span>
            </div>

            {/* Location + Grade */}
            {(item.location || item.gradeValue) && (
              <div className="flex flex-wrap justify-between text-xs text-gray-600 mt-1">
                {item.location && (
                  <span>{displayTitle(item.location)}</span>
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
                {displaySentence(item.description)}
              </p>
            )}
          </div>
          
        )})}
      </div>
    </section>
  );
};

export default ResumeEducation;