import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../TerminalStyles.css';
import '../Contact.css';
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
              <div className="acronym">
                <i><b>B</b>uscando nuevos horizontes,</i>
                <i><b>E</b>n este hermoso país,</i>
                <i><b>T</b>ropecé con Laboratoria,</i>
                <i><b>A</b>hora, estoy muy feliz!</i>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="social-media">

                <a className="social" href="https://www.linkedin.com/in/betanyeli-bravo/"><span>LinkedIn</span></a>
                <a className="social" href="https://github.com/betanyeli"><span>Github</span></a>
                <a className="social" href="mailto:betangelii@gmail.com"><span>E-mail</span></a>
                <a className="social" href="#"><span>CV</span></a>
                <a className="social" href="tel:+56972801296"><span>Tel</span></a>
              </div>
            </Col>
          </Row>



        </Container>


      </Tab>
      <Tab eventKey="skills" title="💻Node:/c/users/Skills&&Projects">
        <p>Holi</p>

      </Tab>

    </Tabs>
  )
}


export default NodeTerminal;
