
import React, { useState } from "react";
import Stepper from "./Stepper";
import PersonalInfo from "./PersonalInfo";
import Shipping from "./Shipping";
import PlaceOrder from "./PlaceOrder";
import OrderSuccess from "./OrderSuccess";  

const Checkout = () => {
  const [currentStep, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    shippingInfo: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      pinCode: "",
      country: "",
      landmark: "",
    },
  });

  const [orderPlaced, setOrderPlaced] = useState(false);  

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const onNext = () => {
    if (currentStep < 2) setStep(currentStep + 1);
  };

  const onBack = () => {
    if (currentStep > 0) setStep(currentStep - 1);
  };

  const onSubmit = () => {
    setOrderPlaced(true);  
  };

  const renderStepContent = () => {
    if (orderPlaced) {
      return <OrderSuccess />;  
    }

    switch (currentStep) {
      case 0:
        return (
          <PersonalInfo
            onNext={onNext}
            formData={formData.personalInfo}
            updateFormData={(data) =>
              updateFormData({ personalInfo: { ...formData.personalInfo, ...data } })
            }
          />
        );
      case 1:
        return (
          <Shipping
            onNext={onNext}
            onBack={onBack}
            formData={formData.shippingInfo}
            updateFormData={(data) =>
              updateFormData({ shippingInfo: { ...formData.shippingInfo, ...data } })
            }
          />
        );
      case 2:
        return (
          <PlaceOrder
            formData={formData}
            onBack={onBack}
            onSubmit={onSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper currentStep={currentStep} setStep={setStep} />
      {renderStepContent()}
    </div>
  );
};

export default Checkout;


