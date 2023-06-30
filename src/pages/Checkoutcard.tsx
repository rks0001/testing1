import React, { useState, useContext } from "react";
import "../styles/Checkoutcard.css";
import cardContext from "../context/cards/cardContext";

const Checkoutcard = (props: any) => {
  const context = useContext(cardContext);
  const { val } = props;
  const { deleteCard } = context;

  return (
    <div
      className="allproduct card mt-3"
      style={{ width: "14rem", minHeight: "400px" }}
    >
      <div>
        <img className="smallimg" src={val.imgSrc} />
      </div>
      <div className="card-body">
        <div className="proname">{val.subProduct}</div>
        <div className="card-title">{val.productName}</div>
        <hr />
        <div className="container w-100">
          <div className="card-text">Total Price:{val.totalPrice}</div>
          <div className="card-text">Quantity:{val.qty}</div>
          <button
            className="deletebtn"
            onClick={() => {
              deleteCard(val._id);
            }}
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutcard;

// const handleDelete = async () => {
//   const ide = props.id;
//   try
//   {
// const response = await fetch(`http://localhost:5000/api/cards/deleteproduct/${ide}`, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//     "auth-token":localStorage.getItem('token')
//   },
// });
// const json = await response.json();
// console.log(json);

// console.log("Deleting the card" + ide);
// } catch (error) {
//   console.log("Error deleting the card:", error);
// }

// };

// return

// <h5 className="card-title"> {val.subProduct}</h5>
//   <p className="card-text">{val.productName}</p>
//   <p className="card-text"> Total Price:{val.totalPrice}</p>
//   <p className="card-text">Quantity:{val.qty}</p>
//   <button className="btn btn-success justify-center ms-2">delete</button>
