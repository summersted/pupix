import { useState } from 'react';
import { Navbar, Nav, Container, Button, ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../autorization/contexts/authContexts';

export default function NavMenu() {

    const { currentUser, logOut} = useAuth();
    const history = useHistory();
    const [error, setError] = useState();
    const handleLogOut = async (e) => {
        e.preventDefault();
        try {
            setError('');
            await logOut();
            history.push('/login');
        } catch (err) {
            setError("Failed to log out");
            throw error;
        }
    };

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
                            <LinkContainer to="/shows">
                                <Nav.Link href="#features">Features</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/search">
                                <Nav.Link href="#pricing">Search</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        {currentUser ? (
                            <ButtonGroup aria-label="Basic example">
                                {/* this page doesn`t work */}
                                <LinkContainer to="/profile">
                                    <Button variant="secondary">My profile</Button>
                                </LinkContainer>
                                {/* onclick listener must be here */}
                                <Button variant="outline-secondary" onClick={handleLogOut}>Log out</Button>
                            </ButtonGroup>

                        ) : (
                            <ButtonGroup aria-label="Basic example">
                                <LinkContainer to="/login">
                                    <Button variant="secondary">log in</Button>
                                </LinkContainer>
                                <LinkContainer to="/signin">
                                    <Button variant="outline-secondary">sign up</Button>
                                </LinkContainer>
                            </ButtonGroup>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}