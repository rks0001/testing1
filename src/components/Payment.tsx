import React, { useContext } from "react";
import "../styles/Payment.css";

import cardContext from "../context/cards/cardContext";

const Payment = () => {
  const context = useContext(cardContext);

  const { cards } = context;

  const calculateOverallPrice = (cards) => {
    let overallPrice = 0;
    cards.forEach((card) => {
      overallPrice += parseFloat(card.totalPrice);
    });
    return overallPrice.toFixed(2); // Assuming you want the result to have 2 decimal places
  };

  const overallPrice = calculateOverallPrice(cards);

  return (
    <div className="pay">
      <div className="heading"> PAYMENT DETAILS</div>
      <div className="total">
        <div className="label">MRP Total</div>
        <div className="labelt">Rs 1200</div>
      </div>
      <div className="discount">
        <div className="label">Additional Discount</div>
        <div className="labelt">- Rs 250</div>
      </div>
      <div className="totalamount">
        <div className="label">Total Amount</div>
        {/* Overall Price */}
        <div className="labelt">{overallPrice}</div>
      </div>
      <div className="extracharges">
        <div className="label">Shipping/Delivery Charges</div>
        <div className="labelt">Rs 0.00</div>
      </div>
      <div className="totalpayable">
        <div className="totalpaylabel">Total Payable {overallPrice}</div>
        <div className="labelt">
          <button className="proceed">PROCEED</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
