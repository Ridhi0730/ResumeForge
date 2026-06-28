import React, { useState } from 'react'
import Header from './components/layout/Header';
import ProgressBar from './components/layout/ProgressBar';
import PersonalInfoForm from './components/forms/PersonalInfoForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import ProjectForm from './components/forms/ProjectForm';
import SkillForm from './components/forms/SkillForm';
import ResumePreview from './components/preview/ResumePreview';
import Navigation from './components/layout/Navigation';
import Workspace from './components/layout/Workspace';


const App = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    github: "",
    });


  return (
    <div className='p-4'>
      <Header />
      <ProgressBar step={step} />

      <Workspace
        leftPanel={
          step === 1 ? (
            <PersonalInfoForm 
            formData={formData} 
            setFormData={setFormData} 
            />
          ) : step === 2 ? (
            <EducationForm
            formData={formData} 
            setFormData={setFormData}
            />
          ) : step === 3 ? (
            <ExperienceForm />
          ) : step === 4 ? (
            <ProjectForm />
          ) : (
            <SkillForm />
          )
        }
        rightPanel={<ResumePreview formData={formData} />
      }
      />

      {/* Navigation Buttons
      <Navigation
          step={step}
          setStep={setStep}
          formData={formData}
        /> */}
    </div>
  );
}


export default App
