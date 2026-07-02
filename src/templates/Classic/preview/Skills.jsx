import { skillCategories } from "../../../components/constants/SkillCategories";
import { displayTitle, displaySentence, displayDate } from "../../../utils/textFormatter";


const ResumeSkills = ({ formData }) => {
  const { skills } = formData;

  const categoriesToShow = skillCategories.filter(
    (category) => skills[category.id]?.length > 0
  );

  if (!categoriesToShow.length) return null;

  return (
    <section className="mt-4">
      <h2 className="text-sm font-bold uppercase tracking-wide border-b-2 border-brand-primary pb-1">
        Skills
      </h2>

      <div className="mt-1 space-y-2 text-xs">
        {categoriesToShow.map((category) => (
          <div key={category.id}>
            <span className="font-semibold">
              {category.shortTitle}:
            </span>{" "}
            <span>
              {skills[category.id]
                .map(displayTitle)
                .join(" • ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSkills;