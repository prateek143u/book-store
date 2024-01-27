// src/BookDetail.js
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "../css/child.css"

const Child = ({ book, close, setSelectedBook }) => {
console.log(book)

const [harry, setHarry] = useState([]);

    const fetchData2 = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=Harr+potter`
          );
          setHarry(response.data.items || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect(()=>{
        fetchData2()
      },[])
  return (
    <>
    <div className="book-detail">
      <div className="book-info">
       <div className="card">
       <div className="image">
       <img className="img-2" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
       </div>
       <div className="right">
       <h2>{book.volumeInfo.title}</h2>
        <p className='discrip'>{book.volumeInfo.description}</p>
        <div className="buttons">
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            <button>Read Now</button>
          </a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            <button>More Info</button>
          </a>
        </div>
       </div>
       </div>
      </div>
    </div>

    More Books
      <div className="container">
      { harry.map((book) => (
       <NavLink to="/child">
       <div key={book.id} className="book" onClick={() => setSelectedBook(book)}>
          <img className="img"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        </div>
        <child harry={harry} />
       </NavLink>
      ))}
     </div>
</>
  );
};

export default Child;
