import Preloader from "../preloader";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
function PeopleList({ list }) {

    return (
        <>
            {list ? (
                <Container>
                    <Row>
                        {list.map((item, i) => {
                            return (
                                <React.Fragment key={`${item?.id}`}>
                                    <Col xs={1} md={3}>
                                        <Card bg="dark" text="light">
                                            <div className="img-wrapper-medium">
                                                {item?.image ? <Card.Img variant="top" src={item?.image?.medium} /> : 
                                                <div className="img-no-photo">No Photo</div> }
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{item?.name}</Card.Title>
                                                <Card.Text><b>Gender:</b> {item?.gender}</Card.Text>
                                                <Card.Text><b>Country:</b> {item?.country?.name}</Card.Text>
                                                <Card.Text><b>Birthday</b> {item?.birthday}</Card.Text>
                                                <Card.Text><b>Deathday:</b> {item?.deathday ? item?.deathday : '-'}</Card.Text>
                                                <LinkContainer to={`/people/${item?.id}`}>
                                                    <Button variant="primary">Watch profile</Button>
                                                </LinkContainer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {(i % 4 === 3) ? <div className="separator"></div> : null}
                                </React.Fragment>
                            )
                        })}
                    </Row>
                </Container>
            ) : <Preloader />}
        </>
    )
}
export default PeopleList;