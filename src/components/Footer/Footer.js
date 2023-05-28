// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIconName } from '@fortawesome/free-solid-svg-icons';
import Imagetest from "../../assets/facebook-app-symbol.png";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div class="footer-clean">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-3 item social">
                <Link to="#">
                  <i class="icon ion-social-facebook"></i>
                </Link>
                <Link to="#">
                  <i class="icon ion-social-instagram"></i>
                </Link>
              </div>

              <div class="col-sm-4 col-md-3 item">
                <p class="copyright">
                  All rights reserved by REACTERS &copy;2023{" "}
                </p>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon="fa-regular fa-envelope"
                    style={{ color: "#F13A11" }}
                  />{" "}
                  example@exam.com
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon="fa-solid fa-phone"
                    style={{ color: "#F13A11" }}
                  />{" "}
                  +962 7x xxx xxxx
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
