import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useHistory } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const useAuthButtons = (isAuthenticated) => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const handleSubmit = async () => {
        try {
            auth.logout();
            history.go(0);
        } catch (error) {
            console.log(error);
        }
    }
    if (isAuthenticated) {
        return (
            <ButtonGroup aria-label="Basic example">
                <LinkContainer to="/profile">
                    <Button variant="secondary">Profile</Button>
                </LinkContainer>
                <Button variant="outline-secondary"
                    type="button"
                    onClick={handleSubmit}>
                    log out
                </Button>
            </ButtonGroup>
        )
    } else {
        return (
            <ButtonGroup aria-label="Basic example">
                <LinkContainer to="/login">
                    <Button variant="secondary">log in</Button>
                </LinkContainer>
                <LinkContainer to="/signin">
                    <Button variant="outline-secondary">sign up</Button>
                </LinkContainer>
            </ButtonGroup>
        )
    }
}
export default useAuthButtons;