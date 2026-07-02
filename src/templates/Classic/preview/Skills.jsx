import React from "react";

import SectionTitle from "../../../components/common/SectionTitle";
import config from "../config";

import { skillCategories } from "../../../components/constants/SkillCategories";

import {
  displayTitle,
} from "../shared/formatters";

import { joinValues } from "../helpers";

const Skills = ({ formData }) => {
  const skills = formData.skills || {};

  const categoriesToShow = skillCategories.filter(
    (category) => skills[category.id]?.length
  );

  if (!categoriesToShow.length) return null;

  return (
    <section className="mt-6">
      <SectionTitle>
        {config.sectionTitles.skills}
      </SectionTitle>

      <div className="mt-3 space-y-2 text-xs">

        {categoriesToShow.map((category) => (
          <div key={category.id}>

            <span className="font-semibold">
              {category.shortTitle}:
            </span>{" "}

            <span>
              {joinValues(
                skills[category.id].map(displayTitle)
              )}
            </span>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;