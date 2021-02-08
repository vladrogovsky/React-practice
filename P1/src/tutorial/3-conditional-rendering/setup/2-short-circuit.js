import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "placeholder text"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>Huge error</h1>}
      {isError ? <p>error true</p> : <p>error false</p>}
    </>
  );
};

export default ShortCircuit;
