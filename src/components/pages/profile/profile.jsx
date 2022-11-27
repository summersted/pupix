import { useEffect, useRef, useState } from "react";
import { Container, Image, Tabs, Tab, InputGroup, Button, FormControl, ListGroup } from "react-bootstrap";
import './profile.css';
import LikedShowsList from "../likedShowsList";
import { getLikedShows, getUserData } from "../../services";
import { LinkContainer } from "react-router-bootstrap";

function Profile({ isAuthenticated }) {
    const _id = JSON.parse(localStorage.getItem('userData')).userId;
    const [likedShowsObject, setLikedShowsObject] = useState(null);
    const [userData, setUserData] = useState(null);

    const [key, setKey] = useState('info');

    useEffect(() => {
        getUserData({ _id }).then(res => setUserData(res.user));
    }, []);
    return (
        <>
            <Container fluid="sm">
                <div className="avatar-wrapper">
                    <Image src="https://picsum.photos/200" rounded />
                </div>
                <div className="vertical-separator"></div>
                <div className="wrapper-list">
                    <h2>{userData?.user?.email}</h2>
                    <h3>Tests assigned to me:</h3>
                    <ListGroup>
                        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                            <span>Examle Test</span>
                            <LinkContainer to={`/passing-test/${userData?.asignedTestsId[0] }`}>
                                <Button variant="primary">start test</Button>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Container>
        </>
    );
}

export default Profile;