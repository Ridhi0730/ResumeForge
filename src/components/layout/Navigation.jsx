import React from 'react'
import Button from '../common/Button'

const Navigation = ({
    step,
    setStep,
    totalSteps,
}) => {
  return (
    <div className='flex justify-between items-center mt-6'>
        <Button
            variant='secondary'
            disabled={step === 1}
            onClick={() => setStep((prev) => prev - 1)}
        >
            Previous
        </Button>

        <Button
            variant= "success">
                Save Draft
        </Button>

        <Button
            variant='primary'
            disabled={step === totalSteps}
            onClick={() => setStep((prev) => prev + 1)}
        >
            Next
        </Button>
    </div>
  )
}
      

export default Navigation
