import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <>
      <h1 data-test-id="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
          Add one 
      </button>
    </>
  );
};
export default Counter;
