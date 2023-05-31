import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardExerciseGif.css";

function ExerciseCard1({ exerciseData, handleShow, setExerciseData }) {
  function handleOnClick() {
    handleShow();
    setExerciseData(exerciseData);
  }
  return (
    <Card className="allCard" style={{ width: "22rem" }}>
      <Card.Img className="image1" variant="top" src={exerciseData.gifUrl} />

      <Card.Body>
        <Card.Text className="title1"><p>{exerciseData.name}</p></Card.Text>

        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Button
        className="show-btn w-50"
        variant="btn btn-dark"
        onClick={handleOnClick}
      >

        Show
      </Button>
    </Card>
  );
}

export default ExerciseCard1;
