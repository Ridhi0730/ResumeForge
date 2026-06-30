import React, { useState, useEffect } from "react";

import ProgressBar from "../components/layout/ProgressBar";
import Workspace from "../components/layout/Workspace";

import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import EducationForm from "../components/forms/EducationForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import ProjectForm from "../components/forms/ProjectForm";
import SkillForm from "../components/forms/SkillsForm";

import ResumePreview from "../components/preview/ResumePreview";

/* -------------------- INITIAL STATE -------------------- */

const getInitialState = () => ({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  linkedin: "",
  github: "",

  education: [],
  experience: [],
  projects: [],
  skills: {
    technical: [],
    tools: [],
    frameworks: [],
    cloud: [],
    databases: [],
    soft: [],
    languages: [],
    design: [],
    business: [],
    domain: [],
    other: [],
  },
});

/* -------------------- COMPONENT -------------------- */

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const TOTAL_STEPS = 5;

  const [saveStatus, setSaveStatus] = useState("idle");
  // idle | saving | saved

  /* -------------------- LOAD FROM STORAGE -------------------- */

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("resumeforge-draft");

    if (!saved || saved === "undefined") {
      return getInitialState();
    }

    try {
      return JSON.parse(saved);
    } catch (err) {
      console.error("Invalid draft found. Clearing it...", err);
      localStorage.removeItem("resumeforge-draft");
      return getInitialState();
    }
  });

  /* -------------------- SAVE FUNCTION -------------------- */

  const saveToStorage = async(data) => {
    console.log("SAVE STATUS IN UI:", saveStatus);

    setSaveStatus("saving");

    await new Promise((r)=> setTimeout(r, 50));

    try {

      localStorage.setItem(
        "resumeforge-draft",
        JSON.stringify(data)
      );

      setSaveStatus("saved");

      setTimeout(() => {
        setSaveStatus("idle");
      }, 1500);

    } catch (err) {
      console.error("Save failed:", err);
      setSaveStatus("idle");
    }
  };

  /* -------------------- AUTO SAVE (DEBOUNCED) -------------------- */

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem(
          "resumeforge-draft",
          JSON.stringify(formData)
        );
      } catch (err) {
        console.error("Auto-save failed:", err);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [formData]);
  

  /* -------------------- MANUAL SAVE -------------------- */

  const saveDraftManually = async () => {
    setSaveStatus("saving");

    try {
      localStorage.setItem(
        "resumeforge-draft",
        JSON.stringify(formData)
      );

      setSaveStatus("saved");

      setTimeout(() => {
        setSaveStatus("idle");
      }, 1500);

    } catch (err) {
      console.error("Manual save failed:", err);
      setSaveStatus("idle");
      }
    };

  /* -------------------- UI -------------------- */

  return (
    <div>

      {/* Save Status (optional small indicator) */}
      <div className="text-sm text-text-secondary flex items-center gap-2 mb-2">
        {saveStatus === "saving" && (
          <span className="text-yellow-500 font-medium">
            Saving...
          </span>
        )}

        {saveStatus === "saved" && (
          <span className="text-green-600 font-medium">
            Saved ✓
          </span>
        )}
      </div>

      <ProgressBar step={step} />

      <Workspace
        leftPanel={
          step === 1 ? (
            <PersonalInfoForm
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
              totalSteps={TOTAL_STEPS}
              saveDraftManually={saveDraftManually}
              saveStatus={saveStatus}
            />
          ) : step === 2 ? (
            <EducationForm
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
              totalSteps={TOTAL_STEPS}
              saveDraftManually={saveDraftManually}
              saveStatus={saveStatus}
            />
          ) : step === 3 ? (
            <ExperienceForm
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
              totalSteps={TOTAL_STEPS}
              saveDraftManually={saveDraftManually}
              saveStatus={saveStatus}
            />
          ) : step === 4 ? (
            <ProjectForm
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
              totalSteps={TOTAL_STEPS}
              saveDraftManually={saveDraftManually}
              saveStatus={saveStatus}
            />
          ) : (
            <SkillForm
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
              totalSteps={TOTAL_STEPS}
              saveDraftManually={saveDraftManually}
              saveStatus={saveStatus}
            />
          )
        }
        rightPanel={
          <ResumePreview formData={formData} />
        }
      />
    </div>
  );
};

export default ResumeBuilder;