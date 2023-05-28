import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonHero() {
  return (
    <>


      <Link to="/about">
        <Button variant="secondary">Learn more</Button>{' '}
      </Link>
      <Link to="/exercises">
        <Button variant="secondary">Get started</Button>{' '}
      </Link>


    </>
  );
}

export default ButtonHero;