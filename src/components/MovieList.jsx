import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'

const url = 'https://www.omdbapi.com/?s=boys&apikey=2fa5119d'

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
    <div className="container">
      <h2 style={{ margin: '1rem 0' }}>OMDB MOVIES</h2>
      <SearchBar />
      <ul className="movies">
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
