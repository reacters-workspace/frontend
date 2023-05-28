import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CardCategory.css";
function ExerciseCard({ fixedCard }) {
  return (
    <Card style={{ width: "18rem" }} className="clickable-card">
      <Card.Img variant="top" src={fixedCard.category_url} />
      <Card.Body>
        <Link
          to={`http://localhost:3000/exercises/${fixedCard.category}`}
          className="clickable"
        >
          <Card.Title className="card-title-design">
            <span className="cat-style">{fixedCard.category}</span>
          </Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          {/* <Link >
          <Button variant="primary">Show details</Button>
        </Link> */}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard;
