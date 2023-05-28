import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ExerciseCard1({ exerciseData, handleShow, setExerciseData }) {
  function handleOnClick() {
    handleShow();
    setExerciseData(exerciseData);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={exerciseData.gifUrl} />
      <Card.Body>
        <Card.Title>{exerciseData.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={handleOnClick}>
          Technique
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard1;
