import { useEffect } from 'react';
import { useState } from 'react';
import './homepage.css';
import { getShows } from '../../services';
import List from '../List';
import CustomPagination from '../customPagination/pagination';

const Homepage = () => {

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
      <List moviesList={currentPosts} />
      <CustomPagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        active={currentPage} />
    </main>
  );
}
export default Homepage;