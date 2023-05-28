import { useEffect, useState } from "react";
import ExerciseCard from "../Cards/CardCategory";
import { Button, Card } from "react-bootstrap";


export default function CategoryDiv({ categoryName }) {


    const [test1, settest1] = useState({})
    function changeStateVar() {
        settest1(categoryName)
    }
    useEffect(() => {
        changeStateVar()
    }, [])

    return (
        <>
            <div>
                <><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={categoryName.category_url} />
                    <Card.Body>
                        <Card.Title>{categoryName.category}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></>
            </div>
            <div>
                <p>{categoryName.description}</p>
            </div>
        </>
    )
}