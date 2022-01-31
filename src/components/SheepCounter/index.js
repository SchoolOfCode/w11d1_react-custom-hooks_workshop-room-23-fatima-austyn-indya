import { useState } from "react";
import useCounter from "../../hooks/useCounter.js";
import sheep from "./sheep.svg";

function SheepCounter() {
  const counter = useCounter();
  return (
    <div>
      <h4>Sheep Counter</h4>
      <button onClick={counter.decrement}>Less</button>
      <button onClick={counter.increment}>More</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(counter.count)
          .fill()
          .map((_, i) => {
            return (
              <img
                src={sheep}
                key={i}
                alt={`sheep number ${i + 1}`}
                style={{ width: "50px" }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SheepCounter;
