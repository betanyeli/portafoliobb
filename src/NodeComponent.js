import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './TerminalStyles.css';

function NodeTerminal() {
    // constructor(){
    //     super();
    //     this.state{
    //         key:
    //     }
    // }
    
        const [key, setKey] = useState('home');
        return(
            <div className="container-terminal">
                
                    <div className="body-terminal">

    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
        <p>Hola</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Holi</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        <p>Holo</p>
      </Tab>
    </Tabs>
                    </div>

                

            </div>
        )
    }


export default NodeTerminal;
