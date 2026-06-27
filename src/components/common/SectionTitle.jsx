import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="mb-6">
        <h2 className="text-2xl font-semibold">
            {title}
        </h2>
      
        <p className="text-gray-600">
            {subtitle}
        </p>
    </div>
  )
}

export default SectionTitle
