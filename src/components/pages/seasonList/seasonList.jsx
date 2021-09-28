import { Row, Col, Tabs, Tab, Image } from "react-bootstrap";
import './seasonList.css';

function SeasonList({ seasonList, show }) {
    return (
        <>
            <Row>
                <Col>
                    {show ? (<Image src={show.image.original} rounded />) : 'loading...'}
                </Col>
                <Col>
                    {seasonList ? (
                        <Tabs defaultActiveKey="Season_1" id="uncontrolled-tab-example" className="mb-3">
                            {seasonList.map((item, i) => {
                                return (
                                    <Tab eventKey={`Season_${i + 1}`} title={`Season ${i + 1}`} key={`${item.id}`}>
                                        <p>Premiere Date: {item.premiereDate}</p>
                                        <p>Ended: {item.endDate}</p>
                                        <p>Network: {item.network.name}</p>
                                        <p>Episode Order: {item.episodeOrder}</p>
                                        {item.summary ?
                                            (<div dangerouslySetInnerHTML={{ __html: item.summary }}>
                                        </div>) : null}
                                    </Tab>
                                )
                            })
                            }
                        </Tabs>
                    ) : 'loading...'}

                </Col>
            </Row>
        </>
    )
}
export default SeasonList;