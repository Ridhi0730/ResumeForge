import React from 'react'
import Card from '../common/Card'

import ResumePage from './ResumePage'
import ResumeHeader from './sections/ResumeHeader'
import ResumeEducation from './sections/ResumeEducation'
import ResumeExperience from './sections/ResumeExperience'
import ResumeProjects from './sections/ResumeProjects'
import ResumeSkills from './sections/ResumeSkills'

const ResumePreview = ({ formData }) => {
  return (
    <Card className="rf-panel h-full flex flex-col bg-bg-workspace">
      {/* A4 Paper */}
      <div className='flex-1 overflow-y-auto p-8'>
      <div className="flex justify-center items-start w-full h-full">

        <div className="p-1 origin-top transition-transform duration-300
        scale-[0.45] sm:scale[0.55] md:scale-[0.65] lg:scale[0.72] xl:scale-[0.82] 2xl:scale-[0.90]">
      
          <ResumePage>

            <ResumeHeader 
              formData={formData} 
            />

            <ResumeEducation 
              formData={formData}
            />

            <ResumeExperience 
              formData={formData}
            />

            <ResumeProjects 
              formData={formData}
            />

            <ResumeSkills 
              formData={formData}
            />          

          </ResumePage>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResumePreview







































// import React from 'react'

// const ResumePreview = ({ formData }) => {
//   return (
//     <div className='p-6 flex flex-col items-left justify-top bg-brand-primary border-2'>
//       <h2>Resume Preview</h2>
//       <p> {formData.fullName}</p>
//       <p> {formData.email}</p>
//       <p> {formData.phone}</p>
//       <p> {formData.city}</p>
//       <p> {formData.linkedin}</p>
//       <p> {formData.github}</p>
//     </div>
//   )
// }

// export default ResumePreview
