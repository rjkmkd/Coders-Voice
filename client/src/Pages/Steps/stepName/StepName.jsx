import React from 'react'
import Button from '../../../Components/shared/Button/Button'
const StepName = ({onNext}) => {
  return (
    <div>
      step Name
      <Button lable="Next" onClick={onNext}></Button>
    </div>
  );
}

export default StepName
