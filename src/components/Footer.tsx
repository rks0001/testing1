import React from "react";
import "../styles/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import playstore from "../playstore.png";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

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
                <Link to="/aboutus" onClick={handleLinkClick}>
                  About Aim 24x7
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/notfound" onClick={handleLinkClick}>
                  Career
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/help" onClick={handleLinkClick}>
                  Help
                </Link>
              </Row>
            </Col>
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">OUR POLICIES</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/termsandconditions" onClick={handleLinkClick}>
                  Terms and Condtions
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/privacypolicy" onClick={handleLinkClick}>
                  Privacy Policy
                </Link>
              </Row>

              <Row className="rowitem">
                <Link to="/shippingpolicy" onClick={handleLinkClick}>
                  Shipping and Delivery Policy
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/refundpolicy" onClick={handleLinkClick}>
                  Return, Refund and Cancellation Policy
                </Link>
              </Row>
              <Row className="rowitem" onClick={handleLinkClick}>
                <Link to="/cookiepolicy">Cookie Policy</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/acceptableusepolicy" onClick={handleLinkClick}>
                  Acceptable Use Policy
                </Link>
              </Row>
            </Col>
            <Col>
              <Row className="rowwitemhead">
                <Link to="#">SHOPPING</Link>
              </Row>
              <Row className="rowitem">
                <Link to="/categories" onClick={handleLinkClick}>
                  Shop by Categories
                </Link>
              </Row>
              <Row className="rowitem">
                <Link to="/notfound" onClick={handleLinkClick}>
                  Offers/Coupons
                </Link>
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
