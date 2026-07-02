import SectionTitle from "../../../components/common/SectionTitle";

const Summary = ({ formData }) => {
  if (!formData.summary?.trim()) return null;

  return (
    <section className="mt-6">
      <SectionTitle>
        Professional Summary
      </SectionTitle>

      <p className="mt-3 text-sm leading-6 text-gray-700">
        {formData.summary}
      </p>
    </section>
  );
};

export default Summary;