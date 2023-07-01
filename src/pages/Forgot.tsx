import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPContext from "../context2/OTPContext";
import "../styles/SetPassword.css";

export default function Forgot() {
  const context = useContext(OTPContext);
  const { otp, setOTP, setEmail, email } = context;

  const navigate = useNavigate();

  function navigateToOtp() {
    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);

      fetch("http://localhost:5090/send_recovery_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          OTP,
          recipient_email: email,
        }),
      })
        .then(() => navigate("/otp"))
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }
  return (
    <div className="mainsecc">
      <div>
        <div>
          <form>
            <div>
              <div className="firsttext">Enter mail for Password Reset</div>
            </div>
            <div>
              <div className="emaillabel">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className=" m-2 mx-3 my-3 "
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <Link to="#" onClick={navigateToOtp} className="resetbtn">
                Send OTP
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
