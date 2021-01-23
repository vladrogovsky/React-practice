import React from 'react'

export const Book = ( {img, title, author, children}) => {
  const clickHandler = (x) => {
    alert(x);
  }
  return (
  <article className="book" onMouseOver={()=>{
    console.log("hover");
  }}>
    <img src={img} alt=""/>
    <h1 onClick={()=>{
      alert("h1 "+title);
    }}>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {children}
    <button type="button" onClick={()=>clickHandler("dadsa")}>Btn</button>
  </article>
  );
}

export default Book