import { Navbar, Nav, Container, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavMenu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">PUPEX</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="#features">Features</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/search">
                                <Nav.Link href="#pricing">Search</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <ButtonGroup aria-label="Basic example">
                            <LinkContainer to="/login">
                                <Button variant="secondary">log in</Button>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Button variant="outline-secondary">sign in</Button>
                            </LinkContainer>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}