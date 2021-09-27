import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {getShowbyId} from '../../services';
import DataTitle from '../dataTitle/dataTitle';
function Show() {
    const {id} = useParams();
    const [showData, setShowData] = useState(null);

    useEffect(()=> {
        getShowbyId(id).then( res => setShowData(res));
    }, [id]);

    return(
        <main>
            {showData ? <DataTitle data={showData}/> : 'loading'}
        </main>
    )
}
export default Show;