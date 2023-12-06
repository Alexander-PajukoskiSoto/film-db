import { useState, useRef } from 'react';
import MovieDB from './MovieDB'

function App() {
  const [movies, setMovie]= useState([])
  const movieNameRef = useRef()

  function addMovie(e) {
    const name = movieNameRef.current.value;
    if(name==='') return
    console.log(name)
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
