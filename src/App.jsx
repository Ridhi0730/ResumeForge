import React, { useState } from 'react'
import Header from './components/layout/Header';
import ProgressBar from './components/layout/ProgressBar';
import PersonalInfoForm from './components/forms/PersonalInfoForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import ProjectForm from './components/forms/ProjectForm';
import SkillForm from './components/forms/SkillForm';
import ResumePreview from './components/preview/ResumePreview';


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
      <div className='flex justify-center items-center'>
        {
        step===1 && (
          <PersonalInfoForm 
            formData={formData}
            setFormData={setFormData}
          />
      )}
      {
        step===2 && (
          <EducationForm />
      )
      }
      {
        step===3 && (
          <ExperienceForm />
        )
      }
      {
        step===4 && (
          <ProjectForm />
        )
      }
      {
        step===5 && (
          <SkillForm />
        )
      }
      <ResumePreview formData={formData} />
      </div>
      {/* Navigation Buttons */}
      <div className='flex justify-between mt-8'>
        <button
          onClick={()=>setStep((prev) => prev - 1)}
          disabled={step===1}
        >
          Previous
        </button>
        <button
          onClick={()=>setStep((prev) => prev + 1)}
          disabled={step===5}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
