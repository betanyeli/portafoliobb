import React from 'react'
import Typewriter from 'typewriter-effect';
import '../TerminalStyles.css';

const HeaderTerminal = () =>{
    return(
        <div className="header-terminal fixed-top">
        <Typewriter
        options={{
          strings: ['¿Necesitas una Front End Developer?', 'Bienvenidx a mi Portafolio <3','Need a Front End Developer?', 'Welcome to my portfolio', 'Betányeli Bravo'],
          autoStart: true,
          loop: true,
        }}
      />
      
      </div>
    )

}
export default HeaderTerminal;