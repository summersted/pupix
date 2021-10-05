import { db } from "../../../firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../../autorization/contexts/authContexts";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function DataTitleButtons({ showId }) {
    const { currentUser } = useAuth();
    const [userObject, setUserObject] = useState();
    const [refresh, setRefresh] = useState(false);

    const getUserData = async () => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!");
        }
    }

    const saveToLiked = async () => {
        try {
            if (userObject.LikedShowsIDs) {
                await setDoc(doc(db, "users", currentUser.uid), {
                    name: userObject.name,
                    LikedShowsIDs: [...userObject.LikedShowsIDs, showId]
                });
            } else {
                await setDoc(doc(db, "users", currentUser.uid), {
                    name: userObject.name,
                    LikedShowsIDs: [showId]
                });
            }
            setRefresh(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const removeFromLiked = async () => {
        const index = userObject.LikedShowsIDs.indexOf(showId);
        const likedShowsArray = userObject.LikedShowsIDs;
        try {
            if (userObject.LikedShowsIDs) {
                await setDoc(doc(db, "users", currentUser.uid), {
                    name: userObject.name,
                    LikedShowsIDs: [
                        ...likedShowsArray.slice(0,index),
                        ...likedShowsArray.slice(index+1)]
                });
            }
            setRefresh(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    useEffect(() => {
        getUserData().then(res => setUserObject(res))
        setRefresh(false)
    }, [refresh])
    return (
        <>
            {currentUser ? (
                <>
                    <LinkContainer to={`/shows/${showId}/seasons`}>
                        <Button variant="outline-dark">Show seasons</Button>
                    </LinkContainer>
                    <LinkContainer to={`/shows/${showId}/episodes`}>
                        <Button
                            variant="outline-dark"
                            className="ms-4">
                            Show episodes
                        </Button>
                    </LinkContainer>
                    {userObject ? (
                        <>
                            {userObject?.LikedShowsIDs.includes(showId) ? (
                                <Button
                                    variant="outline-dark"
                                    className="ms-4"
                                    onClick={removeFromLiked}>
                                    Unlike
                                </Button>
                            ) : (
                                <Button
                                    variant="outline-dark"
                                    className="ms-4"
                                    onClick={saveToLiked}>
                                    Like
                                </Button>
                            )}
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </>
            ) : (
                <>
                    <LinkContainer to={`/shows/${showId}/seasons`}>
                        <Button variant="outline-dark">Show seasons</Button>
                    </LinkContainer>
                    <LinkContainer to={`/shows/${showId}/episodes`}>
                        <Button
                            variant="outline-dark"
                            className="ms-4">
                            Show episodes
                        </Button>
                    </LinkContainer>
                </>)}
        </>
    )
}
export default DataTitleButtons;