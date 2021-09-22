import { Container,Image} from "react-bootstrap";
import img from '../../../images/pagenotfound.png';
import './pagenotfound.css';

function PageNotFound(params) {
    return(
        <Container fluid="sm">
            <Image src={img}/>
            <div className="vertical-separator"></div>
            <h2 className="pnf-h2">Page not found</h2>
        </Container>
    );
}
export default PageNotFound;