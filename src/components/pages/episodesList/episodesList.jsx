import { Row, Col, Accordion, Image } from "react-bootstrap";
function EpisodesList({ episodesList, show }) {
    return (
        <>
            <Row>
                <Col>
                    {show ? (<Image src={show.image.original} rounded />) : 'loading...'}
                </Col>
                <Col>
                    {episodesList ? (
                        <Accordion>

                            {episodesList.map((item, i) => {
                                return (
                                    <Accordion.Item key={'_' + i} eventKey={i}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col>
                                                    <Image src={item.image.medium} />
                                                </Col>
                                                <Col>
                                                    <p>Season {item.season} number {item.number}</p>
                                                    <p>Runtime: {item.runtime}</p>
                                                    {item.summary}
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}

                        </Accordion>
                    ) : 'loading...'}

                </Col>
            </Row>
        </>
    )
}
export default EpisodesList;