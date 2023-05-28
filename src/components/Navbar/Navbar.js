import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo/ezgif-3-8c16a90147-removebg-preview.png'
function NavBar({ onCategoryPage = false, onExercisePage = false }) {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/"> <img style={{ width: '150px' }} src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {<>
                            {onCategoryPage ?
                                <><Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/categories">Categories</Nav.Link>
                                </> :
                                onExercisePage ?
                                    <><Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/exercises">Exercises</Nav.Link>
                                    </> :
                                    <><Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/categories">Exercises</Nav.Link>
                                        <Nav.Link href="#pricing">About us</Nav.Link>
                                        <Nav.Link href="#pricing">Contact</Nav.Link></>}





                        </>
                        }
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Exercises</Nav.Link>
                        
                        <Nav.Link href="#pricing">About us</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;