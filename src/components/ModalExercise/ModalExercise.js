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
        <Modal centered={true} className='modal-container ' show={show} onHide={handleClose}>
          <div className='headerClose'>

            <Modal.Header closeButton>
              <div className='title'>
                <Modal.Title>{singleExercise.name}</Modal.Title>
              </div>
            </Modal.Header>
          </div>

          <Modal.Body className='modal-body-test'>
            <div className='body'>
              <img src={singleExercise.gifUrl} alt={singleExercise.name} width='300px' />
              <p><div className='div-test'>Targeted Muscle: <span>{singleExercise.target}</span> </div><br /> <div className='div-test'>Equipment: <span>{singleExercise.equipment}</span></div> <br /> <div className='div-test'>BodyPart: <span>{singleExercise.bodyPart}</span> </div> </p>
            </div>
          </Modal.Body>


          <Modal.Footer className='modal-footer-test'>
            {/* <p><div className='div-test'>Targeted Muscle: <span>{singleExercise.target}</span> </div><br /> <div className='div-test'>Equipment: <span>{singleExercise.equipment}</span></div> <br /> <div className='div-test'>BodyPart: <span>{singleExercise.bodyPart}</span> </div> </p> */}
            <Button className='button-modal-style' variant="secondary" onClick={saveAndExit}>
              Close
            </Button>

            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </Modal.Footer>

        </Modal>
      </div>
    </>
  );
}

export default ModalExercise;