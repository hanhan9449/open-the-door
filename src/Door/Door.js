import React from "react";
import door1 from "./door1.png";
import "./style.css";

const Door = (props) => {
  const { position, setPosition } = props;
  return (
    <img
      src={door1}
      className={"door1 relative"}
      style={{ top: position.top + "px", left: position.left + "px" }}
      onMouseMove={(e) => {
        // console.log(e.clientX, e.clientY)
        //   console.log(window.innerWidth, window.innerHeight)
        setPosition({
          top: Math.random()* 0.7 * window.innerHeight,
          left: Math.random()* 0.7 * window.innerWidth,
        });
      }}
      onClick={onClick}
      alt={"door"}
    />
  );
};

function onClick(e) {
  console.log("我这个愚蠢的🚪被点中了");
}

export default Door;
