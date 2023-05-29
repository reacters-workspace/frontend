import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard1 from "../Cards/CardExerciseGif";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalExercise from "../ModalExercise/ModalExercise";
import "./ExercisePage.css";

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
      .get(`https://reacters-fitness.onrender.com/exercises`)
      .then((result) => {
        const exerciseDB = result.data.results;

        setExerciseData(exerciseDB);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div >
      <div className="header-in-exercises"><h2>{bodypart}</h2></div>

      <div>
        <Row className="ExercisePage">
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
  );
}
