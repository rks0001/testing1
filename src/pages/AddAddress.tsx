import React, { useState } from "react";
import "../styles/AddAddress.css";

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddressComponentProps {
  onSaveAddress: (address: Address) => void;
}

const AddressComponent: React.FC<AddressComponentProps> = ({
  onSaveAddress,
}) => {
  const [address, setAddress] = useState<Address>({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveAddress(address);
  };

  return (
    <div className="maindiv">
      <div className="address-container">
        <h2>Add Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save Address</button>
        </form>
      </div>
    </div>
  );
};

export default AddressComponent;
