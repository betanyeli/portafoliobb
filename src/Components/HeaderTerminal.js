import React from "react";
import Typewriter from "typewriter-effect";
import "../TerminalStyles.css";

const HeaderTerminal = () => {
  return (
    <div className="header-terminal">
      <Typewriter
        options={{
          strings: ["Disclaimer! this portfolio was deprecated in 2019 uwu"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
export default HeaderTerminal;
