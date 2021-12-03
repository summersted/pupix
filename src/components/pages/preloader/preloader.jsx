import preloaderGif from '../../../images/preloader.gif';
import './preloader.css';

function Preloader() {
    return(
        <div className='preloader'>
            <img src={preloaderGif} alt="loading..."/>
        </div>
        
    )
}
export default Preloader;