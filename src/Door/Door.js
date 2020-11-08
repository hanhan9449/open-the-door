import React from "react";
import door1 from "./door1.png";
import "./style.css";

const Door = (props) => {
  const { position, setPosition } = props;
  return (
    <div className="door1 relative"
         style={{ top: position.top + "px", left: position.left + "px" }}
         onMouseMove={(e) => {
           setPosition({
             top: Math.random()  * window.innerHeight,
             left: Math.random()  * window.innerWidth,
           });
         }}

    >
      <img
        src={door1}
        alt={"door"}
        onClick={onClick}
      />
    </div>
  );
};

function onClick(e) {
  console.log("我这个愚蠢的🚪被点中了");
}

export default Door;
