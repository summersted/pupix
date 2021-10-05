import { useEffect, useRef, useState } from "react";
import { Container, Image, Tabs, Tab, InputGroup, Button, FormControl } from "react-bootstrap";
import './profile.css';
import { useAuth } from "../../autorization/contexts/authContexts";
import { db } from "../../../firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import LikedShowsList from "../likedShowsList";

function Profile() {
    const [key, setKey] = useState('info');
    const { currentUser } = useAuth();
    const [userObject, setUserObject] = useState();
    const [refresh, setRefresh] = useState(false);
    const nameRef = useRef();

    const getUserData = async () => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!");
        }
    }
    const updateUserData = async () => {
        try {
            await setDoc(doc(db, "users", currentUser.uid), {
                name: nameRef.current.value,
                LikedShowsIDs: userObject.LikedShowsIDs
            });
            setRefresh(true)
            nameRef.current.value = '';
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        getUserData().then(res => setUserObject(res))
    }, [refresh])

    return (
        <>
            <Container fluid="sm">
                <div className="avatar-wrapper">
                    <Image src="https://picsum.photos/200" rounded />
                </div>
                <div className="vertical-separator"></div>
                <div className="wrapper-list">
                    <h2>{userObject?.name}</h2>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="info" title="Information">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Your username: {userObject?.name}</InputGroup.Text>
                                <FormControl
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    ref={nameRef} />
                                <Button onClick={updateUserData}>Change</Button>
                            </InputGroup>
                        </Tab>
                        <Tab eventKey="Liked" title="Liked">
                            {userObject?.LikedShowsIDs ? (
                                <LikedShowsList showsList={userObject?.LikedShowsIDs} />
                            ) : 'loading'}
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}

export default Profile;