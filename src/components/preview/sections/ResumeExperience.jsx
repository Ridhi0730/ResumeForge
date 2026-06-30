import { formatMonthYear } from "../../../utils/formatDate";

const ResumeExperience = ({ formData }) => {

  const { experience } = formData;

  if (!experience.length) return null;

  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase border-b-2 border-brand-primary pb-1">
        Experience
      </h2>

      <div className="mt-3 space-y-5">
        {experience.map((item) => {
          const bullets =
            item.ai?.bullets?.length
              ? item.ai.bullets
              : item.description
                ?.split("\n")
                .filter(line => line.trim());

          return (
            <div key={item.id}>
              {/* Title + Dates */}
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm">
                  {item.title}
                </h3>

                <span className="text-xs text-gray-600 whitespace-nowrap">
                  {formatMonthYear(item.startDate)} –{" "}
                  {item.current
                    ? "Present"
                    : formatMonthYear(item.endDate)}
                </span>
              </div>

              {/* Company + Location */}
              <div className="flex justify-between text-sm italic">
                <span>{item.company}</span>

                <span className="text-xs text-gray-600">
                  {item.location}
                </span>
              </div>

              {/* Description */}
              {bullets?.length > 0 && (
                <ul className="list-disc ml-5 mt-2 space-y-1 text-xs">
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
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

export default ResumeExperience;