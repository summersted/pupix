import { useEffect, useRef, useState } from "react";
import { Container, Image, Tabs, Tab, InputGroup, Button, FormControl } from "react-bootstrap";
import './profile.css';
import LikedShowsList from "../likedShowsList";
import { getLikedShows, getUserData } from "../../services";

function Profile({isAuthenticated}) {
    const _id = JSON.parse(localStorage.getItem('userData')).userId;
    const [likedShowsObject, setLikedShowsObject] = useState(null);
    const [userData, setUserData] = useState(null);

    const [key, setKey] = useState('info');
    const nameRef = useRef();

    useEffect(() => {
        getLikedShows({ _id }).then(res => setLikedShowsObject(res));
        getUserData({_id}).then(res => setUserData(res));
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
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="info" title="Information">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Your username: </InputGroup.Text>
                                <FormControl
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    ref={nameRef} />
                                <Button>Change</Button>
                            </InputGroup>
                        </Tab>
                        <Tab eventKey="Liked" title="Liked">
                        {likedShowsObject ? (
                                <LikedShowsList showsList={likedShowsObject.likedShowsId} />
                            ) : 'loading'}
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}

export default Profile;