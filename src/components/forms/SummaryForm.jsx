import FormLayout from "./FormLayout";

const SummaryForm = ({
  formData,
  setFormData,
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus,
}) => {
  return (
    <FormLayout
      title="Professional Summary"
      subtitle="Write a short introduction about yourself."
      step={step}
      setStep={setStep}
      totalSteps={totalSteps}
      saveDraftManually={saveDraftManually}
      saveStatus={saveStatus}
    >
      <textarea
        rows={8}
        value={formData.summary || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            summary: e.target.value,
          })
        }
        className="w-full rounded-xl border p-4"
        placeholder="Frontend Developer with experience building..."
      />
    </FormLayout>
  );
};

export default SummaryForm;