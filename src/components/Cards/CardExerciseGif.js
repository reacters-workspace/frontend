import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardExerciseGif.css";

function ExerciseCard1({ exerciseData, handleShow, setExerciseData }) {
  function handleOnClick() {
    handleShow()
    setExerciseData(exerciseData)

  }
  return (
    <Card className='allCard' style={{ width: '18rem' }}>

      <Card.Img className='image1' variant="top" src={exerciseData.gifUrl} />
     
      <Card.Body >

        <Card.Text className='title1'>{exerciseData.name}</Card.Text>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button className='show-btn w-100' variant='btn btn-dark' onClick={handleOnClick}>Show</Button>
      </Card.Body>

    </Card>
  );
}

export default ExerciseCard1;