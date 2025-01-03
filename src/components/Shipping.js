
import React from "react";
import '../style/Shipping.css';

const Shipping = ({ onNext, onBack, formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className='shipment-container'>
    <h1 className='heading1'>Shipment Details</h1>
    <form className='shipment-form' onSubmit={handleSubmit}>
    <div className='form-row1'>
    <div className='fields'>
            <label for="addressline1">Address Line #1:</label>
            <br/>
            <input type="text"
            id="addressline1"
            value={formData.addrerss1}
            placeholder='address line #1'
            onChange={handleChange} />
        </div> 
        <div className='fields'>
            <label for="addressline2">Address Line #2:</label>
            <br/>
            <input type="text"
            id="addressline2"
            value={formData.addrerss2}
            placeholder='address line #2'
            onChange={handleChange}/>
        </div>   
    </div>
    <div className='form-row1'>
    <div className='fields'>
            <label for="city">City:</label>
            <br/>
            <input type="text"
            id="city"
            value={formData.city}
            placeholder='city'
            onChange={handleChange}/>
        </div>  
        <div className='fields'>
            <label for="state">State:</label>
            <br/>
            <input type="text"
            id="state"
            value={formData.state}
            placeholder='state'
            onChange={handleChange}  />
        </div>
    </div>
    <div className='form-row1'>
        <div className='fields'>
            <label for="pincode">Pin Code:</label>
            <br/>
            <input type="number"
            id="pincode"
            value={formData.pinCode}
            placeholder="pin code"
            onChange={handleChange} />
        </div>
        <div className='fields'>
            <label for="country">Country:</label>
            <br/>
            <input type="text"
            id="country"
            value={formData.country}
            placeholder='country'
            onChange={handleChange} />
        </div>
        
    </div>
   {/* <br/> */}
    <div className='form-row1'>
        <div className='fields'>
            <label for="landmark">Land Mark:</label>
            <input type="text"
            name={formData.landlmark}
            placeholder='landmark'
            onChange={handleChange} />
        </div>
    </div>
    <br/>
    <div className="btn">
    <button type="button" className='back-button' onClick={onBack}>Back</button>
    <button type="submit" className='next-button1'>Next</button>
    </div>
 </form>
</div>
  );
};

export default Shipping;

      
        

