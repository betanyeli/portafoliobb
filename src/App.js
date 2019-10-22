import React from 'react';

import HeaderTerminal from './Components/HeaderTerminal'
import Description from './Components/Description'
import Footer from './Components/Footer'
// import DarkModeToggle from './Components/DarkMode'
import './TerminalStyles.css';
import { Container, Row, Col } from 'react-bootstrap'



function App() {

  return (
<React.Fragment>

    <Container className="App mt-4">
    
      <Row>
        <Col>

          <HeaderTerminal />
          {/* <DarkModeToggle /> */}
          <Description />
          {/* <NodeComponent /> */}
        </Col>
      </Row>
      
    </Container>
    <Footer />
    </React.Fragment>

  );
}

export default App;
