import React, { useState } from 'react';
import { Card, Button, Container, Col, Row, ListGroup, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ModalEdit from '../modalEdit';
import Preloader from '../preloader';
import './List.css';
function List({
    list,
    type = "users",
    selectable = false,
    selectCallback = () => { }
}) {
    const [editingItemId, setEditingItemid] = useState();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function editModalHandle(id) {
        setEditingItemid(id)
        handleShow();
    };

    switch (type) {
        case 'users':
            return (
                <>
                    {list ? (
                        <Container style={{ marginBottom: 100 }}>
                            <Row>
                                {list.map((item, i) => {
                                    return (
                                        <React.Fragment key={`${i}-users-item`}>
                                            <Col xs={1} md={3}>
                                                <Card bg="dark" text="light">
                                                    <div className="img-wrapper-medium">
                                                        {item?.image ? <Card.Img variant="top" src={item?.image?.medium} /> :
                                                            <div className="img-no-photo">No photo</div>}
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Title>{item?.email}</Card.Title>
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
        case 'questions':
            return (
                <>
                    {list ? (
                        <Container style={{ marginBottom: 100 }}>
                            <ListGroup>

                                {list.map((item, i) => {
                                    return (
                                        <React.Fragment key={`${i}-list-item`}>
                                            {selectable ? (
                                                <InputGroup >
                                                    <InputGroup.Checkbox
                                                        onClick={() => selectCallback(item._id)}
                                                    />
                                                    <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                                        <span>{item?.body}</span>
                                                        <Button
                                                            onClick={() => editModalHandle(item._id)}
                                                        >Edit</Button>

                                                    </ListGroup.Item>
                                                </InputGroup>
                                            ) : (
                                                <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                                    <span>{item?.body}</span>
                                                    <Button
                                                        onClick={() => editModalHandle(item._id)}
                                                    >Edit</Button>

                                                </ListGroup.Item>
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </ListGroup>
                            <ModalEdit
                                show={show}
                                handleClose={handleClose}
                                type={type}
                                itemId={editingItemId}
                            />
                        </Container>
                    ) : <Preloader />}
                </>
            )
        default:
            return (
                <>
                    {list ? (
                        <Container style={{ marginBottom: 100 }}>
                            <ListGroup>

                                {list.map((item, i) => {
                                    return (
                                        <React.Fragment key={`${i}-list-item`}>
                                            {selectable ? (
                                                <InputGroup >
                                                    <InputGroup.Checkbox
                                                        onClick={() => selectCallback(item._id)}
                                                    />
                                                    <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                                        <span>{item?.title}</span>
                                                        <Button
                                                            onClick={() => editModalHandle(item._id)}
                                                        >Edit</Button>

                                                    </ListGroup.Item>
                                                </InputGroup>
                                            ) : (
                                                <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                                    <span>{item?.title}</span>
                                                    <Button
                                                        onClick={() => editModalHandle(item._id)}
                                                    >Edit</Button>

                                                </ListGroup.Item>
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </ListGroup>
                            <ModalEdit
                                show={show}
                                handleClose={handleClose}
                                type={type}
                                itemId={editingItemId}
                            />
                        </Container>
                    ) : <Preloader />}
                </>
            )
    }

}

export default List;
