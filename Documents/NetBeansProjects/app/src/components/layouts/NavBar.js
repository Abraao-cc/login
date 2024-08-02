import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
export default function NavBar() {
    return(
            <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" Link to="/" >Home</Nav.Link>            
            
                        <Nav.Link Link href="/quem-somos" to="/quem-somos" className="nav-item">Quem Somos</Nav.Link>
            
                        <Nav.Link href="/contato" Link to="/contato">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
            </>
            );
};