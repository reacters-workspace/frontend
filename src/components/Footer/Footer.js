// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIconName } from '@fortawesome/free-solid-svg-icons';
import Imagetest from "../../assets/facebook-app-symbol.png";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="inner-footer">
          {/* <!--  for company name and description --> */}
          <div className="footer-items">
            <Link to="#" className="footer-heading">
              <h1>
                REACTERS <span className="fitness-style">FITNESS</span>
              </h1>
            </Link>
            <p>Your best guide to reshape a healthy body</p>
          </div>

          {/* <!--  for quick links  --> */}
          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/exercises">
                <li>Exercises</li>
              </Link>
              <Link to="/categories">
                <li>Categories</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
          </div>

          {/* <!--  for some other links --> */}
          {/* <div className="footer-items">
            <h3>Recipes</h3>
            <div className="border1"></div>
            <ul>
              <a href="#">
                <li>Indian</li>
              </a>
              <a href="#">
                <li>Chinese</li>
              </a>
              <a href="#">
                <li>Mexican</li>
              </a>
              <a href="#">
                <li>Italian</li>
              </a>
            </ul>
          </div> */}

          {/* <!--  for contact us info --> */}
          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                LTUC Amman-Jordan
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; (06)
                400 0700
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                &nbsp; reacters.default@gmail.com
              </li>
            </ul>

            {/* <!--   for social links --> */}
            <div className="social-media">
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* <!--   Footer Bottom start  --> */}
        <div className="footer-bottom">Copyright &copy; REACTERS 2023</div>
      </div>
    </>
  );
}
