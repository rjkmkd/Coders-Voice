import React from 'react'
import Button from '../../../Components/shared/Button/Button'
const StepPhoneEmail = ({onNext}) => {
  return (
    <>
        <div>Phone or Email component</div>
        <Button lable="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepPhoneEmail
