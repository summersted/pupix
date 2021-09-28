import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SeasonList from "../seasonList";
import { getSeasons, getShowbyId } from "../../services";
import Preloader from "../preloader";

function Seasons() {
    const { id } = useParams();
    const [season, setSeason] = useState(null);
    const [show, setShow] = useState(null);
    useEffect(() => {
        getSeasons(id).then(res => setSeason(res));
        getShowbyId(id).then(res => setShow(res))
    }, [id]);
    return (
        <main>
            {season ? <SeasonList seasonList={season} show={show} /> : <Preloader />}
        </main>
    )
}
export default Seasons;