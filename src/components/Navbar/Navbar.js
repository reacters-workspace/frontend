import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo/ezgif-3-8c16a90147-removebg-preview.png'
function NavBar() {
    return (
        <div className='h-20'>
            <Navbar bg="dark" variant="light">
                <Container>
                    <Navbar.Brand href="#home"> <img style={{width: '100px'}} src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">Exercises</Nav.Link>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;