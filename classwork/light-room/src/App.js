import React, { useState } from "react";
import LightSwitch from "./child";

function Room() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>
        The room is {isLightOn ? "bright" : "dark"}
      </h2>
      <LightSwitch isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;
