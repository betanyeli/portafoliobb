import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
              <div className="acronym">
                <p><b>B</b>ienvenido a mi Portafolio,</p>
                <p><b>E</b>laborado en <i className="tech-skills">JavaScript,</i></p>
                <p><b>T</b>ambién con <i>React Js,</i></p>
                <p><b>A</b>demás de <i>Css Styles,</i> </p>
                <p><b>N</b>ODE, <i>Firebase y Git</i></p>
                <p><b>Y</b> <i>Bootstrap con FlexBox Grid,</i></p>
                <p><b>E</b>gresada de </p>
                <p><b>Laboratoria</b></p>
                <p><b>I</b>mpulsando a un mundo feliz</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="acronym">
                <p><b>B</b>usco nuevos desafíos,</p>
                <p><b>R</b>elacionados con mis Tech Skills,</p>
                <p><b>A</b>utodidacta al 100%, responsable y TeamWorking,</p>
                <p><b>V</b>isionaria y</p>
                <p><b>O</b>rganizada, Conóceme, estoy aquí!</p>
              </div>

              <div className="social-media">
                <a className="social" href="https://www.linkedin.com/in/betanyeli-bravo/"><span>LinkedIn</span></a>
                <a className="social" href="https://github.com/betanyeli"><span>Github</span></a>
                <a className="social" href="mailto:betangelii@gmail.com"><span>E-mail</span></a>
                <a className="social" href="https://github.com/betanyeli/portafoliobb/blob/master/src/cv.pdf"><span>CV</span></a>
                <a className="social" href="tel:+56972801296"><span>Tel</span></a>
                <a className="social" href="https://www.npmjs.com/~betanyeli"><span>Npm</span></a>
              </div>
            </Col>
          </Row>



        </Container>


      </Tab>
      <Tab eventKey="skills" title="💻Node:/c/users/Skills&&Projects">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="all">
              <div className="view view-tenth">
                  <img src={me.mdlinks.img} />
                  <div className="mask">
                    <h2>BB-MDLinks</h2>
                    <p>{me.mdlinks.description}</p>
                    <a href={me.mdlinks.url} className="info">Ver Más</a>
                  </div>
                </div>

                <div className="view view-tenth">
                  <img src={me.NoMoreCommunity.img} />
                  <div className="mask">
                    <h2>NoMoreCommunity</h2>
                    <p>{me.NoMoreCommunity.description}</p>
                    <a href={me.NoMoreCommunity.url} className="info">Ver Más</a>
                  </div>
                </div>

                <div className="view view-tenth">
                  <img src={me.Pinterest.img} />
                  <div className="mask">
                    <h2>Pinterest</h2>
                    <p>{me.Pinterest.description}</p>
                    <a href={me.Pinterest.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.PopCornMovie.img} />
                  <div className="mask">
                    <h2>PopCornMovie</h2>
                    <p>{me.PopCornMovie.description}</p>
                    <a href={me.PopCornMovie.url} className="info">Ver Más</a>
                  </div>
                </div>
              </div>


              

                
              
            </Col>
          </Row>
        </Container>

      </Tab>

    </Tabs >
  )
}


export default NodeTerminal;
