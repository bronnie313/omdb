import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'

const url = 'https://www.omdbapi.com/?s=horses&apikey=2fa5119d'

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setIsLoading(false)
          setIsError(true)
          return
        }
        const data = await response.json()
        setMovies(data.Search)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div style={{ marginTop: '9rem', textAlign: 'center' }}>
        <Icon icon="eos-icons:bubble-loading" fontSize={'2rem'} />
        <div style={{ marginTop: '1rem' }}></div>
        <p>loading</p>
      </div>
    )
  }

  if (isError) {
    return <h3>There was an error .. </h3>
  }

  return (
    <div className="container">
      <h2 style={{ margin: '1rem 0' }}>OMDB MOVIES</h2>
      <SearchBar />
      <ul className="movies">
        {movies.map((movie) => {
          const { Poster, imdbID, Title, Year } = movie
          return (
            <li key={imdbID}>
              <NavLink to={`./movies/${imdbID}`}>
                <MovieCard Poster={Poster} Title={Title} Year={Year} />
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
