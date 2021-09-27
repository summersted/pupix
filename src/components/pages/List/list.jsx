import React, { useCallback} from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './List.css';
function List({ moviesList }) {
    const genresList = useCallback((ganresArray) => ganresArray.join(', '), []);
    return (
        <>
            {moviesList ? (
                <Container>
                    <Row>
                        {moviesList.map((item, i) => {
                            return (
                                <React.Fragment  key={`${item.id}`}>
                                    <Col xs={1} md={3}>
                                        <Card bg="dark" text="light">
                                            <Card.Img variant="top" src={item.image.medium} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text><b>Ended:</b> {item.ended ? item.ended : '-'}</Card.Text>
                                                <Card.Text><b>Genres:</b> {genresList(item.genres)}</Card.Text>
                                                <Card.Text><b>Language:</b> {item.language}</Card.Text>
                                                <LinkContainer to={`/shows/${item.id}`}>
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
            ) : 'loading...'}
        </>
    )
}

export default List;
// {moviesList.map((item, i) => {
//     return (
//         <Col>
//             <Card key={item.id} bg="dark" text="light" style={{ width: '100px' }}>
//                 <Card.Img variant="top" src={item.image.medium} />
//                 <Card.Body>
//                     <Card.Title>{item.name}</Card.Title>
//                     <Button variant="primary">Check it</Button>
//                 </Card.Body>
//             </Card>
//         </Col>
//     )
// })}