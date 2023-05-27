// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIconName } from '@fortawesome/free-solid-svg-icons';
// import Imagetest from "../../assets/facebook-app-symbol.png"
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>
        <div>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </div>
        <div>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </div>
      </div>

      <div>
        <p>
          All rights reserved FITNESS @2023{" "}
          <FontAwesomeIcon icon="fa-regular fa-copyright" />
        </p>
      </div>
      <div>
        <p>Quick links</p>
        <Link to="/exercises">Exercises</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
