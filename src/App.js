import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'
import Addnewmovie from './components/Addnewmovie';
import Filter from './components/Filter';
import Intro from './components/Intro';
import MovieList from './components/MovieList';
import Navbar01 from './components/Navbar01';
import {moviesData} from './Data'

function App() {
  const [Movies, setMovies] = useState(moviesData)
  const Addnew=(x)=>{
    return setMovies([...Movies,x])
  }
  const fil=(r,t)=>{
    
    return setMovies(Movies.filter(el=>el.rate >= r && el.title.toLowerCase().includes(t)  ))
  }
  return (
    <div style={{backgroundColor: '#A2AAFF'}}>
      <Navbar01 />
      <p align="center"><Intro /></p>
      <h3>Search by Rating</h3>
      <Filter funfil={fil} />
      <h3>You can Add new movie:</h3>
      <Addnewmovie fun={Addnew}/>
      <MovieList movies={Movies} />
    </div>
  )
}

export default App







