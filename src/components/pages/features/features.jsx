import { useEffect } from 'react';
import { useState } from 'react';
import './features.css';
import { getShows } from '../../services';
import List from '../List';
import CustomPagination from '../customPagination/pagination';
import { Row } from 'react-bootstrap';

const Features = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    getShows(1).then(res => setData(res));
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="flex">
      <Row>
        <List moviesList={currentPosts} />
      </Row>
      <Row className="pagination-row">
        <CustomPagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          active={currentPage} />
      </Row>
    </main>
  );
}
export default Features;