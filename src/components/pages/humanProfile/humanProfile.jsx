import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getHumanbyId } from "../../services";
import { Alert, Row, Col, Image, Container } from "react-bootstrap";
import Preloader from "../preloader";

function HumanProfile() {

    const { id } = useParams();
    const [humanData, setHumanData] = useState(null);

    useEffect(() => {
        getHumanbyId(id).then(res => setHumanData(res));
    }, [id]);

    return (
        <main>
            {humanData ? (
                <Container fluid>
                    <Row>
                        <Col xs={4}>
                            <div className="img-wrapper">
                                {humanData?.image ?
                                    <Image variant="top" src={humanData?.image?.original} rounded /> :
                                    <div className="img-no-photo">No Photo</div>}
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Alert variant="light">
                                <Alert.Heading>{humanData?.name}</Alert.Heading>
                                <hr />
                                <p className="mb-0">
                                    Country: {humanData?.country?.name}
                                </p>
                                <p className="mb-0">
                                    Gender: {humanData?.gender}
                                </p>
                                <p className="mb-0">
                                    Birthday: {humanData?.birthday}
                                </p>
                                <p className="mb-0">
                                    Deathday: {humanData?.deathday ? humanData?.deathday : '-'}
                                </p>
                                <hr />
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            )
                : <Preloader />}
        </main>
    )
}
export default HumanProfile;