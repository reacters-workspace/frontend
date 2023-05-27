import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
function Contact() {
  return (
    <Form>
        <h2>Feel free to ask anything</h2> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control  className="mb-3 w-50 mx-auto d-block" type="text" placeholder="Name" />
        <Form.Control  className="mb-3 w-50 mx-auto d-block" type="email" placeholder="Email" />
        <Form.Control  className="mb-3 w-50 mx-auto d-block" as="textarea" rows={3} placeholder='Message' />
        <Button variant="dark" type="submit" className='w-50'>Send Message</Button>
      </Form.Group>
    </Form>
  );
}

export default Contact;