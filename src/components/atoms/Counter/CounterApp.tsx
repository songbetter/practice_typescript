import React from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CounterApp = ({ count, onIncrease, onDecrease }: CounterProps) => {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <label> {count} </label>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default CounterApp;
