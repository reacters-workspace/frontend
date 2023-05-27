import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExerciseCard1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard1;