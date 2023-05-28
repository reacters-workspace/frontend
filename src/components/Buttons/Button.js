import { Link } from 'react-router-dom';
import './Button.css'

function ButtonHero() {
  return (
    <div class='btn-container'>


      <Link to="/about">
        <button class='btn-learn-more font-s'  >Learn more</button>
      </Link>
      <Link to="/exercises">
        <button class='btn-get-start font-s'>Get started</button>
      </Link>


    </div>
  );
}

export default ButtonHero;