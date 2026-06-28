import React from 'react'
import Card from '../common/Card'
import ResumeHeader from './sections/ResumeHeader'
import ResumeEducation from './sections/ResumeEducation'

const ResumePreview = ({ formData }) => {
  return (
    <Card className="rf-panel h-[700px] overflow-auto bg-bg-workspace">
      {/* A4 Paper */}
      <div className="flex justify-center py-8">
        <div className="scale-[0.75] origin-top">
      
          <ResumeHeader formData={formData} />

          <ResumeEducation />
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
