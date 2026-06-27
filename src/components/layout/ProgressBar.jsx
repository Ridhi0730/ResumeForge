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
    <div className="w-full px-10 py-8">
      <div className="flex items-start justify-between">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex flex-1 items-center"
            >
              {/* Step */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-12
                    h-12
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
                    mt-3
                    text-sm
                    text-center
                    w-28

                    ${
                      item.id <= step
                        ? "text-text-primary font-medium"
                        : "text-text-secondary"
                    }
                  `}
                >
                  {item.title}
                </p>
              </div>

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                    flex-1
                    h-1
                    mx-2
                    mb-8
                    rounded-full
                    transition-all
                    duration-300

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