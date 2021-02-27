import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainter = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainter.current.value);
  };
  useEffect(() => {
    console.log(refContainter.current);
    refContainter.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="" id="" ref={refContainter} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
