import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../../hooks/auth.hook';
import { createQuestion, createTest } from '../../services';
import Search from '../search';
import SearchResults from '../searchResults';

function ModalAdd({ show, handleClose, type }) {
  const { userId } = useAuth();

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
      authorId: userId,
      body,
      correctAnswer: answers[correctAnswer],
      answers
    }
    console.log(question);
    await createQuestion(question)
      .then((res) => handleClose())
      .catch((err) => console.log(err));
  }
  async function onSubmitTest() {
    const test = {
      authorId: userId,
      questionsId,
      title: testTitle
    }
    await createTest(test)
      .then((res) => handleClose())
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log(questionsId);
  }, [questionsId])
  if (type === 'questions') {
    return (
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Create new Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter your question</Form.Label>
              <Form.Control
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
                  onClick={() => setCorrectAnswer(0)}
                />
                <InputGroup.Text>A</InputGroup.Text>
                <Form.Control
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Radio
                  name="answer"
                  onClick={() => setCorrectAnswer(1)}
                />
                <InputGroup.Text>B</InputGroup.Text>
                <Form.Control
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Radio
                  name="answer"
                  onClick={() => setCorrectAnswer(2)}
                />
                <InputGroup.Text>C</InputGroup.Text>
                <Form.Control
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
          <Modal.Title>Create new Test</Modal.Title>
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
              <Form.Control aria-describedby="basic-addon3" onChange={(e) => setTestTitle(e.target.value)}/>
            </InputGroup>
            <hr />
            <Search
              qType={'questions'}
              addable={false}
              selectable={true}
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

export default ModalAdd;