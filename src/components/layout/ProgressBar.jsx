import React from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Folder,
  Cog,
  Check,
} from "lucide-react";

const ProgressBar = ({ step }) => {
  const steps = [
    {
      id: 1,
      title: "Personal Information",
      short: "Personal",
      icon: User,
    },
    {
      id: 2,
      title: "Education",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Experience",
      icon: Briefcase,
    },
    {
      id: 4,
      title: "Projects",
      icon: Folder,
    },
    {
      id: 5,
      title: "Skills",
      icon: Cog,
    },
  ];

  return (
    <div className="rf-container py-6">
      <div className="flex items-start justify-between">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex flex-1 min-w-0 items-center"
            >
              {/* Step */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10
                    h-10
                    md:w-12
                    md:h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300

                    ${
                      item.id < step
                        ? "bg-status-success text-white"
                        : item.id === step
                        ? "bg-brand-primary text-white"
                        : "bg-gray-300 text-gray-600"
                    }
                  `}
                >
                  {item.id < step ? (
                    <Check size={22} />
                  ) : (
                    <Icon size={22} />
                  )}
                </div>

                <p
                  className={`
                    mt-2
                    max-w-22.5
                    text-[11px]
                    text-center
                    md:text-sm
                    leading-tight
                    wrap-break-word

                    ${
                      item.id <= step
                        ? "text-text-primary font-medium"
                        : "text-text-secondary"
                    }
                  `}
                >

                  <span className="md:hidden">
                    {item.short}
                  </span>
                  <span className="hidden md:block">
                    {item.title}
                  </span>
                </p>
              </div>

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                    hidden
                    flex-1
                    h-1
                    mx-3
                    md:flex
                    rounded-full

                    ${
                      item.id < step
                        ? "bg-status-success"
                        : "bg-gray-300"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;