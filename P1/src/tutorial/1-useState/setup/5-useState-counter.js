import React, { useState } from "react";

const UseStateCounter = () => {
  const complexIncrese = () => {
    setTimeout(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };
  const [value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            if (value > 0) setValue(value - 1);
            else setValue(0);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increse
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter 2.0</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrese}>
          increse layer
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
