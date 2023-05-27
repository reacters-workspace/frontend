// import { Button } from "react-bootstrap";
// import { useEffect, useState } from "react";
import ButtonHero from "../Buttons/Button";
// import ExerciseCard from "../Cards/CardCategory";
// import ExerciseCard1 from "../Cards/CardExerciseGif";
import CategorySection from "../CategorySection/CategorySection";
// import axios from "axios";

export default function Main() {
  // For later
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetchedData();
  //   }, []);
  //   const fetchedData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_LOCAL_SERVER}/exercises`
  //       );
  //       setData(response.data);
  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  return (
    <>
      <div>
        <h1>Ya rab nnja7</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div>
        <ButtonHero />
        <CategorySection />
        {/* <ExerciseCard />
        <ExerciseCard1 />
        <ExerciseCard />
        <ExerciseCard /> */}
      </div>
    </>
  );
}
