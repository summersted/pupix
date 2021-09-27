import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SeasonList from "../seasonList";
import { getSeasons, getShowbyId } from "../../services";
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
            {season ? <SeasonList seasonList={season} show={show} /> : 'loading'}
        </main>
    )
}
export default Seasons;