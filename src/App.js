import React from 'react';
import NodeComponent from './NodeComponent'
import HeaderTerminal from './HeaderTerminal'
import './TerminalStyles.css';
import { Container, Row, Col } from 'react-bootstrap'
//import photo from'./beta.jpg'
//import './App.css';

function App() {
  return (
    <div className="App">
      <Container >
        <Row>
          <Col>
            <HeaderTerminal />
            <NodeComponent />

          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default App;

/* <div className="App">

      <div className="terminal">
      <img src={photo} alt="betanyeli"></img>
      <br></br>
          <span className="text-one">>Hola, Soy Betanyeli Bravo! </span>
          <br></br>
          <span className="text-two">>I'm a web developer! </span>
          <br></br>
          <span className="text-three">>Soy Desarrolladora Web! </span>
          <p className="description">Soy Betányeli. Desde que me titulé he buscado instancias donde desarrollar nuevos desafíos, y egresar de Laboratoria y conocer el mundo de la programación, fue uno de los más gratificantes retos. Constante, empática y altruista, trabajando constantemente para el logro de mis metas.</p>


      </div>
          </div> */