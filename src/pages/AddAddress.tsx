import React, { useState } from "react";
import AddressModal from "./AddressModal";
import "../styles/AddAddress.css";

const AddAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveAddress = (address: string) => {
    // Perform any necessary logic with the address, such as saving it in state or making an API request
    console.log("Address:", address);
    handleClose();
  };

  return (
    <div className="addressdiv">
      <div className="addresstext">Address</div>
      <div className="outputtext">KB Road, Lakhimpur, Assam, 787052</div>
      <div className="savebtndiv">
        <button className="savebtn" onClick={handleOpen}>
          Add Address
        </button>
      </div>
      {isModalOpen && (
        <AddressModal onClose={handleClose} onSave={handleSaveAddress} />
      )}
    </div>
  );
};

export default AddAddress;
