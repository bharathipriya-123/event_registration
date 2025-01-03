
import React from "react";
import '../style/PersonalInfo.css';

const PersonalInfo = ({ onNext, formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="containers">
      <div className="container">
        <h1 className="heading">Buyer Details</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <div className="field">
              <label className="label">First Name:</label>
              <br/>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
                placeholder="Enter your first name"
              />
            </div>
            <div className="field">
              <label className="label">Last Name:</label>
              <br/>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label className="label">Email:</label>
              <br/>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Enter your email"
              />
            </div>
        
            <div className="field">
              <label className="label">Phone Number:</label>
              <br/>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="input"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Next ➡
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;

