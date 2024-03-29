import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard1 from "../Cards/CardExerciseGif";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalExercise from "../ModalExercise/ModalExercise";
import "./ExercisePage.css";

import ListCategory from "../ListCategory/ListCategory";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/Navbar";




export default function ExercisePage({ withDynamic }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [singleExercise, setsingleExercise] = useState({});
  const [header, setheader] = useState("");

  const { bodypart } = useParams();

  const [exerciseData, setExerciseData] = useState([]);
  function fetchData() {
    axios
      .get(`https://reacters-fitness2.onrender.com/exercises`)
      .then((result) => {
        const exerciseDB = result.data.results;

        setExerciseData(exerciseDB);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div className="exer-container">
      <div className="header-container">
        <div className="header-in-category "></div>
      {bodypart !== undefined ? 
      <div className="header-in-exercises">
        <h2>{bodypart}</h2>
      </div> : 
      <div className="header-in-exercises">
        <h2>All Exercises</h2>
      </div>}
      </div>
      
      {/* <div className="header-in-exercises">
        <h2>{bodypart}</h2>
      </div> */}
      <div className="exercises-div">

        <div className="sad-noises">
          <div className='list-container'><ListCategory /></div>
          
        </div>
        <div className="ExercisePage">
          <Row>
            {exerciseData.map((item) => {
              if (withDynamic === false) {
                if (exerciseData.indexOf(item) >= 1000) {
                  return (
                    <ExerciseCard1
                      key={item.id}
                      exerciseData={item}
                      handleShow={handleShow}
                      setExerciseData={setsingleExercise}
                    />
                  );
                }
              } else if (exerciseData.indexOf(item) >= 1000) {
                if (item.bodyPart === bodypart) {
                  return (
                    <ExerciseCard1
                      key={item.id}
                      exerciseData={item}
                      handleShow={handleShow}
                      setExerciseData={setsingleExercise}
                    />
                  );
                }
              }
            })}
          </Row>
        </div>
        <ModalExercise
          show={show}
          handleClose={handleClose}
          singleExercise={singleExercise}
        />
      </div>

    </div>

  );
}
