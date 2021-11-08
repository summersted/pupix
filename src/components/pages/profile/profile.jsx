import { useRef, useState } from "react";
import { Container, Image, Tabs, Tab, InputGroup, Button, FormControl } from "react-bootstrap";
import './profile.css';
// import LikedShowsList from "../likedShowsList";

function Profile() {
    const [key, setKey] = useState('info');
    const nameRef = useRef();

    return (
        <>
            <Container fluid="sm">
                <div className="avatar-wrapper">
                    <Image src="https://picsum.photos/200" rounded />
                </div>
                <div className="vertical-separator"></div>
                <div className="wrapper-list">
                    <h2>test</h2>
                    <hr />
                    <h2>test</h2>
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
                            {/* <LikedShowsList/> */}
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}

export default Profile;