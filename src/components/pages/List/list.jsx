import React, { useCallback } from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Preloader from '../preloader';
import './List.css';
function List({ moviesList }) {
    // console.log(moviesList);
    const genresList = useCallback((ganresArray) => ganresArray.join(', '), []);

    return (
        <>
            {moviesList ? (
                <Container>
                    <Row>
                        {moviesList.map((item, i) => {
                            return (
                                <React.Fragment key={`${item?.id}`}>
                                    <Col xs={1} md={3}>
                                        <Card bg="dark" text="light">
                                            <div className="img-wrapper-medium">
                                                {item?.image ? <Card.Img variant="top" src={item?.image?.medium} /> : 
                                                <div className="img-no-photo">No photo</div> }
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{item?.name}</Card.Title>
                                                <Card.Text><b>Ended:</b> {item?.ended ? item?.ended : '-'}</Card.Text>
                                                <Card.Text><b>Genres:</b> {item?.genres?.length && genresList(item?.genres)}</Card.Text>
                                                <Card.Text><b>Language:</b> {item?.language}</Card.Text>
                                                <LinkContainer to={`/shows/${item?.id}`}>
                                                    <Button variant="primary">Check it</Button>
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

export default List;
