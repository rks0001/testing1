import React from "react";
import "../styles/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import playstore from "../playstore.png";

const Footer = () => {
  return (
    <>
      <div className="footermainn">
        <Container>
          <Row className="mainrow">
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">COMPANY</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/aboutus">About Aim 24x7</Link>
              </Row>
              <Row className="rowitem">
                <Link to="#">Career</Link>
              </Row>
              <Row className="rowitem">
                <Link to="#">Contact</Link>
              </Row>
            </Col>
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">OUR POLICIES</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/termsandconditions">Terms and Condtions</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/privacypolicy">Privacy Policy</Link>
              </Row>

              <Row className="rowitem">
                <Link to="/shippingpolicy">Shipping and Delivery Policy</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/refundpolicy">
                  Return, Refund and Cancellation Policy
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/cookiepolicy">Cookie Policy</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/acceptableusepolicy">Acceptable Use Policy</Link>
              </Row>
            </Col>
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">SHOPPING</Link>
              </Row>
              <Row className="rowitem">
                <Link to="#">Shop by Categories</Link>
              </Row>
              <Row className="rowitem">
                <Link to="#">Offers/Coupons</Link>
              </Row>
              <Row className="rowitem">
                <Link to="#">FAQs</Link>
              </Row>
            </Col>
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">DOWNLOAD</Link>
              </Row>
              <Row className="rowwitem">
                <Link to="#">
                  <img className="playstoreimg" src={playstore} />
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
