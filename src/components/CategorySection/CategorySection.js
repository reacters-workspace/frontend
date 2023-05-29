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
      .get(`https://reacters-fitness.onrender.com/get-categories-db`)
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
      <p className="main-para">Get a Perfect Body</p>
      <div className="container">
        <h2>Our Exercises</h2>
        <div className="cat-section col-12">
          <Row>
            {arrayOFThree.map((item) => (
              <ExerciseCard fixedCard={item} key={item.id} />
            ))}
          </Row>
          <Link to="/categories">
            <Button className="button">
              <span>more exercises</span>
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default CategorySection;
