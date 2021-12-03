import { useEffect } from "react";
import { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
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
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {showsData.map((item, i) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={item ? item.image.original :
                                            <div className="img-no-photo">No photo</div>}
                                        alt="carousel"
                                    />
                                    <Carousel.Caption>
                                        <h3 >{item.name}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <Container>
                        <h2 id="h2-greeting"> Wellcome to Pupex!</h2>
                        <hr />
                        <p id='homepage-describe'>Nice to see you here. I hope you wouldn`t look for bugs on this resource.</p>
                    </Container>
                </Col>
            </Row>
        </main>
    );
}
export default Homepage;