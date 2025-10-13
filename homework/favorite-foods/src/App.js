import React from "react";
import "./App.css";

function App() {
  const favoriteFoods = ["Pizza", "Burger", "Ice Cream", "Pasta", "Sushi"];

  const handleClick = (food) => {
    const messageElement = document.getElementById("message");
    if (messageElement) {
      messageElement.textContent = `I love ${food}!`;
    }
  };

  return (
    <div className="App">
      <h1>My Favorite Foods</h1>
      <ul className="food-list">
        {favoriteFoods.map((food, index) => (
          <li key={index} className="food-item">
            <span className="food-name">{food}</span>
            <button onClick={() => handleClick(food)}>Click Me</button>
          </li>
        ))}
      </ul>
      <h3 id="message" className="message">
        Select a food that you love!
      </h3>
    </div>
  );
}

export default App;