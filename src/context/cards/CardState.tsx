import React,{useState} from "react";
import cardContext from "./cardContext";

const CardState = (props) => {
 
  const CardsInitial = [];

  const [cards, setCards] = useState(CardsInitial);
  // get cards
   const getCards = async () => {
    let response = await fetch("http://localhost:5000/api/cards/fetchproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });

    const  json  = await response.json();
    console.log(json)
    setCards(json)
    
   
  };

  const deleteCard = async(id)=>{
    const response = await fetch(`http://localhost:5000/api/cards/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the card" + id);
    const newCards = cards.filter((value) => {
      return value._id !== id;
    });
    setCards(newCards);
    

  }


  return (
    <cardContext.Provider value={{cards,getCards,deleteCard}}>{props.children}</cardContext.Provider>
  );
};

export default CardState;
