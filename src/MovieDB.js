import React from 'react'
import Movie from './Movie'
export default function MovieDB({movies}) {
  return (
    movies.map(movie=>{
        return<Movie key={movie.id} movie={movie}/>
    })
  )
}
