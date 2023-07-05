import React, { useState } from "react";
import "../styles/Searchbar.css";

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

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
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

  return (
    <div className="search-bar">
      <div className="searchbarcon">
        <div className="pinsearch">
          <select
            className="pinsearch1"
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
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleQueryChange}
          />
        </div>
        <div>
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from "react";
// import "../styles/Searchbar.css";
// interface SearchBarProps {
//   onSearch: (searchTerm: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <div className="search-bar-main">
//       <div className="search-bar-container">
//         <span className="deliverto">Deliver to </span>
//         <div>
//           <input
//             className="search"
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <button className="searchbtn" onClick={handleSearch}>
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
