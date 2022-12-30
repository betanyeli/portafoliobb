import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../TerminalStyles.css";
import "../Contact.css";
import "../Skills.css";
import ThisIsMe from "../ThisIsMe.json";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";

function NodeTerminal() {
  const [key, setKey] = useState("home");
  const [me] = useState(ThisIsMe);

  const aboutMe = (
    <>
      <Col xs={12} md={6}>
        <div className="acronym">
          <p>
            <b>B</b>ienvenido a mi Portafolio,
          </p>
          <p>
            <b>E</b>laborado en <i className="tech-skills">JavaScript,</i>
          </p>
          <p>
            <b>T</b>ambién con <i>React Js,</i>
          </p>
          <p>
            <b>A</b>demás de <i>Css Styles,</i>{" "}
          </p>
          <p>
            <b>N</b>ODE, <i>Firebase y Git</i>
          </p>
          <p>
            <b>Y</b> <i>Bootstrap con FlexBox Grid,</i>
          </p>
          <p>
            <b>E</b>gresada de{" "}
          </p>
          <p>
            <b>L</b>aboratoria
          </p>
          <p>
            <b>I</b>mpulsando a un mundo feliz
          </p>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="acronym">
          <p>
            <b>B</b>usco nuevos desafíos,
          </p>
          <p>
            <b>R</b>elacionados con mis <i>Tech Skills,</i>
          </p>
          <p>
            <b>A</b>utodidacta al 100%, responsable y TeamWorking,
          </p>
          <p>
            <b>V</b>isionaria y
          </p>
          <p>
            <b>O</b>rganizada, Conóceme, estoy aquí!
          </p>
        </div>

        <div className="social-media">
          <a
            className="social"
            href="https://www.linkedin.com/in/betanyeli-bravo/"
          >
            <span>LinkedIn</span>
          </a>
          <a className="social" href="https://github.com/betanyeli">
            <span>Github</span>
          </a>
          <a className="social" href="mailto:betangelii@gmail.com">
            <span>E-mail</span>
          </a>

          <a className="social" href="tel:+56972801296">
            <span>Tel</span>
          </a>
          <a className="social" href="https://www.npmjs.com/~betanyeli">
            <span>Npm</span>
          </a>
        </div>
      </Col>
    </>
  );

  return (
    <Tabs
      justify
      variant="tabs"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(event) => setKey(event)}
    >
      <Tab eventKey="home" title="💻users/beta/about-me">
        <Container className="mt-4">
          <Row>{aboutMe}</Row>
        </Container>
      </Tab>
      <Tab eventKey="skills" title="💻users/beta/skills">
        <Container>
          <Row>
            <Col xs={12}>
              <Skills />
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default NodeTerminal;
