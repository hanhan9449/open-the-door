import "./App.css";
import Door from "./Door/Door";
import React, {useState} from "react";

function App() {
    const [position, setPosition] = useState({top: 150, left: 150})
  return (
    <div className="h100 relative">
      <h1>快来打开这扇门</h1>
      <Door position={position} setPosition={setPosition}/>
    </div>
  );
}

export default App;
