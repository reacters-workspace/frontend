import { Fragment, useEffect, useState } from "react";

import ExerciseCard from "../Cards/CardCategory";
// import ExerciseCard1 from "../Cards/CardExerciseGif";
import { Button, Row } from "react-bootstrap";
import "./CategorySection.css";
import { Link } from "react-router-dom";
import axios from "axios";
const CategorySection = () => {
  const [fixedCard, setfixedCard] = useState([]);

  function fetchData() {
    axios
      .get(`https://reacters-fitness2.onrender.com/get-categories-db`)
      .then((result) => {
        const categoryDB = result.data.data;

        setfixedCard(categoryDB);
      });
  }
  const arrayOFThree = fixedCard.filter((result) => result.id >= 5);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>


      <div className="inner-container">
        <p className="main-para">Get a Perfect Body</p>
        <h2>Our Exercises</h2>
      </div>


      <div className="cat-section ">
        <Row className="banana col-12 " style={{ margin: "auto" }}>
          {arrayOFThree.map((item) => (
            <ExerciseCard
              className="card-style"
              fixedCard={item}
              key={item.id}
            />
          ))}
        </Row>
        <Link to="/categories">
          <button className="my-button">
            <span>more exercises</span>
          </button>
        </Link>
      </div>

    </Fragment>
  );
};
export default CategorySection;
