import Card from "../common/Card";
import Navigation from "../layout/Navigation";

const FormLayout = ({
  title,
  subtitle,
  children,
  step,
  setStep,
  totalSteps,
}) => {
  return (
    <Card className="flex flex-col h-full">

      {/* Header */}
      <div className="mb-8">
        <h2 className="section-heading">
          {title}
        </h2>

        <p className="text-text-secondary mt-2">
          {subtitle}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1">
        {children}
      </div>

      {/* Navigation */}
      <Navigation
        step={step}
        setStep={setStep}
        totalSteps={totalSteps}
      />

    </Card>
  );
};

export default FormLayout;