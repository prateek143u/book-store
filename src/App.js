import React,{useState, useEffect} from 'react'
import Search from './Components/Search'
import Display from './Components/Display'
import Harry from './Components/Harry'
import { Routes, Route } from 'react-router-dom'
import Child from './Components/child'

function App() {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  
  return (
    <div>
      <Search setData={setData} />
      <Routes>
      {selectedBook &&
       <Route path='/child' element={<Child book={selectedBook}  setSelectedBook={setSelectedBook} />} />
     }
        <Route path='/Display' element={<Display data={data}  setSelectedBook={setSelectedBook}/>} />
        <Route path='/' element={<Harry  setSelectedBook={setSelectedBook}/>} />
      </Routes>
    </div>
  )
}

export default App
