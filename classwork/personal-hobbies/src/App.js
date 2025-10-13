import React from "react";
import "./App.css";

function App() {
  const name = "Amaya Raj T";
  const age = 20;
  const isStudent = true;
  const headingColor = "lightblue";

  const favoriteHobbies = ["Reading", "Music", "Coding"];

  const hobbiesForLoop = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbiesForLoop.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }

  const showMessage = () => {
    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";
    document.getElementById("heading").style.backgroundColor = headingColor;
  };

  return (
    <div className="container mt-5">
      <h1 id="heading" className="text-center mb-4">
        My Profile
      </h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Student: {isStudent.toString()}</p>
        </div>
      </div>

      <div className="mb-3">
        <h4>Hobbies (for loop)</h4>
        <ul>{hobbiesForLoop}</ul>
      </div>

      <div className="mb-3">
        <h4>Hobbies (map)</h4>
        <ul>
          {favoriteHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary mb-3" onClick={showMessage}>
        Show Enthusiasm
      </button>

      <p id="message">Click the button to see my enthusiasm!</p>
    </div>
  );
}

export default App;