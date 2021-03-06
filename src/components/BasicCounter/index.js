import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function BasicCounter() {
  useDocumentTitle(count);
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => Math.max(0, count - 1));
  }
  return (
    <div>
      <h4>Basic Counter</h4>
      <button onClick={decrement}>Less</button>
      <output>{count}</output>
      <button onClick={increment}>More</button>
    </div>
  );
}

export default BasicCounter;
