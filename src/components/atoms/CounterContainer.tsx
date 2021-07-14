import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { decreaseNumber, increaseNumber } from "../../modules/counter";
import { RootState } from "../../modules";
import CounterApp from "./Counter/CounterApp";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterReducer.number);

  const onIncrease = () => {
    dispatch(increaseNumber());
  };

  const onDecrease = () => {
    dispatch(decreaseNumber());
  };

  return (
    <CounterApp count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
