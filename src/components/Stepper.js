
import React from "react";
import "../style/Stepper.css";

const Stepper = ({ currentStep, setStep }) => {
  const steps = ["Contact Details", "Shipping Details", "Place Order"];

  return (
    <div className="steppers">
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${currentStep === index ? "active" : ""}`}
          onClick={() => setStep(index)}
        >
          <div className={`circle ${currentStep >= index ? "completed" : ""}`}>
            {currentStep > index ? "✔" : index + 1}
          </div>
          <p>{step}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Stepper;


