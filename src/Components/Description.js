import React from "react";
import "../TerminalStyles.css";
import "../PhotoProfile.css";
import ThisIsMe from "../ThisIsMe.json";
import { Container, Row, Col } from "react-bootstrap";
import NodeComponent from "./NodeComponent";

const Description = () => {
  const me = ThisIsMe;
  return (
    <Container>
      <Row className="pt-3">
        <Col xs={12} md={3}>
          <div className="grid">
            <figure className="effect-steve">
              <img src={me.profile} alt=""></img>
              <figcaption>
                <h2>
                  Betanyeli <span> Bravo</span>
                </h2>
                <p>React Native Developer</p>
              </figcaption>
            </figure>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <NodeComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
