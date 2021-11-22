import '../auth.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useEffect, useContext } from 'react';
import Preloader from '../../pages/preloader';
import { AuthContext } from '../../../context/authContext';
import { loginQuerry } from '../../services/service';
import { useHistory } from 'react-router';

export default function LogIn() {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const handleSubmit = async (e) => {
        try {
            setLoading(true);
            await loginQuerry({
                email,
                password
            }).then(res => {
                setData(res);
                setLoading(false);
                console.log(res);
                if (!res?.ok) {
                    setError(res?.message)
                    return
                }
                auth.login(res.token, res.userId);
                history.push('/');
            });

           
        } catch (error) {
            console.log(error);
            setLoading(false);
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
                        <h2 className="text-center mb-4">Log in</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
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