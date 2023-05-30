import { Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import "../ListCategory/ListCategory.css"
import { useEffect, useState } from 'react';

function ListCategory() {
    const { bodypart } = useParams();

    return (
        <>
            {bodypart !== undefined ? <ListGroup className='ul-cate-list' >

                <ListGroup.Item as="li" className='list-header-style' >Categories Table</ListGroup.Item>
                <Link className='list-style' to="/exercises/back"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"  ><span id="back">Back</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/cardio"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="cardio">Cardio</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/chest"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="chest">Chest</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower arms"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="lower-arms">Lower Arms</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower legs"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="lower-legs">Lower Legs</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/neck"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="neck">Neck</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/shoulders"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="shoulders">Shoulders</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper arms"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="upper-arms">Upper Arms</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper legs"><ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="upper-legs">Upper Legs</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/waist"> <ListGroup.Item className={bodypart.split(" ").join("")} as="li"><span id="waist">Waist</span></ListGroup.Item></Link>

            </ListGroup> : <ListGroup className='ul-cate-list' >

                <ListGroup.Item as="li" className='list-header-style' >Categories Table</ListGroup.Item>
                <Link className='list-style' to="/exercises/back"><ListGroup.Item as="li"  ><span id="back">Back</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/cardio"><ListGroup.Item as="li"><span id="cardio">Cardio</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/chest"><ListGroup.Item as="li"><span id="chest">Chest</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower arms"><ListGroup.Item as="li"><span id="lower-arms">Lower Arms</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/lower legs"><ListGroup.Item as="li"><span id="lower-legs">Lower Legs</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/neck"><ListGroup.Item as="li"><span id="neck">Neck</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/shoulders"><ListGroup.Item as="li"><span id="shoulders">Shoulders</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper arms"><ListGroup.Item as="li"><span id="upper-arms">Upper Arms</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/upper legs"><ListGroup.Item as="li"><span id="upper-legs">Upper Legs</span></ListGroup.Item></Link>
                <Link className='list-style' to="/exercises/waist"> <ListGroup.Item as="li"><span id="waist">Waist</span></ListGroup.Item></Link>

            </ListGroup>}


        </>
    );
}

export default ListCategory;