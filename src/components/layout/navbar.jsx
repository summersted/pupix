import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuthButtons from './useAuthButtons';
export default function NavMenu({isAuthenticated}) {
    const authButtons = useAuthButtons(isAuthenticated);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">TESTIX</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/users">
                                <Nav.Link href="#users">Users</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tests">
                                <Nav.Link href="#tests">Tests</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/questions">
                                <Nav.Link href="#questions">Questions</Nav.Link>
                            </LinkContainer>
                        </Nav>
                            {authButtons}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}