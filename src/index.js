import React from 'react'
import ReactDom from 'react-dom'

import "./index.css"

const firstBook = {
  author:"Steve Mann",
  title:"Easy Peasy Puppy Squeezy",
  img:"https://images-eu.ssl-images-amazon.com/images/I/81X9FfdcX%2BL._AC_UL200_SR200,200_.jpg"
}

function BookList(){
  return (
    <section className="booklist">
      <Book 
      author={firstBook.author} 
      title={firstBook.title}
      img={firstBook.img}
      >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum fugiat, deserunt eveniet assumenda aspernatur illo ullam totam a necessitatibus, laborum quod voluptatibus iure corporis asperiores hic dolorum quo repellat doloribus nobis ex.
      </p>
      </Book>
    </section>
  );
}

const Book = ({img, title, author, children}) => {
  return (
  <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {children}
  </article>
  );
}


ReactDom.render(<BookList></BookList>,document.getElementById('root'));