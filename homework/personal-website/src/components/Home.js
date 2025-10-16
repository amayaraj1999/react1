// components/Home.js
import React from "react";

function Home() {
  const showEnthusiasm = () => {
    document.getElementById("homeMsg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("homeHeading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="container">
      <div className="card p-4 mb-4">
        <h2 id="homeHeading" className="mb-3">
          This is the Home Page
        </h2>
        <p id="homeMsg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showEnthusiasm}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default Home;
