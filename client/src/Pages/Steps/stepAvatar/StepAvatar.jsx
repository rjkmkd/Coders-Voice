import React from 'react'
import Button from '../../../Components/shared/Button/Button'
const StepAvatar = ({onNext}) => {
  return (
    <div>
      step Avatar
      <Button lable="Next" onClick={onNext}></Button>
    </div>
  );
}

export default StepAvatar
