import React, {useState} from 'react'
import styles from './Register.module.css'
import StepAvatar from '../Steps/stepAvatar/StepAvatar'
import StepName from '../Steps/stepName/StepName'
import StepOtp from '../Steps/stepOtp/StepOtp'
import StepPhoneEmail from '../Steps/stepPhoneEmail/StepPhoneEmail'
import StepUsername from '../Steps/stepUsername/StepUsername'

const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
    3:StepName,
    4:StepAvatar,
    5:StepUsername,
}

const Register = () => {

  const onNext = () => {
    setStep(step + 1);
  }
    const [step, setStep] = useState(1)
    const Step = steps[step]
  return (
    <div>
      <Step onNext={onNext}/>
    </div>
  )
}

export default Register
