// components/Contact.js
import React from "react";

function Contact() {
  const showEnthusiasm = () => {
    document.getElementById("contactMsg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("contactHeading").style.backgroundColor =
      "lightblue";
  };

  return (
    <div className="container">
      <div className="card p-4 mb-4">
        <h2 id="contactHeading" className="mb-3">
          This is the Contact Page
        </h2>
        <p id="contactMsg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showEnthusiasm}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default Contact;
