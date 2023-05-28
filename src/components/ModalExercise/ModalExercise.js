import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalExercise({ show, handleClose, singleExercise }) {
  function saveAndExit() {
    handleClose()
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleExercise.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <img src={singleExercise.gifUrl} alt={singleExercise.name} width='100%' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={saveAndExit}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExercise;