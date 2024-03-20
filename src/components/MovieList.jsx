import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const url = 'https://www.omdbapi.com/?s=man&apikey=2fa5119d'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setMovies(data.Search)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>OMDB MOVIES</h2>
      <ul>
        {movies.map((movie) => {
          console.log(movie)
          const { Poster, imdbID, Title, Year } = movie
          return (
            <li key={imdbID}>
              <MovieCard Poster={Poster} Title={Title} Year={Year} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
