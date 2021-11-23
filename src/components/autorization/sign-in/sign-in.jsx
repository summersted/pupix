import '../auth.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Preloader from '../../pages/preloader';
import { registerQuerry } from '../../services';
import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';


export default function SignIn() {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

    const changeState = (stateName, newValue) => {
        stateName(newValue);
        setError('');
    }

    const handleSubmit = async (e) => {

        if (password !== passwordConfirm) {
            return setError("Passwords do not match");
        }
        if (email === null && password === null) {
            return setError("Enter your email and password");
        }
        try {
            setLoading(true);
            await registerQuerry({
                email,
                password
            }).then(res => {
                setLoading(false);
                if (res && !res.ok) {
                    setSuccessMessage("");
                    setError(res.message);
                }
                console.log(res);
                auth.login(res.token, res.userId);
                history.push('/');
            });
        } catch (err) {
            console.log(err);
            setError("Failed to create an account");
            setLoading(false);
            throw err;
        }
    };

    useEffect(() => {
        setLoaded(true);
    }, [loaded]);

    if (loaded) {
        return (
            <main>
                <Card style={{ maxWidth: "400px" }}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {successMessage && <Alert variant="success">{successMessage}</Alert>}
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => changeState(setEmail, e.target.value)} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => changeState(setPassword, e.target.value)} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="password-confirm">
                                <Form.Label>Password confirmation</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="confirm password"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)} />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                disabled={loading}
                                onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </main>
        );
    } else {
        return (
            <Preloader />
        )
    }
}