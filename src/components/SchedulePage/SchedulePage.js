import { Button, Card, Row } from "react-bootstrap"
import ExerciseCard1 from "../Cards/CardExerciseGif"
import "../SchedulePage/SchedulePage.css"
import { useEffect, useState } from "react";
import ModalExercise from "../ModalExercise/ModalExercise";
import axios from "axios";
import ScheduleCard from "../Cards/ScheduleCard";
export default function SchedulePage({ onSchedulePage }) {
    const [singleExercise, setsingleExercise] = useState({});
    const [scheduleCards, setScheduleCards] = useState([]);
    const [onUpdate, setOnUpdate] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isUpdated, setisUpdated] = useState(false)

    const [exerciseData, setExerciseData] = useState([]);
    function handleOnClick() {
        handleShow();

    }
    function fetchData() {
        axios
            .get(`https://reacters-fitness2.onrender.com/schedule`)
            .then((result) => {
                console.log(result.data.data)
                const exerciseDB = result.data.data;

                setScheduleCards(exerciseDB);
                
            });
        console.log(isUpdated)
    }
    function deleteChangeState(id) {
        setScheduleCards(beforeDelete => beforeDelete.filter(Schedulefiltered => Schedulefiltered.id !== id))
    }
    useEffect(() => {
        fetchData();
    }, [isUpdated]);



    return (
        <>
            <div className="parent-schedule-div">
                <div className="parent-sub-div">
                    <h2 className="schedule-page-heading">Schedule</h2>
                    <div className="days-div">

                        <Row className="cards-in-schedule-page col-12" >
                            <h2>Sunday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'sunday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />

                                    )

                            })}



                            <h2>Monday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'monday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}


                            <h2>Tuesday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'tuesday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}


                            <h2>Wednesday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'wednesday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}



                            <h2>Thursday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'thursday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}


                            <h2>Friday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'friday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}


                            <h2>Saturday</h2>
                            {scheduleCards.map(item => {
                                if (item.week_day === 'saturday')
                                    return (

                                        <ScheduleCard setisUpdated={setisUpdated} setOnUpdate={setOnUpdate} setsingleExercise={setsingleExercise} handleShow={handleShow} singleCardData={item} key={item.id} deleteChangeState={deleteChangeState} />
                                    )

                            })}
                        </Row>
                    </div>
                    <ModalExercise
                        onUpdate={onUpdate}
                        show={show}
                        handleClose={handleClose}
                        singleExercise={singleExercise}
                        onSchedulePage={onSchedulePage}
                        setisUpdated={setisUpdated}
                    />
                </div>
            </div >
        </>
    )
}