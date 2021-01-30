import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Vlad",
    age: 27,
    msg: "hello",
  });
  const changeMessage = () => {
    setPerson({ ...person, msg: "new text" });
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h4>{person.msg}</h4>
      <button className="btn" onClick={changeMessage}>
        Change msg
      </button>
    </>
  );
};

export default UseStateObject;
