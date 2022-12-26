import React from "react";
import Typewriter from "typewriter-effect";
import "../TerminalStyles.css";

const HeaderTerminal = () => {
  return (
    <div className="header-terminal">
      <Typewriter
        options={{
          strings: [
            "Do you need a React Developer?",
            "Welcome to my portfolio",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
export default HeaderTerminal;
