import '../auth.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/authContexts'
import { useHistory } from 'react-router';
import Preloader from '../../pages/preloader';


export default function SignIn() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const { signUp } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/redirect");
        } catch (err) {
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    ref={emailRef} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    ref={passwordRef} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="password-confirm">
                                <Form.Label>Password confirmation</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="confirm password"
                                    ref={passwordConfirmRef} />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={loading}>
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