import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full-Stack Developer 💻",
          "MERN Stack Developer 🚀",
          "IEEE Volunteer & Lead 🔗",
          "Open Source Contributor 🌍",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
      }}
    />
  );
}

export default Type;
