import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useAuth } from '../contexts/authContexts'
import Preloader from '../../pages/preloader';
import { useEffect} from 'react';
import { useHistory } from 'react-router';

function SaveUserData() {
    const history = useHistory();
    const { currentUser } = useAuth();

    const addUserData = async (uid) => {
        try {
            await setDoc(doc(db, "users", uid), {
                LikedShowsIDs: [],
                name: 'no username',
                test: 'testfield'
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        addUserData(currentUser.uid);
    },[]);
    
    history.push('/')
    return(
        <Preloader />
    )
}

export default SaveUserData;