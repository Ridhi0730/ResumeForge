import React from 'react'

const ResumePreview = ({ formData }) => {
  return (
    <div className='p-6 flex flex-col items-left justify-top bg-brand-primary border-2'>
      <h2>Resume Preview</h2>
      <p> {formData.fullName}</p>
      <p> {formData.email}</p>
      <p> {formData.phone}</p>
      <p> {formData.city}</p>
      <p> {formData.linkedin}</p>
      <p> {formData.github}</p>
    </div>
  )
}

export default ResumePreview
