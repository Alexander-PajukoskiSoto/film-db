import { useState, useRef } from 'react';
import MovieDB from './MovieDB'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovie]= useState([])
  const movieNameRef = useRef()

  function addMovie(e) {
    const name = movieNameRef.current.value;
    if(name==='') return
    setMovie(prevMovie=>{
      return [...prevMovie,{id:uuidv4(),name:name}]
    })
    movieNameRef.current.value = null;
  }
  return (
    <>
      <MovieDB movies={movies}/>
      <input ref={movieNameRef} type='text' />
      <button onClick={addMovie}>Add Movie</button>
      <button>Clear Movie</button>
    </>
  );
}

export default App;
