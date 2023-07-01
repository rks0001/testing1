// otpContext.js

import React, { createContext, useState } from "react";

const OTPContext = createContext();

export const OtpProvider = ({ children }) => {
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");

  const contextValue = { otp, setOTP, email, setEmail };

  return (
    <OTPContext.Provider value={contextValue}>{children}</OTPContext.Provider>
  );
};

export default OTPContext;
