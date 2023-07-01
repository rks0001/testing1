import React from "react";
import "../styles/SetPassword.css";
import { Link } from "react-router-dom";

export default function Recovered() {
  return (
    <div className="mainsecc">
      <section>
        <div>
          <div>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="recoveredimg"
                alt="Sample image"
              />
            </div>
            <div>
              <form>
                <div>
                  <span className="firsttext">Password succesfully set </span>
                </div>

                <div className="secondtext">
                  <span>
                    Go back to
                    <button className="homebtn">
                      <Link to="/">HOME</Link>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
