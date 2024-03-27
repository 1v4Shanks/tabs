import React from "react";
import data from "./data.js";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(0);

  function handleSelect(itemId) {
    setSelected(itemId);
  }

  const currentItem = data.find((item) => item.id === selected);
  return (
    <div className="container">
      <h1>
        T<span>A</span>BS
      </h1>
      <div className="tabs-container">
        {data.map((item) => (
          <button
            className={` ${item.id === selected ? "active" : "btn"} `}
            key={item.id}
            onClick={() => handleSelect(item.id)}
          >
            {item.title}
          </button>
        ))}
        <div className="content">
          {currentItem && <p>{currentItem.content}</p>}
        </div>
      </div>
    </div>
  );
}
