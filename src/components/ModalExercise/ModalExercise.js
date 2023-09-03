import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalExercise.css';

import axios from 'axios';
function ModalExercise({ show, handleClose, singleExercise, onSchedulePage = false, onUpdate = false, setisUpdated }) {


  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setComment(e.target.value)

  }

  function SaveScheduleToDataBase() {

    // console.log(comment)
    if (comment !== "") {
      const obj = {
        bodypart: singleExercise.bodyPart,
        equipment: singleExercise.equipment,
        gifUrl: singleExercise.gifUrl,
        exercise_name: singleExercise.name,
        exercise_target: singleExercise.target,
        week_day: comment
      }
      axios.post(`https://reacters-fitness2.onrender.com/schedule`, obj).then(res => console.log(res.data)).catch(err => { console.log(err) })
      setComment('')
    }



  }
  function updateScheduleDay() {

    const updatedDay = {
      week_day: comment

    }
    if (comment !== "") {
      axios.put(`https://reacters-fitness2.onrender.com/update-schedule/${singleExercise.id}`, updatedDay).then(res => console.log(res.data)).catch(err => { console.log(err) })
      // console.log(updatedDay)
      setComment('')

    }

    handleClose()
    setisUpdated(true)



  }

  // console.log(comment)
  function saveAndExit() {
    SaveScheduleToDataBase()
    handleClose()
  }
  // console.log(singleExercise)
  // console.log(onSchedulePage)

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
                <Modal.Title>{singleExercise.name || singleExercise.exercise_name}</Modal.Title>
              </div>
            </Modal.Header>
          </div>

          <Modal.Body className='modal-body-test'>
            <div className='body'>
              <img src={singleExercise.gifUrl || singleExercise.gifurl} alt={singleExercise.name || singleExercise.exercise_name} width='300px' />
              <p><div className='div-test'>Targeted Muscle: <span>{singleExercise.target || singleExercise.exercise_target}</span> </div><br /> <div className='div-test'>Equipment: <span>{singleExercise.equipment}</span></div> <br /> <div className='div-test'>BodyPart: <span>{singleExercise.bodyPart || singleExercise.bodypart}</span> </div> </p>
            </div>
          </Modal.Body>


          <Modal.Footer className='modal-footer-test'>
            {/* <p><div className='div-test'>Targeted Muscle: <span>{singleExercise.target}</span> </div><br /> <div className='div-test'>Equipment: <span>{singleExercise.equipment}</span></div> <br /> <div className='div-test'>BodyPart: <span>{singleExercise.bodyPart}</span> </div> </p> */}

            {/* {console.log(onSchedulePage)} */}
            {onUpdate ? <>
              <form onChange={handleChange}>
                <select className='drop-down-list' name="cars" id="cars" >
                  <option selected="selected" >Select a Day</option>
                  <option value="sunday" onChange={handleChange} >Sunday</option>
                  <option value="monday" >Monday</option>
                  <option value="tuesday" >Tuesday</option>
                  <option value="wednesday" >Wednesday</option>
                  <option value="thursday" >Thursday</option>
                  <option value="friday" >Friday</option>
                  <option value="saturday" >Saturday</option>
                </select>
              </form>
              <Button className='button-modal-style' variant="secondary" onClick={updateScheduleDay}>
                Save
              </Button></>

              : onSchedulePage ? <>
                <Button className='button-modal-style' variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </> : <><Button className='button-modal-style' variant="secondary" onClick={handleClose}>
                Close
              </Button><Button variant="secondary" onClick={saveAndExit}>
                  Add to Schedule
                </Button>
                <form onChange={handleChange}>
                  <div className="dropdown-content">
                    <select className='drop-down-list' name="cars" id="cars" >

                      <option selected="selected" >Select a Day</option>
                      <option value="sunday" onChange={handleChange} >Sunday</option>
                      <option value="monday" >Monday</option>
                      <option value="tuesday" >Tuesday</option>
                      <option value="wednesday" >Wednesday</option>
                      <option value="thursday" >Thursday</option>
                      <option value="friday" >Friday</option>
                      <option value="saturday" >Saturday</option>

                    </select>
                  </div>
                </form></>}


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