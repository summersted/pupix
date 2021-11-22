import { useEffect } from "react";
import { addLikedshowId, delLikedshowId, getLikedShows } from "../../services/service";
import { Button } from "react-bootstrap";
import { useState } from "react";
const DataTitleLikeButton = ({ showId }) => {
    const _id = JSON.parse(localStorage.getItem('userData')).userId;
    const [likedShowsObject, setLikedShowsObject] = useState(null);
    const [rerender, setRerender] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getLikedShows({ _id }).then(res => setLikedShowsObject(res));
        setRerender(false);
    }, [rerender]);

    const doLikeShowHandler = async () => {
        try {
            setLoading(true);
            await addLikedshowId({ _id }, showId);
            setLoading(false)
            setRerender(true);
        } catch (error) {
            console.log(error);
        }
    }
    const unLikeShowHandler = async () => {
        try {
            setLoading(true);
            await delLikedshowId({ _id }, showId);
            setLoading(false)
            setRerender(true);
        } catch (error) {
            console.log(error);
        }
    }

    if (likedShowsObject?.likedShowsId.indexOf(showId) === -1) {
        return (
            <>
                <Button
                    variant="outline-primary"
                    className="ms-4"
                    onClick={doLikeShowHandler}
                    disabled={loading}>
                    Like
                </Button>
            </>
        );
    } else {
        return (
            <>
                <Button
                    variant="outline-danger"
                    className="ms-4"
                    onClick={unLikeShowHandler}
                    disabled={loading}>
                    Unlike
                </Button>
            </>
        );
    }
}

export default DataTitleLikeButton;