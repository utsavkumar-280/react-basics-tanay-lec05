import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likecounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newlikecounter = likecounter + 1;
    setLikeCounter(newlikecounter);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <button onClick={likeClickHandler}> Like Me! </button> {likecounter}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
