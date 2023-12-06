import React from 'react'

export default function Movie({movie}) {
  return (
    <div>
      <label>
        {movie.name}
      </label>
    </div>
  )
}
