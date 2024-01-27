import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Display.css";

function Display({ data, setSelectedBook }) {

  return (
    <div>

    <h1>More Book</h1>
     <div className="container">
      {data && data.map((book) => (
        <NavLink to="/child">
        <div key={book.id} className="book" onClick={() => setSelectedBook(book)}>
          <img className="img"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        </div>
        </NavLink>
      ))}
     </div>
      
    </div>
  );
}

//premchand

export default Display;
