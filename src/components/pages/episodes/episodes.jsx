import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EpisodesList from "../episodesList/episodesList";
import { getEpisodes, getShowbyId } from "../../services";
import Preloader from "../preloader";
import CustomPagination from "../customPagination/pagination";
function Episodes() {
    const { id } = useParams();
    const [episodes, setEpisodes] = useState([]);
    const [show, setShow] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    useEffect(() => {
        getEpisodes(id).then(res => setEpisodes(res));
        getShowbyId(id).then(res => setShow(res))
    }, [id]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = episodes.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main>
            {episodes ? (
                <>
                    <CustomPagination
                        postsPerPage={postsPerPage}
                        totalPosts={episodes.length}
                        paginate={paginate}
                        active={currentPage} />
                    <EpisodesList episodesList={currentPosts} show={show} />

                </>
            ) : <Preloader />}
        </main>
    )
}
export default Episodes;