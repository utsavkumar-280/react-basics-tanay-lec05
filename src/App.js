import React from "react";
import "./styles.css";

var headingHtml = "Utsav";
var pcolor = "red";

export default function App() {
  function likeClickHandler() {
    console.log("clicked!");
  }

  return (
    <div className="App">
      <h1 style={{ background: pcolor }}>Welcome {headingHtml}</h1>
      <button onClick={likeClickHandler}> Like me! </button>
    </div>
  );
}
