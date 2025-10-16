// components/About.js
import React from "react";

function About() {
  const showEnthusiasm = () => {
    document.getElementById("aboutMsg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("aboutHeading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="container">
      <div className="card p-4 mb-4">
        <h2 id="aboutHeading" className="mb-3">
          This is the About Page
        </h2>
        <p id="aboutMsg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showEnthusiasm}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default About;
