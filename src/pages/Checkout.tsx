import React, { useState,useEffect,useContext } from "react";
import Checkoutcard from "./Checkoutcard";
import "../styles/Checkout.css";
import Payment from "../components/Payment";
import cardContext from "../context/cards/cardContext";



const Checkout = () => {


  const context = useContext(cardContext);

  const {cards,getCards} = context;

  useEffect(() => {
    getCards();
  }, []);




  return (
   <div>
      <div className="container">
            <h2>your card</h2>
            {cards?.map((val)=>{
                return <Checkoutcard key={val._id} val={val}
               
                
                
                />;
            })}
      </div>
   </div>
  );
};

export default Checkout;


 // <div className="sctn_main">
      
    //    <div className="container">
    //     <div className="row">
    //       {cards?.length > 0 ? (
    //         cards.map((data) => (
    //           <div
    //             key={data._id}
    //             className="col-12 col-md-6 col-lg-3  mx-2 mt-4"
    //           >
    //             <Checkoutcard
                  // productName={data.productName}
                  // subProduct={data.subProduct}
                  // imgSrc={data.imgSrc}
                  // totalPrice={data.totalPrice}
                  // qty= {data.qty}
                  // id ={data._id}
    //             />
    //           </div>
    //         ))
    //       ) : (
    //         <p>Loading...</p>
    //       )}
    //     </div>
    //   </div>




    //   <div className="payment">
      
        
         
    //      <Payment />
      
     
        
    //   </div>
    // </div>