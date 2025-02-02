import React from 'react'
import Button from '../../../Components/shared/Button/Button'
const StepUsername = ({onNext}) => {
  return (
    <div>
      Step Username
      <Button lable="Next" onClick={onNext}></Button>
    </div>
  );
}

export default StepUsername
