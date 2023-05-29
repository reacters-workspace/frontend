
import Form from 'react-bootstrap/Form';
import './Contact.css'
import axios from 'axios';

function Contact() {

  const handleSubmit = () => {

    const data = {

    };

    fetch('https://reacters-fitness.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Movie added to favorites:', result);

      })
      .catch((error) => {
        console.error('Error adding movie to favorites:', error);
        // Handle error or display an error message to the user
      });
  };
  return (
    <>
      <div className='FormDiv'>
        <Form class='contact-form'>
          <h2>Feel free to ask anything</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control
              className="mb-3 w-40 mx-auto d-block"
              type="text"
              placeholder="Name"
            />
            <Form.Control
              className="mb-3 w-40 mx-auto d-block"
              type="email"
              placeholder="Email"
            />
            <Form.Control
              className="mb-3 w-40 mx-auto d-block"
              as="textarea"
              rows={3}
              placeholder="Message"
            />
            <button class="contact-btn" type="submit" onClick={handleSubmit}>Send Message</button>



          </Form.Group>
        </Form>
      </div>
      {/* <div className="mb-3">
        <FontAwesomeIcon
          icon="fa-regular fa-envelope"
          style={{ color: "#ffae00" }}
        />{" "}
        example@exam.com
      </div>
      <div className="mb-3">
        <FontAwesomeIcon
          icon="fa-solid fa-phone"
          style={{ color: "#ffae00" }}
        />{" "}
        +962 7x xxx xxxx
      </div> */}
    </>

  );
}

export default Contact;
