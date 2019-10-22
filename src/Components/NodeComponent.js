import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card'
import Projects from '../Components/NodeComponents/Projects'
import Skills from '../Components/NodeComponents/Skills'
import '../TerminalStyles.css';
import '../Contact.css';
import '../Skills.css';
import ThisIsMe from '../ThisIsMe.json'
import { Container, Row, Col } from 'react-bootstrap'

function NodeTerminal() {
  const [key, setKey] = useState('home');
  const [me] = useState(ThisIsMe)

  return (

    <Tabs justify variant="tabs" id="controlled-tab-example" activeKey={key} onSelect={event => setKey(event)}>
      <Tab eventKey="home" title="💻Node:/c/users/About-me">
        <Container className="mt-4">
          <Row>
            <Col xs={12} md={6}>
              {/* <img className ="img-profile"src={me.profile} alt="betanyeli-foto"></img> */}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={me.profile} />
                <Card.Body>
                  <Card.Title>Betányeli Bravo</Card.Title>
                  <Card.Text>
                   <i>"Mujer apasionada por el desarrollo Front-end, perseverante y autodidacta. Egresada de <b>Laboratoria</b>, y titulada en Administración, comprometida con la investigación de nuevas tecnologías y mejores formas de implementación."</i>
    </Card.Text>
                </Card.Body>

              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Skills />
            </Col>
          </Row>
        </Container>
      </Tab>

      <Tab eventKey="skills" title="💻Node:/c/users/Projects">
        <Container className="mt-4">
          <Row>
            <Col xs={12}>
              <Projects />
            </Col>
          </Row>
        </Container>
      </Tab>

    </Tabs >
  )
}


export default NodeTerminal;
