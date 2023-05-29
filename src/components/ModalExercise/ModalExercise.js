import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalExercise.css';
function ModalExercise({ show, handleClose, singleExercise }) {
  function saveAndExit() {
    handleClose()
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <div className='cardModal'>
        <Modal show={show} onHide={handleClose}>
          <div className='headerClose'>

            <Modal.Header closeButton>
              <div className='title'>
                <Modal.Title>{singleExercise.name}</Modal.Title>
              </div>
            </Modal.Header>
          </div>
          <div className='body'>
            <Modal.Body>

              <img src={singleExercise.gifUrl} alt={singleExercise.name} width='100%' />

            </Modal.Body>
          </div>
          <div className='footer'>
            <Modal.Footer>
              <div className='footer-close-button'>
                <Button variant="secondary" onClick={saveAndExit}>
                  Close
                </Button>
              </div>
              {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalExercise;