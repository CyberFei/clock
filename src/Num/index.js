import React from "react";
import "./style.css";

const numEl = (num, showNum, key) => (
  <div
    className={"num" + (showNum && num !== undefined ? " num" + num : "")}
    key={key}
  >
    <div className="num-item num-item1"></div>
    <div className="num-item num-item2"></div>
    <div className="num-item num-item3"></div>
    <div className="num-item num-item4"></div>
    <div className="num-item num-item5"></div>
  </div>
);

export default numEl;
