import { useEffect, useState } from "react";
import ExerciseCard from "../Cards/CardCategory";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../DivsReusable/CategoryDiv.css"


export default function CategoryDiv({ categoryName }) {

    const [shown,setShown] = useState(false)
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
                <><Card  className="clickable-card">
                    <Card.Img variant="top" src={categoryName.category_url} />
                    <Card.Body>
                    <Link key={categoryName.id} to={`/exercises/${categoryName.category}`} className="clickable">
                        <Card.Title className="card-title-design">
                            <span className="cat-style">{categoryName.category}</span>
                        
                        </Card.Title>
                        </Link >
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}

                    </Card.Body>
                </Card></>
            
                <p className="cate-div-paragraph">{shown ? `${categoryName.description}`: `${categoryName.description.substring(0,210)}`}
                <br/><br/><div><Link className="button1" onClick={()=> setShown(!shown)}>{shown ? "...See Less": "...See More" }</Link></div>
                </p>
                
            </div>
           
        </>
    )
}