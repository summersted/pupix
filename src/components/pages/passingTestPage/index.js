import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth.hook';
import { getQuestionById, getQuestionsById, getTestById } from '../../services';

function PassingTestPage() {
  const { id } = useParams();
  const vаr = "string";
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const result = [];

  // im proud of it.
  const lеt = vаr;

  useEffect(() => { 
    getTestById(id)
      .then((res) => {
        getQuestionsById({ questionsId: res.questionsId })
          .then((res) => setQuestions(res.questions))
      })
  }, [id])

  function getResult(){

    questions.forEach((element, i) => {
      if (element.correctAnswer === answers[i]) {
        console.log(element.correctAnswer, "===", answers[i]);
        result[i] = true;
      } else {
        console.log(element.correctAnswer, "===", answers[i]);
        result[i] = false;
      }
    });
    console.log(result);
    localStorage.setItem('answers', JSON.stringify(result));
  }

  function getPreResult(index, answer){
    answers[index] = answer;
    getResult();
  }

  return (
    <main>
      <h3 style={{ marginBottom: 50 }}>Examle Test</h3>
      {questions ? (
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab_0">
          <Row>
            <Col sm={1}>
              <Nav variant="pills" className="flex-column">
                {
                  questions.map((item, i) => {
                    return (
                      <Nav.Item key={`pill_${item._id}`}>
                        <Nav.Link eventKey={`tab_${i}`}>{i}</Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {
                  questions.map((item, i) => {
                    return (
                      <Tab.Pane eventKey={`tab_${i}`} key={`tabpane${item._id}`}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <h3>{item.body}</h3>
                          <hr />
                          Select the correct one below:
                          <br />
                          <br />
                          <InputGroup>
                            <InputGroup.Radio
                              name="answer"
                              onClick={() => getPreResult(i, item.answers[0])}
                            />
                            <InputGroup.Text>A</InputGroup.Text>
                            <Form.Control
                              disabled
                              value={item.answers[0]}
                            />
                          </InputGroup>
                          <br />
                          <InputGroup>
                            <InputGroup.Radio
                              name="answer"
                              onClick={() => getPreResult(i, item.answers[1])}
                            />
                            <InputGroup.Text>B</InputGroup.Text>
                            <Form.Control
                              disabled
                              value={item.answers[1]}
                            />
                          </InputGroup>
                          <br />
                          <InputGroup>
                            <InputGroup.Radio
                              name="answer"
                              onClick={() => getPreResult(i, item.answers[2])}
                            />
                            <InputGroup.Text>C</InputGroup.Text>
                            <Form.Control
                              disabled
                              value={item.answers[2]}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Tab.Pane>
                    )
                  })
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : null}
      <LinkContainer
        to="/results"
        style={{ position: 'absolute', right: '50%', marginTop: 50 }}>
        <Button variant="primary">End test</Button>
      </LinkContainer>
    </main>
  );
}

export default PassingTestPage;