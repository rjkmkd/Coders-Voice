import React from 'react'
import Button from '../../../Components/shared/Button/Button'
const StepOtp = ({onNext}) => {
  return (
    <div>
      step Otp
      <Button lable="Next" onClick={onNext}></Button>
    </div>
  );
}

export default StepOtp
