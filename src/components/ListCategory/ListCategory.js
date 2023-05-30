import { Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import "../ListCategory/ListCategory.css"

function ListCategory() {
    const { bodypart } = useParams();
    return (
        <>
            <ListGroup className='ul-cate-list' >

                <ListGroup.Item as="li" className='list-header-style' >Categories Table</ListGroup.Item>
                <Link className='list-style' to="/exercises/back"><ListGroup.Item className="test-group-item" as="li"  >Back</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/cardio"><ListGroup.Item className="test-group-item" as="li">Cardio</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/chest"><ListGroup.Item className="test-group-item" as="li">Chest</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower arms"><ListGroup.Item className="test-group-item" as="li">Lower arms</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower legs"><ListGroup.Item className="test-group-item" as="li">Lower legs</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/neck"><ListGroup.Item className="test-group-item" as="li">Neck</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/shoulders"><ListGroup.Item className="test-group-item" as="li">Shoulders</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper arms"><ListGroup.Item className="test-group-item" as="li">Upper arms</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper legs"><ListGroup.Item className="test-group-item" as="li">Upper legs</ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/waist"> <ListGroup.Item className="test-group-item" as="li">Waist</ListGroup.Item></Link>

            </ListGroup>

        </>
    );
}

export default ListCategory;