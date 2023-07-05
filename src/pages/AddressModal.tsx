import React, { useState } from "react";
import "../styles/AddressModal.css";

interface AddressModalProps {
  onClose: () => void;
  onSave: (address: string) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({ onClose, onSave }) => {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(address);
    setAddress("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Address</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Area, Street, Sector, Village"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Landmark"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="City"
            value={address}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="State"
            value={address}
            onChange={handleAddressChange}
          />
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
