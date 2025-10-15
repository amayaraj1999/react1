import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    if (user !== "Guest") {
      console.log(`User changed to ${user}`);
    }
  }, [user]);

  return (
    <div className="container">
      <h2 className="title">Profile Viewer</h2>
      <p className="message">Welcome, {user}!</p>
      <button className="login-btn" onClick={() => setUser("Alice")}>
        Login as Alice
      </button>
    </div>
  );
}

export default App;
