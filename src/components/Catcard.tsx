import "../styles/Catcard.css";
import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Catcard = (props: any) => {
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(props.BestPrice);

  const discount = (((props.mrp - props.BestPrice) / props.mrp) * 100).toFixed(
    2
  );

  const handleIncrement = () => {
    setQty((prevQty) => prevQty + 1);
    const newTotalPrice = (props.BestPrice * (qty + 1)).toFixed(2);
    setTotalPrice(newTotalPrice);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
      const newTotalPrice = (props.BestPrice * (qty - 1)).toFixed(2);
      setTotalPrice(newTotalPrice);
    }
  };

  const handleCart = () => {
    const payload = {
      imgSrc: props.imgSrc,
      subProduct: props.subProduct,
      productName: props.productName,
      BestPrice: props.BestPrice,
      qty: qty,
      totalPrice: totalPrice,
    };

    fetch("http://localhost:5090/api/cards/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response from the API, if needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Card
        className="card1 mt-3"
        style={{ width: "15rem", minHeight: "600px" }}
      >
        <Link to="/productdisplay">
          <Card.Img
            className="cardimg"
            variant="top"
            src={props.imgSrc}
            style={{ height: "200px", objectFit: "fill" }}
          />
          <Card.Body>
            <Card.Title>{props.subProduct}</Card.Title>
            <Card.Text>{props.productName}</Card.Text>
          </Card.Body>
        </Link>

        <Card.Body>
          <div className="container w-100">
            <div className="quantity-counter">
              <button className="counter-btn" onClick={handleDecrement}>
                -
              </button>
              <div className="counter-value">{qty}</div>
              <button className="counter-btn" onClick={handleIncrement}>
                +
              </button>
            </div>
            <p className="mrptext">MRP: {props.mrp}</p>
            <p className="bestpricetext">Best Price: {props.BestPrice}</p>
            <p className="discounttext">Discount: {discount}%</p>
            <Card.Text className="totalprice">
              Total Price: {totalPrice}
            </Card.Text>
            <hr />
          </div>

          <button className="btnshop" onClick={handleCart}>
            Add to cart
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Catcard;
