import React from "react";
import error from "../error.jpg";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="mainnndiv">
        <img className="notfoundimg" src={error} />
        <div className="notfoundtxt">
          We're sorry, the page you requested could not be found <br /> please
          go back to the homepage
        </div>
      </div>
    </div>
  );
};

export default NotFound;
