import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo/ezgif-3-8c16a90147-removebg-preview.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
function NavBar({ onCategoryPage = false, onExercisePage = false, onAboutPage = false, onSchedulePage = false }) {
    return (
        <Navbar className="navbar">
            <Container>
                <div className='logo-name-section'>
                    <Navbar.Brand href="/" class="nav-link"> <img style={{ width: '65px' }} src={Logo} alt="Logo" /></Navbar.Brand>
                    <Link className='nav-link-style' to={`/`}><Navbar.Text class='logo-text'>Reacter Fitness</Navbar.Text></Link>
                </div>
                <Nav class="nav-links">
                    {<>
                        {onCategoryPage ?
                            <><Nav.Link class="nav-link " href="/">Home</Nav.Link>
                                <Nav.Link className="nav-focus" href="/categories">Exercises Categories</Nav.Link>
                                <Nav.Link class="nav-link" href="/exercises">Exercises</Nav.Link>
                                <Nav.Link class="nav-link" href="/schedule">Schedule</Nav.Link>
                                <Nav.Link class="nav-link" href="/about">About us</Nav.Link>

                            </> :
                            onExercisePage ?
                                <><Nav.Link class="nav-link" href="/">Home</Nav.Link>
                                    <Nav.Link class="nav-link " href="/categories">Exercises Categories</Nav.Link>
                                    <Nav.Link className="nav-focus" href="/exercises">Exercises</Nav.Link>
                                    <Nav.Link class="nav-link" href="/schedule">Schedule</Nav.Link>
                                    <Nav.Link class="nav-link" href="/about">About us</Nav.Link>
                                </> :
                                onAboutPage ?
                                    <><Nav.Link class="nav-link" href="/">Home</Nav.Link>
                                        <Nav.Link class="nav-link" href="/categories">Exercises Categories</Nav.Link>
                                        <Nav.Link class="nav-link" href="/exercises">Exercises</Nav.Link>
                                        <Nav.Link class="nav-link" href="/schedule">Schedule</Nav.Link>
                                        <Nav.Link className="nav-focus" href="/about">About us</Nav.Link>

                                    </> : onSchedulePage ? <><Nav.Link className="nav-link" class="nav-link" href="/">Home</Nav.Link>
                                        <Nav.Link class="nav-link " href="/categories">Exercises Categories</Nav.Link>
                                        <Nav.Link class="nav-link " href="/exercises">Exercises</Nav.Link>
                                        <Nav.Link className="nav-focus" href="/schedule">Schedule</Nav.Link>
                                        <Nav.Link class="nav-link" href="/about">About us</Nav.Link>
                                    </> :
                                        <><Nav.Link className="nav-focus" class="nav-link" href="/">Home</Nav.Link>
                                            <Nav.Link class="nav-link " href="/categories">Exercises Categories</Nav.Link>
                                            <Nav.Link class="nav-link " href="/exercises">Exercises</Nav.Link>
                                            <Nav.Link class="nav-link" href="/schedule">Schedule</Nav.Link>
                                            <Nav.Link class="nav-link" href="/about">About us</Nav.Link>
                                        </>
                        }
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