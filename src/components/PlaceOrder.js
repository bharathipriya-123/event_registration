
import React from "react";
import '../style/PlaceOrder.css';

const PlaceOrder = ({ formData, onBack, onSubmit }) => {
  
  return (
    <div className="div1">
      
        <h1>Place Order</h1>
        <div >
        <h2>Contact Details:</h2>
        <div className="contact_details">
        <p>
          <strong>Name:</strong> {formData.personalInfo.firstName}{" "}
          {formData.personalInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.personalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.personalInfo.phoneNumber}
        </p>
        </div>
      </div>
      <div >
        <h2>Shipping Details:</h2>
        <div className="shipping_details">
        <p>
          <strong>Address:</strong>
          <h4 >Item to be shipped to:</h4> {formData.shippingInfo.address1},{" "}
          {formData.shippingInfo.address2}, {formData.shippingInfo.city},{" "}
          {formData.shippingInfo.state}, {formData.shippingInfo.pinCode},{" "}
          {formData.shippingInfo.country}
          
        </p>
        <p>
          <strong>Landmark:</strong> {formData.shippingInfo.landmark}
        </p>
        </div>
      </div>
      <div className="items">
        <h3>Items in the Bag</h3>
        <table>
          <tr>
            <td>F1 2022-Xbox Series X(Pre-owned)</td>
            <td></td>
            <td></td>
            <td>₹ 1499</td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td>Sub Total</td>
            <td></td>
            <td></td>
            <td>₹1,499.00</td>
          </tr>
          <tr>
            <td>To Pay:</td>
            <td></td>
            <td></td>
            <td>₹1,499.0</td>
          </tr>
        </table>

      </div>
      <div className="coupon">
        <h3>Enter coupon or Promotional code:</h3>

        <div className="boxess">
        <input type='text' placeholder="Enter code" className="text_box"/>
        <button className="apply_button">Apply</button>
        </div>
      </div>
      <div className="payment">
        <table>
          <tr>
            <td>Use my wallet balance<br/>available:0</td>
            <td>pay on Delivery(COD)<br/>₹50 COD Fee</td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td>Razorpay payment Gateway
              <br/>(Cards,Net banking,UPI,Wallets)
            </td>
          </tr>
        </table>
      </div>
      <h4 className="h4">By proceeding with the order you agree to the Terms And Conditions</h4>
      <button onClick={onBack} className="back_button">Back</button>
      <button onClick={onSubmit} className="place_order">Place Order</button>
    </div>
  );
};

export default PlaceOrder;

