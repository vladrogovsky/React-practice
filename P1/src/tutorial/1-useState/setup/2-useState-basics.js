import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('testing'));
  // const value = useState(1)[0];
  // const handler = useState(1)[0];
  // console.log(value,handler)
  let titles = [
    'some title',
    'new title',
    'one more..',
    'another one!',
    'hello there!',
    'working?',
    'fine..'
  ]
  const handleClick = () => {
    let prevTitleIndex = titles.indexOf(titleText);
    let nextTitleIndex = Math.floor(Math.random() * titles.length);
    while (prevTitleIndex===nextTitleIndex) {
      nextTitleIndex = Math.floor(Math.random() * titles.length);
    }
    let randomTitle = titles[nextTitleIndex];
    setTitleText(randomTitle);
  }
  const [titleText,setTitleText] = useState('some title'); 
  return (
    <React.Fragment>
      <h2>{titleText}</h2>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
