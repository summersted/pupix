import preloaderGif from '../../../images/preloader.gif';
import './preloader.css';

function Preloader() {
    return(
        <img src={preloaderGif} alt="loading..." className='preloader'/>
    )
}
export default Preloader;