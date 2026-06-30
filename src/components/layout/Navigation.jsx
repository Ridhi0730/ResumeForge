import React from "react";
import Button from "../common/Button";

const Navigation = ({
  step,
  setStep,
  totalSteps,
  saveDraftManually,
  saveStatus,
}) => {

  const safeSave = () => {
    if (typeof saveDraftManually !== "function") {
      console.error("saveDraftManually is missing or not a function", saveDraftManually);
      return;
    }
    saveDraftManually();
  };

  return (
    <div className="flex justify-between items-center mt-6">

      {/* Previous */}
      <Button
        variant="secondary"
        disabled={step === 1}
        onClick={() => setStep((prev) => prev - 1)}
      >
        Previous
      </Button>

      {/* Save Draft */}
      <Button
        variant={saveStatus === "saved" 
          ? "success" 
          : "primary"}

        onClick={safeSave}
      >
        {saveStatus === "saving" 
        ? "Saving..." 
        : saveStatus === "saved" 
        ? "Saved ✓" 
        : "Save Draft"}
      </Button>

      {/* Next */}
      <Button
        variant="primary"
        disabled={step === totalSteps}
        onClick={() => setStep((prev) => prev + 1)}
      >
        Next
      </Button>

    </div>
  );
};

export default Navigation;