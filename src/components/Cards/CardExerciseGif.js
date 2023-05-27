import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ExerciseCard1() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* we should pass an id below with the link to redirect the user to a specific card  */}
        <Link to="/categories">
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard1;
