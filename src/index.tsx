import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GamePlay from "./Componnet/GamePlay";

const element = (
  <div className="playground">
    <canvas id="canvas"></canvas>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

var gamePlay:GamePlay=new GamePlay();
gamePlay.run();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
