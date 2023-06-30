import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Prescription from "./pages/Prescription";
import CategoriesMain from "./pages/CategoriesMain";
import Alert from "./components/Alert";
import CardState from "./context/cards/CardState";
import ForgotPassword from "./pages/Forgotpassword";
import PasswordReset from "./pages/PasswordReset";
import Policies from "./pages/Policies";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandCondition from "./pages/TermsandCondition";
import RefundPolicy from "./pages/RefundPolicy";
import AddAddress from "./pages/AddAddress";
import ShippingPolicy from "./pages/ShippingPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";

function App() {
  return (
    <>
      <CardState>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoriesMain />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/forgotpassword/:id/:token"
              element={<ForgotPassword />}
            />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsandCondition />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="/addadress" element={<AddAddress />} />
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route
              path="/acceptableusepolicy"
              element={<AcceptableUsePolicy />}
            />
          </Routes>
          <Footer />
        </div>
      </CardState>
    </>
  );
}

export default App;
