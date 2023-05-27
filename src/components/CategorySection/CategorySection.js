import { Fragment } from "react";
import ExerciseCard from "../Cards/CardCategory";
// import ExerciseCard1 from "../Cards/CardExerciseGif";
import { Button, Row } from "react-bootstrap";
import "./CategorySection.css";
import { Link } from "react-router-dom";
const CategorySection = () => {
  return (
    <Fragment>
      <p className="main-para">Get a Perfect Body</p>
      <div className="container">
        <h2>Our Exercises</h2>
        <div className="cat-section">
          <Row>
            <ExerciseCard />
            {/* <ExerciseCard1 /> */}
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
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
