import React, {useEffect, useState} from 'react'
import axios from 'axios';
import "../css/Search.css"
import { NavLink } from "react-router-dom";

function Search({setData}) {
    const [book, setBook] = useState("");

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${book}`
          );
          setData(response.data.items || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  return (
    <div>
      <div className='nav-baar' >
      <img src={require("../image/logo.png")} />
      <img src={require("../image/name.png")} />
      <div className="action">
      <input type='text' value={book} placeholder='Search any book as you want' onChange={(e)=>setBook(e.target.value)} />
      <NavLink to="/Display">
      <button onClick={fetchData}>Search</button>
      </NavLink>
      </div>
      <img src={require("../image/heart.png")} />
      <img src={require("../image/bell.png")} />
      <img src={require("../image/diamond.png")} />
      <img src={require("../image/profile.png")} />
      </div>
     
    </div>
  )
}

export default Search
