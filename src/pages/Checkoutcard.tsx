import React, { useState, useContext } from "react";
import "../styles/Checkoutcard.css";
import cardContext from "../context/cards/cardContext";
import { Card } from "react-bootstrap";

const Checkoutcard = (props: any) => {
  const context = useContext(cardContext);
  const { val } = props;
  const { deleteCard } = context;

  return (
    <div>
      <Card
        className="allproduct"
        style={{ width: "14rem", minHeight: "100px" }}
      >
        <div>
          <img className="smallimg" src={val.imgSrc} />
        </div>
        <Card.Body>
          <Card.Title>{val.subProduct}</Card.Title>
          <div className="medtag">{val.productName}</div>
          <hr />
          <div>
            <div className="card-text">Total Price:{val.totalPrice}</div>
            <div className="card-text">Quantity:{val.qty}</div>
          </div>
          <div className="deletebtn2">
            <button
              className="deletebtn"
              onClick={() => {
                deleteCard(val._id);
              }}
            >
              Delete Item
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkoutcard;
