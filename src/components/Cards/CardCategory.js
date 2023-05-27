import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExerciseCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-and-bodybuilding-youtube-thumbnail-design-template-4bf75ac296b4c72ff2221ff1ee2e8c25_screen.jpg?ts=1594926996" />
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

export default ExerciseCard;