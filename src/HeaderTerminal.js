import React from 'react';
import './TerminalStyles.css';

class HeaderTerminal extends React.Component {
    render() {
        return (

            <div className="header-terminal">

                <p className="node">Node:/c/Users/BetanyeliBravo</p>
                <div className="windows">
                    <span><i className="fas fa-window-minimize"></i></span>
                    <span><i className="far fa-window-maximize"></i></span>
                    <span><i className="fas fa-window-close"></i></span>

                </div>





            </div>

        )
    }
}

export default HeaderTerminal;