import '../auth.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/authContexts'
import { useHistory } from 'react-router';
import Preloader from'../../pages/preloader';


export default function LogIn() {

    const [loaded, setLoaded] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const { logIn } = useAuth();





    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (err) {
            setError("Failed to log in");
            setLoading(false);
            // throw err;
        }
    };

    useEffect(() => {
        setLoaded(true);
    }, []);
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
            <Preloader/>
        )
    }
}