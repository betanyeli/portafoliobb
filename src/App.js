import React, { useState } from 'react';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Description from './Components/Description'
// import NodeComponent from './Components/NodeComponent'
// import HeaderTerminal from './Components/HeaderTerminal'
import './TerminalStyles.css';
// import { Container, Row, Col } from 'react-bootstrap'



function App() {
  const [key, setKey] = useState('home');
  return (
    <div className="App">
    <div className="header-terminal">
      <p className="node">Betanyeli Bravo</p>
    </div>

      <Tabs justify variant="tabs" id="controlled-tab-example" activeKey={key} onSelect={event => setKey(event)}>
        <Tab eventKey="home" title="About me">
          <Description />
        </Tab>
        <Tab eventKey="skills" title="Projects">
          <p>Holi</p>
        </Tab>
        <Tab eventKey="projects" title="Contact">
          <p>Holo</p>
        </Tab>
        {/* <Tab eventKey="contact" title="Contact">
          <p>Holu</p>
        </Tab> */}
      </Tabs>
      {/* <Container >
        <Row>
          <Col sm={12}>
          <HeaderTerminal />
            <NodeComponent />
          </Col>


         
        </Row>
      </Container> */}
    </div>


  );
}

export default App;
