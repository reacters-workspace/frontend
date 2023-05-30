import { useEffect, useState } from "react";
import ExerciseCard from "../Cards/CardCategory";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../DivsReusable/CategoryDiv.css"


export default function CategoryDiv({ categoryName }) {

    const [shown, setShown] = useState(false)
    const [test1, settest1] = useState({})
    function changeStateVar() {
        settest1(categoryName)
    }
    useEffect(() => {
        changeStateVar()
    }, [])

    return (
        <>
            <div className="cate-parent-div">

                <><Card className="clickable-card-2">
                    <Link className="cate-linking" to={`/exercises/${categoryName.category}`}>
                        <Card.Img className="cate-card-image" variant="top" src={categoryName.category_url} />
                    </Link>
                </Card></>



                <p className="cate-div-paragraph"><h3 >{categoryName.category}</h3> {shown ? `${categoryName.description.substring(0, 256)}` : `${categoryName.description.substring(0, 200)}`}

                    <br /><br /><div><Link className="button1" onClick={() => setShown(!shown)}>{shown ? "See Less..." : "See More..."}</Link></div>
                </p>



            </div>

        </>
    )
}


