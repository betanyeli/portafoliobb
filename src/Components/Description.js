import React, { useState } from 'react'
import '../TerminalStyles.css'
//import '../PhotoProfile.css'
import ThisIsMe from '../ThisIsMe.json'
import { Container, Row, Col } from 'react-bootstrap'
import NodeComponent from './NodeComponent'



const Description = () => {
  const me = ThisIsMe;
  return (
    <Container>
      
      <Row className="pt-3">
        <Col>
          <NodeComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Description;