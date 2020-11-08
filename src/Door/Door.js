import React from "react";
import door1 from "./door1.png";
import doorWrap from "./wrap.png";
import doorLeft from "./left.png";
import doorRight from "./right.png";
import "./style.css";

const Door = (props) => {
  const { position, setPosition } = props;
  return (
    <div
      className="wrap absolute"
      style={{ top: position.top + "px", left: position.left + "px" }}
      onMouseMove={(e) => {
        setPosition({
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
        });
      }}
      onClick={onClick}
    >
      <div
        // 阻止drag事件
        onDragStart={(e) => {
          e.preventDefault();
        }}
        className="door relative"
      >
        <img src={doorWrap} id="wrap" alt="door" />
        <img src={doorLeft} id="left" alt="left" />
        <img src={doorRight} id="right" alt="right" />
        <div id="wow">
          <span>牛啊老弟🎉</span>
        </div>
      </div>
    </div>
  );
};

function onClick(e) {
  console.log("我这个愚蠢的🚪被点中了");
}

export default Door;
