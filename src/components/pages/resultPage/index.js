import { useEffect, useState } from 'react';
import { Button, Container, Image, ListGroup } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { LinkContainer } from 'react-router-bootstrap';
import { getUserData } from '../../services';

function ResultPage() {
    const _id = JSON.parse(localStorage.getItem('userData')).userId;
    const [likedShowsObject, setLikedShowsObject] = useState(null);
    const [userData, setUserData] = useState(null);

    const [answers, setAnswers] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        getUserData({ _id }).then(res => setUserData(res));
        setAnswers(JSON.parse(localStorage.getItem('answers')))
        setValue()
        console.log(value);
    }, []);

    return (
        <>
            <Container fluid="sm">
                <div className="avatar-wrapper">
                    <Image src="https://picsum.photos/200" rounded />
                </div>
                <div className="vertical-separator"></div>
                <div className="wrapper-list" style={{ position: "relative" }}>
                    <h3 style={{ marginBottom: 50 }}>Examle Test</h3>
                    <h4>Result for: {userData?.user?.email}</h4>
                    <p>{answers.reduce((acc, curr) => curr ? acc + 1 : acc, 0)}/{answers.length}</p>
                    <div style={{ width: 400 }}>
                        <ProgressBar>
                            <ProgressBar
                                key={1}
                                animated
                                striped
                                variant="success"
                                now={100 / answers.length * answers.reduce((acc, curr) => curr ? acc + 1 : acc, 0)}
                                label={`${100 / answers.length * answers.reduce((acc, curr) => curr ? acc + 1 : acc, 0)}%`}
                            />
                            <ProgressBar 
                            animated
                            striped 
                            variant="danger" 
                            now={100 - 100 / answers.length * answers.reduce((acc, curr) => curr ? acc + 1 : acc, 0)}
                            key={3} />
                        </ProgressBar>
                    </div>
                    <LinkContainer to="/profile"
                        style={{ position: 'absolute', right: -150, bottom: 15 }}>
                        <Button variant="primary">Go to my Profile</Button>
                    </LinkContainer>
                </div>
            </Container>
        </>
    );
}

export default ResultPage;