import React, { useState, useEffect } from "react";

import ProgressBar from "../components/layout/ProgressBar";
import Workspace from "../components/layout/Workspace";

import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import SummaryForm from "../components/forms/SummaryForm";
import EducationForm from "../components/forms/EducationForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import ProjectForm from "../components/forms/ProjectForm";
import SkillForm from "../components/forms/SkillsForm";

import ResumePreview from "../components/preview/ResumePreview";

import { templates } from "../templates";

/* -------------------- INITIAL STATE -------------------- */

const getInitialState = () => ({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  linkedin: "",
  github: "",

  summary: "",

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
  const TOTAL_STEPS = 6;

  const [saveStatus, setSaveStatus] = useState("idle");
  // idle | saving | saved

  /* ---------------------- Resume Name ------------------------- */

  const [resumeName, setResumeName] = useState("My Resume");

  /* -------------------- Templates -------------------- */

  const [selectedTemplate, setSelectedTemplate] = useState("classic");

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

  /* ------------------ Resume Download ------------------ */


  /* -------------------- SHARED FORM PROPS -------------------- */

  const formProps = {
    formData,
    setFormData,
    step,
    setStep,
    totalSteps: TOTAL_STEPS,
    saveDraftManually,
    saveStatus,
  };

  /* -------------------- LEFT PANEL (STEP SWITCH) -------------------- */

  const leftPanel =
    step === 1 ? (
      <PersonalInfoForm {...formProps} />
    ) : step === 2 ? (
      <SummaryForm {...formProps} />
    ) : step === 3 ? (
      <EducationForm {...formProps} />
    ) : step === 4 ? (
      <ExperienceForm {...formProps} />
    ) : step === 5 ? (
      <ProjectForm {...formProps} />
    ) : <SkillForm {...formProps} />

  /* -------------------- RIGHT PANEL -------------------- */

  const rightPanel = (
    <ResumePreview
      formData={formData}
      resumeName={resumeName}
      setResumeName={setResumeName}

      selectedTemplate={selectedTemplate}
      setSelectedTemplate={setSelectedTemplate}
    />
  );

  /* -------------------- UI -------------------- */

  return (
    <div className="flex h-screen min-h-0 flex-col overflow-hidden">
      <div className="shrink-0 px-6 pt-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-text-secondary">
          {saveStatus === "saving" && (
            <span className="font-medium text-yellow-500">Saving...</span>
          )}

          {saveStatus === "saved" && (
            <span className="font-medium text-green-600">Saved ✓</span>
          )}
        </div>

        <ProgressBar step={step} />
      </div>

      <div className="min-h-0 flex-1">
        <Workspace leftPanel={leftPanel} rightPanel={rightPanel} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
