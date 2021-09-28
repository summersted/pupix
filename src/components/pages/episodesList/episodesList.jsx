import { Row, Col, Accordion, Image } from "react-bootstrap";
import Preloader from "../preloader";
function EpisodesList({ episodesList, show }) {
    return (
        <>
            <Row>
                <Col xs={4}>
                    <div className="img-wrapper">
                        {show ? (<Image src={show.image.original} rounded />) : <Preloader />}
                    </div>
                </Col>
                <Col xs={6}>
                    {episodesList ? (
                        <Accordion>

                            {episodesList.map((item, i) => {
                                return (
                                    <Accordion.Item key={'_' + i} eventKey={i}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col>
                                                    {item.image ? (<Image src={item.image.medium} />) : null}
                                                </Col>
                                                <Col>
                                                    <p>Season {item.season} number {item.number}</p>
                                                    <p>Runtime: {item.runtime}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: item.summary }}>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}

                        </Accordion>
                    ) : <Preloader />}
                </Col>
            </Row>
        </>
    )
}
export default EpisodesList;