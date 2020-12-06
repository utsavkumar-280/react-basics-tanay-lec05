import React from "react";
import "./styles.css";

var headingHtml = "Utsav";
var pcolor = "red";
var clicks = 0;

export default function App() {
  function likeClickHandler() {
    console.log("clicked!");
    clicks = clicks + 1;
    console.log("current likes=", clicks);
  }

  return (
    <div className="App">
      <h1 style={{ background: pcolor }}>Welcome {headingHtml}</h1>
      <button onClick={likeClickHandler}> Like me! </button>
    </div>
  );
}
