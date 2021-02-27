import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setpeople] = useState(data);
  const removePerson = (id) => {
    setpeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            removePerson={removePerson}
            {...person}
          ></SinglePerson>
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="button" onClick={() => removePerson(id)}>
        del
      </button>
    </div>
  );
};

export default PropDrilling;
