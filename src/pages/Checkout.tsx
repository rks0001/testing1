import React, { useState, useEffect, useContext } from "react";
import Checkoutcard from "./Checkoutcard";
import "../styles/Checkout.css";
import Payment from "../components/Payment";
import cardContext from "../context/cards/cardContext";

import AddAddress from "./AddAddress";

const Checkout = () => {
  const context = useContext(cardContext);

  const { cards, getCards } = context;

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="sctn_main">
      <div className="container">
        <div className="ordertxt">Checkout Cart</div>
        <div className="checkoutdivmain">
          <div className="lefttpanel">
            <div className="cardContainer">
              {cards?.map((val) => (
                <Checkoutcard key={val._id} val={val} />
              ))}
            </div>
          </div>
          <div className="righttpanel">
            <AddAddress />

            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
