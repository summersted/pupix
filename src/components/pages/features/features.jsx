import { useEffect } from 'react';
import { useState } from 'react';
import './features.css';
// import { getShows } from '../../services';
import List from '../List';
import CustomPagination from '../customPagination/pagination';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesData } from '../../../redux/actions/moviesActions';
import { getMoviesSelector } from '../../../redux/selectors/moviesSelector';
import Preloader from '../preloader';
import { isLoadingSelector } from '../../../redux/selectors/loadingSelector';

const Features = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);


  const dispatch = useDispatch();
  const data = useSelector(getMoviesSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getMoviesData());
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="flex">
        <Row>
          {isLoading ? <Preloader/> : <List moviesList={currentPosts} />}
        </Row>
        <Row className="pagination-row">
          <CustomPagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            active={currentPage} />
        </Row>
      </main>
    </>
  );
}
export default Features;