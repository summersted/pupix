import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EpisodesList from "../episodesList/episodesList";
import { getEpisodes, getShowbyId } from "../../services";
import Preloader from "../preloader";
function Episodes() {
    const { id } = useParams();
    const [episodes, setEpisodes] = useState(null);
    const [show, setShow] = useState(null);
    useEffect(() => {
        getEpisodes(id).then(res => setEpisodes(res));
        getShowbyId(id).then(res => setShow(res))
    }, [id]);
    return (
        <main>
            {episodes ? <EpisodesList episodesList={episodes} show={show} /> : <Preloader />}
        </main>
    )
}
export default Episodes;