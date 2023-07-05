import React, { useState } from "react";
import "../styles/AddressModal.css";

interface AddressModalProps {
  onClose: () => void;
  onSave: (address: string) => void;
}

interface SearchBarProps {
  onSearch: (pincode: string, query: string) => void;
}

const validPincodes = [
  "786126",
  "786145",
  "786146",
  "786147",
  "786148",
  "786150",
  "786151",
  "786152",
  "786153",
  "786154",
  "786155",
  "786156",
  "786157",
  "786158",
  "786159",
  "786160",
  "786170",
  "786171",
  "786173",
  "786174",
  "786179",
  "786181",
  "786182",
  "786183",
  "786187",
  "786188",
  "786189",
  "786190",
  "786601",
];

const AddressModal: React.FC<AddressModalProps & SearchBarProps> = ({
  onClose,
  onSave,
  onSearch,
}) => {
  const [pincode, setPincode] = useState("");
  const [query, setQuery] = useState("");

  const handlePincodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPincode = event.target.value;
    setPincode(selectedPincode);

    if (!validPincodes.includes(selectedPincode)) {
      alert("Select a valid pincode");
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(pincode, query);
  };

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
          <select
            className="pinsearch11"
            value={pincode}
            onChange={handlePincodeChange}
          >
            <option value="">Select Pincode</option>
            {validPincodes.map((pin) => (
              <option key={pin} value={pin}>
                {pin}
              </option>
            ))}
          </select>
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
