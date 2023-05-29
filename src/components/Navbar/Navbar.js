
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo/ezgif-3-8c16a90147-removebg-preview.png'
import './Navbar.css'
function NavBar({ onCategoryPage = false, onExercisePage = false }) {
    return (
        <Navbar  className="navbar fixed-top">
                <Container>
                    <div>
                    <Navbar.Brand href="/" class="nav-link"> <img style={{ width: '65px' }} src={Logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Text class='logo-text'>Reacter Fitness</Navbar.Text>
                    </div>
                    <Nav class="nav-links">
                        {<>
                            {onCategoryPage ?
                                <><Nav.Link  class="nav-link" href="/">Home</Nav.Link>
                                    <Nav.Link class="nav-link" href="/categories">Categories</Nav.Link>
                                </> :
                                onExercisePage ?
                                    <><Nav.Link class="nav-link" href="/">Home</Nav.Link>
                                        <Nav.Link class="nav-link" href="/exercises">Exercises</Nav.Link>
                                    </> :
                                    <><Nav.Link class="nav-link" href="/">Home</Nav.Link>
                                        <Nav.Link class="nav-link" href="/categories">Exercises</Nav.Link>
                                        <Nav.Link class="nav-link" href="/about">About us</Nav.Link>
                                        <Nav.Link class="nav-link" href="/contact">Contact</Nav.Link></>}
                        </>
                        }
                        {/* <Nav.Link href="#home">Home</Nav.Link>

                        <Nav.Link href="#features">Exercises</Nav.Link>
                        
                        <Nav.Link href="#pricing">About us</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link> */}

                    </Nav>
                </Container>
            </Navbar>
            


    );

}

export default NavBar;
