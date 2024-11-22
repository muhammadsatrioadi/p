import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "EDITOR VIDEO & FOTO",
          "MEKANIK MOTOR",
          "DESAIN GRAFIS",
          "WONG TULUS .........",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
