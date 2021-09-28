import { useCallback } from "react";
import { Image, Row, Container, Col, Alert, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function DataTitle({ data }) {
    const genresList = useCallback((ganresArray) => ganresArray.join(', '), []);
    console.log(data);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <div className="img-wrapper">
                            <Image src={data.image.original} rounded />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <Alert variant="light">
                            <Alert.Heading>{data.name}</Alert.Heading>
                            <div dangerouslySetInnerHTML={{ __html: data.summary }}>
                            </div>
                            <hr />
                            <p className="mb-0">
                                Status: {data.status}({data.status ? data.ended : "-"})
                            </p>
                            <p className="mb-0">
                                Language: {data.language}
                            </p>
                            <p className="mb-0">
                                Network: {data.network.name}
                            </p>
                            <p className="mb-0">
                                Genres: {genresList(data.genres)}
                            </p>
                            <hr />
                            <LinkContainer to={`/shows/${data.id}/seasons`}>
                                <Button variant="outline-dark">Show seasons</Button>
                            </LinkContainer>
                            <LinkContainer to={`/shows/${data.id}/episodes`}>
                                <Button variant="outline-dark">Show episodes</Button>
                            </LinkContainer>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DataTitle;