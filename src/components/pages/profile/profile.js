import { useState } from "react";
import {Container , Image, Tabs,Tab } from "react-bootstrap";
import './profile.css';
function Profile() {
    const [key, setKey] = useState('home');

    return(
        <>
            <Container fluid="sm">
                <Image src="https://picsum.photos/200" rounded />
                <div className="vertical-separator"></div>
                <div className="wrapper-list">
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                        {/* i will use here another components as profile tabs
                        but now it`s <p> tags */}
                        <Tab eventKey="info" title="Information">
                            <p>Information</p>
                        </Tab>
                        <Tab eventKey="Liked" title="Liked">
                            <p>Liked</p>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}

export default Profile;