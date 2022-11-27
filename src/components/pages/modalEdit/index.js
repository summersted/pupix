import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../../hooks/auth.hook';
import { createQuestion, createTest, editQuestion, editTest, getQuestionById, getTestById } from '../../services';
import Search from '../search';

function ModalEdit({ show, handleClose, type, itemId = undefined }) {
    const [body, setBody] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [questionsId, setQuestionsId] = useState([]);
    const [testTitle, setTestTitle] = useState('');

    function reduceTestsId(questionId) {
        if (questionsId.includes(questionId)) {
            const questionIdIndex = questionsId.indexOf(questionId);
            setQuestionsId([
                ...questionsId.splice(0, questionIdIndex),
                ...questionsId.splice(questionIdIndex + 1),
            ])
        } else {
            setQuestionsId([...questionsId, questionId])
        }
    }

    async function onSubmitQuestion() {
        const answers = [answer1, answer2, answer3];
        const question = {
            body,
            correctAnswer: answers[correctAnswer],
            answers
        }

        await editQuestion(itemId, question)
            .then((res) => handleClose())
            .catch((err) => console.log(err));
    }
    async function onSubmitTest() {
        const test = {
            questionsId,
            title: testTitle
        }
        await editTest(itemId, test)
            .then((res) => handleClose())
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        if (itemId !== undefined) {
            switch (type) {
                case 'tests':
                    getTestById(itemId).then(res => {
                        setTestTitle(res?.title);
                        setCorrectAnswer(res?.correctAnswer);
                        setQuestionsId(res?.questionsId);
                    });
                    break;

                default:
                    getQuestionById(itemId).then(res => {
                        const [ans1, ans2, ans3] = res?.answers;
                        setAnswer1(ans1);
                        setAnswer2(ans2);
                        setAnswer3(ans3);
                        setBody(res.question);
                        setCorrectAnswer(res.correctAnswer);
                    });
                    break;
            }
        }
    }, [itemId])

    if (type === 'questions') {
        return (
            <>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Enter your question</Form.Label>
                            <Form.Control
                                defaultValue={body}
                                onChange={(e) => setBody(e.target.value)}
                                as="textarea"
                                rows={3}
                            />
                            <hr />
                            Enter the answers and mark the correct one.
                            <br />
                            <br />
                            <InputGroup>
                                <InputGroup.Radio
                                    name="answer"
                                    defaultChecked={answer1 === correctAnswer}
                                    onClick={() => setCorrectAnswer(0)}
                                />
                                <InputGroup.Text>A</InputGroup.Text>
                                <Form.Control
                                    defaultValue={answer1}
                                    onChange={(e) => setAnswer1(e.target.value)}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroup.Radio
                                    name="answer"
                                    defaultChecked={answer2 === correctAnswer}
                                    onClick={() => setCorrectAnswer(1)}
                                />
                                <InputGroup.Text>B</InputGroup.Text>
                                <Form.Control
                                    defaultValue={answer2}
                                    onChange={(e) => setAnswer2(e.target.value)}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroup.Radio
                                    name="answer"
                                    defaultChecked={answer3 === correctAnswer}
                                    onClick={() => setCorrectAnswer(2)}
                                />
                                <InputGroup.Text>C</InputGroup.Text>
                                <Form.Control
                                    defaultValue={answer3}
                                    onChange={(e) => setAnswer3(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSubmitQuestion}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                Enter the Test title:
                            </InputGroup.Text>
                            <Form.Control
                                defaultValue={testTitle}
                                aria-describedby="basic-addon3"
                                onChange={(e) => setTestTitle(e.target.value)}
                            />
                        </InputGroup>
                        <hr />
                        <Search
                            qType={'questions'}
                            addable={false}
                            selectable={true}
                            //   selectedArray={}
                            selectCallback={reduceTestsId}
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmitTest}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;