import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
function Contact() {
  return (
    <>
      <Form>
        <h2>Feel free to ask anything</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            className="mb-3 w-50 mx-auto d-block"
            type="text"
            placeholder="Name"
          />
          <Form.Control
            className="mb-3 w-50 mx-auto d-block"
            type="email"
            placeholder="Email"
          />
          <Form.Control
            className="mb-3 w-50 mx-auto d-block"
            as="textarea"
            rows={3}
            placeholder="Message"
          />
          <Button
            variant="light"
            type="submit"
            className="w-50 btn-outline-dark"
          >
            Send Message
          </Button>
        </Form.Group>
      </Form>
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
