import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-8">

      <h2 className="section-heading text-brand-primary">
        {title}
      </h2>

      <p className="mt-2 text-text-secondary">
        {subtitle}
      </p>

      <div className="mt-6 border-b border-border" />

    </div>
  );
};

export default SectionTitle;