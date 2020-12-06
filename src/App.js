import React, { useState } from "react";
import "./styles.css";

var shoppingList = ["milk", "sugar", "candy"];

export default function App() {
  return (
    <div className="App">
      <h1>inside outt!</h1>
      <ul>
        {shoppingList.map((item) => {
          return <li> {item} </li>;
        })}
      </ul>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
