import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []); // Runs only once when the page first loads

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Hello, user! Welcome to our site.</h1>
    </div>
  );
}

export default App;
