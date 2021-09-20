import { Card, Button, CardGroup, Container, Col, Row } from 'react-bootstrap';
import './List.css';
function List({ moviesList }) {
    console.log(moviesList);
    return (
        <>
            {moviesList ? (
                <Container>
                    <Row className="customRow">
                        {moviesList.map((item, i) => {
                            return (
                                <>
                                    <Col xs={1} md={3}>
                                        <Card key={item.id} bg="dark" text="light" as="li">
                                            <Card.Img variant="top" src={item.image.medium} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text><b>Ended:</b> {item.ended ? item.ended : '-'}</Card.Text>
                                                <Card.Text><b>Genres:</b> {item.genres.join(', ')}</Card.Text>
                                                <Card.Text><b>Language:</b> {item.language}</Card.Text>
                                                <Button variant="primary">Check it</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {(i % 4 === 3) ? <div className="separator"></div> : null}
                                </>
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