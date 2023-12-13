import React from "react";
import { useState } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export const Counter = () => {
  return (
    <>
      <CounterFunc />
    </>
  );
};
