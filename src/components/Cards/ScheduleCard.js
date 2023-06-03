import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Cards/ScheduleCard.css"
import { useState } from 'react';

function ScheduleCard({ singleCardData, deleteChangeState, handleShow, setsingleExercise, setOnUpdate, setisUpdated }) {

    function onShowClick() {
        setOnUpdate(false)
        setsingleExercise(singleCardData)
        handleShow()
    }

    function ChangeStateToUpdate() {
        setsingleExercise(singleCardData)
        setOnUpdate(true)
        handleShow()
        setisUpdated(false)
    }

    // function updateScheduleDay() {
    //     const updatedDay = {
    //         week_day: ""
    //     }
    //     axios.put(`https://reacters-fitness.onrender.com/update-schedule/${singleCardData.id}`, updatedDay)


    // }
    function deleteSchedule() {
        axios.delete(`https://reacters-fitness.onrender.com/deleteSchedule/${singleCardData.id}`).then(returned => console.log(returned))
            .catch(err => console.log(err))

        deleteChangeState(singleCardData.id)
    }
    return (
        <Card className='allCard' style={{ width: '18rem', margin: "0" }}>
            <Card.Img className="image1" variant="top" src={singleCardData.gifurl} />
            <Card.Body className='card-body-schedule'>
                <Card.Text className="title1">{singleCardData.bodypart}</Card.Text>
                <Card.Title className="title1">
                    {singleCardData.exercise_name}
                </Card.Title>
                <Button className="show-btn w-50"
                    variant="btn btn-dark" onClick={onShowClick}>Show</Button>
                <div className='schedule-buttons'>
                    <Button className="change-button" onClick={ChangeStateToUpdate} variant="secondary">Change Day</Button>
                    <Button variant="danger" onClick={deleteSchedule}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ScheduleCard;