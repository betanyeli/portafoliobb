import React, {useState} from 'react';
import Description from './Description'
//import React, {useState, useEffect} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../TerminalStyles.css';

function NodeTerminal() {

        const [key, setKey] = useState('home');
        //= primera= estado 2da= la funion  q cambia ese estado
        // useState(ValorInicial)

//         useEffect(()=>{
// //este es el equivalente a Component didmount && didUpdate
//         })
        
        return(
            <div className="container-terminal">
                
                    <div className="body-terminal">

    <Tabs  justify variant="tabs" id="controlled-tab-example" activeKey={key} onSelect={event=> setKey(event)}>
      <Tab eventKey="home" title="Acerca de Mi">
        <Description />
      </Tab>
      <Tab eventKey="skills" title="Habilidades">
        <p>Holi</p>
      </Tab>
      <Tab eventKey="projects" title="Proyectos" >
        <p>Holo</p>
      </Tab>
      <Tab eventKey="contact" title="Contacto" >
        <p>Holu</p>
      </Tab>
    </Tabs>
                    </div>

                

            </div>
        )
    }


export default NodeTerminal;
