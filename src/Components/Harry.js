import React,{useState, useEffect} from 'react'
import axios from "axios";
import "../css/Display.css";
import { NavLink} from 'react-router-dom';

function Harry({setSelectedBook}) {
    const [harry, setHarry] = useState([]);

    const fetchData2 = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes`
          );
          setHarry(response.data.items || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      useEffect(() => {
        fetchData2();
      }, []);


  return (
    <div>
    
     {
        harry[0] && harry[1] && harry[2] &&
        <div className='header'>
     <div className="harry">
     <img className='img2' src={harry[0].volumeInfo.imageLinks.thumbnail} />
     <div className="box">
     <p className='title'>Tittle</p>
     <p className='harry-title'>{harry[0].volumeInfo.description}</p>
     <NavLink to="/child">
     <button onClick={() => setSelectedBook(harry[0])}>Read More</button>
     </NavLink>
     </div>
     </div>

     <div className="harry">
     <img className='img2' src={harry[1].volumeInfo.imageLinks.thumbnail} />
     <div className="box">
     <p className='title'>Tittle</p>
     <p className='harry-title'>{harry[1].volumeInfo.description}</p>
     <button onClick={() => setSelectedBook(harry[1])}>Read More</button>
     </div>
     </div>

     <div className="harry">
     <img className='img2' src={harry[2].volumeInfo.imageLinks.thumbnail} />
     <div className="box">
     <p className='title'>Tittle</p>
     <p className='harry-title'>{harry[2].volumeInfo.description}</p>
     <button onClick={() => setSelectedBook(harry[2])}>Read More</button>
     </div>
     </div>
     </div>
     }
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
    </div>
  )
}

export default Harry
