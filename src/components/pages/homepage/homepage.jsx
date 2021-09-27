import { useEffect } from 'react';
import { useState } from 'react';
import './homepage.css';
import {getShows} from '../../services';
import List from '../List/list';

const Homepage = () => {

  const [data, setData] = useState(null);
  useEffect(() => {
    getShows(1).then(res => setData(res));
  }, []);
  return (
    <main className="flex">
      <List moviesList ={data}/>
    </main>
  );
}
export default Homepage;