import React from "react";

function LightSwitch({ isLightOn, toggleLight }) {
  return (
    <button onClick={toggleLight}>
      {isLightOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;
