import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const MovieList = ({ search }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState([])

  const searchInput = `${search}`
  const searchValue = searchInput.trim().toLowerCase()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchValue}&apikey=2fa5119d`
        )
        if (!response.ok) {
          setIsLoading(false)
          setIsError(true)
          return
        }
        const data = await response.json()
        setMovies(data.Search || [])
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [searchValue])

  if (!search) {
    return (
      <div style={{ marginTop: '2rem' }}>
        <p>Please search for a Movie or a group of movies that you want</p>
      </div>
    )
  }

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

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchValue)
  )

  if (filteredMovies.length === 0) {
    return (
      <div style={{ marginTop: '2rem' }}>
        <p>No movie found for {searchValue}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <ul className="movies">
        {filteredMovies.map((movie) => {
          const { Poster, imdbID, Title, Year } = movie
          return (
            <NavLink to={`./movies/${imdbID}`} key={movie.imdbID}>
              <li>
                <MovieCard
                  Poster={Poster}
                  Title={Title}
                  Year={Year}
                  key={movie.imdbID}
                />
              </li>
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

MovieList.propTypes = {
  search: PropTypes.string.isRequired,
}

export default MovieList
