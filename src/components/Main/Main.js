// import { Button } from "react-bootstrap";
import ButtonHero from "../Buttons/Button";
import ExerciseCard from "../Cards/CardCategory";
import ExerciseCard1 from "../Cards/CardExerciseGif";
import Contact from "../Contact/Contact";

export default function Main() {
    return (
        <>
            <div>
                <h1>Ya rab nnja7</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div>
                <ButtonHero/>
                <ExerciseCard/>
                <ExerciseCard1/>
                <ExerciseCard/>
                <ExerciseCard/>
                <Contact />

                
            </div>
        </>
    )
}