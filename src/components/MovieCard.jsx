// import React from 'react'

const MovieCard = ({ Poster, Title, Year }) => {
  return (
    <div>
      <h2>{Title}</h2>
      <img src={Poster} alt="Poster" />
      <p>{Year}</p>
    </div>
  )
}

export default MovieCard
