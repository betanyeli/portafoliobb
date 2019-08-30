import React from 'react';
import './App.css';
//import NodeComponent from './Components/NodeComponent'
import HeaderTerminal from './Components/HeaderTerminal'
import Description from './Components/Description'
import './TerminalStyles.css';
import { Container, Row, Col } from 'react-bootstrap'



function App() {

  return (


    <Container className="App">
      <Row>
        <Col>

          <HeaderTerminal />

          <Description />
          {/* <NodeComponent /> */}
        </Col>
      </Row>
    </Container>



  );
}

export default App;
