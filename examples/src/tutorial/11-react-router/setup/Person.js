import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setname] = useState("no name");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.filter((person) => person.id == id);
    setname(newPerson[0].name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
