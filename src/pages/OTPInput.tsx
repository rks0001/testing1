import React from "react";
import { useState, useContext } from "react";
import { RecoveryContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import OTPContext from "../context2/OTPContext";

export default function VerificationPage() {
  const navigate = useNavigate();
  const context = useContext(OTPContext);
  const { email, otp } = context;
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    fetch("http://localhost:5090/send_recovery_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        OTP: otp,
        recipient_email: email,
      }),
    })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has successfully been sent to your email."))
      .then(() => setTimer(190))
      .catch(console.log);
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      navigate("/reset");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="mainsecc">
      <div>
        <div>
          <div>
            <div>
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form>
              <div>
                <div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <button onClick={() => verfiyOTP()} className="resetbtn">
                      Verify Account
                    </button>
                  </div>

                  <div>
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
