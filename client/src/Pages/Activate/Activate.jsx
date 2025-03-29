import React, { useState } from "react";
import StepAvatar from "../Steps/stepAvatar/StepAvatar";
import StepName from "../Steps/stepName/StepName";
import StepUsername from "../Steps/stepUsername/StepUsername";

const steps = {
  1: StepName,
  2: StepAvatar,
  3: StepUsername,
};

const Activate = () => {
  const onNext = () => {
    setStep(step + 1);
  };
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Activate;
