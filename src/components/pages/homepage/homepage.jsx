import { useEffect } from "react";
import { useState } from "react";
import { Carousel, Row, Col, Container, Image } from "react-bootstrap";
import { getShowbyId } from "../../services";
import './homepage.css';


function Homepage() {
    const [index, setIndex] = useState(0);
    const [showsData, setShowsData] = useState([])
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const showsList = [1, 3, 8];
    useEffect(() => {
        showsList.forEach(item => {
            getShowbyId(item)
                .then(res => setShowsData(oldarray => [...oldarray, res]));
        })
    }, []);

    return (
        <main>
            <Row>
                <Col md={6} className="mb-4">
                    <Image
                        width="650px"
                        style={{marginTop: 20}}
                        src="https://www.hikeqa.com/wp-content/uploads/2021/01/test_setup.png"
                        alt="Wellcome to Testix" />
                </Col>
                <Col md={6}>
                    <Container>
                        <h2 id="h2-greeting"> Wellcome to Testix!</h2>
                        <hr />
                        <p id='homepage-describe'>Nice to see you here. Here you can create your own tests and questions, assign it to asnother users and get the result of your testers.</p>
                    </Container>
                </Col>
            </Row>
        </main>
    );
}
export default Homepage;