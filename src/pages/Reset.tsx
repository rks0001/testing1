import React, { useState } from "react";
import { useContext } from "react";
import OTPContext from "../context2/OTPContext";
import { useNavigate } from "react-router-dom";
import "../styles/SetPassword.css";

export default function Reset() {
  const navigate = useNavigate();

  const context = useContext(OTPContext);
  // const { setPage } = context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changePassword = async () => {
    try {
      const response = await fetch(
        "http://localhost:5090/api/change/change_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      navigate("/recovered");
      console.log(data.message); // Password changed successfully
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="mainsecc">
      <div className="maindivvv">
        <form>
          <div>
            <div className="firsttext">Change Password</div>
            <div>
              <label className="thirdtext">Email:</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="thirdtext">Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button className="resetbtn" onClick={() => changePassword()}>
          Reset passwod
        </button>
      </div>
    </div>
  );
}
