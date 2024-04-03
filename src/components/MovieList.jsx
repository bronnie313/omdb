/* eslint react-refresh/only-export-components: "off" */
import { memo, useCallback, useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { SearchContext } from '../App'
import DelayedMessage from './DelayedMessage'

const MovieList = () => {
  const { search } = useContext(SearchContext)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState([])

  const url = `https://www.omdbapi.com/?s=${search}&apikey=2fa5119d`

  const fetchData = useCallback(async () => {
    try {
      const cachedData = sessionStorage.getItem(url)
      if (cachedData) {
        setMovies(JSON.parse(cachedData))
        setIsLoading(false)
      } else {
        const response = await fetch(url)
        if (!response.ok) {
          setIsLoading(false)
          setIsError(true)
          return
        }
        const data = await response.json()
        setMovies(data.Search || [])
        sessionStorage.setItem(url, JSON.stringify(data.Search || []))
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(true)
      console.error(error)
      setIsLoading(false)
    }
  }, [search, url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!search) {
    return (
      <div className="container" style={{ marginTop: '2rem' }}>
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
    return <h3 className="container">There was an error .. </h3>
  }

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search)
  )

  return (
    <div className="container">
      {filteredMovies.length > 0 ? (
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
      ) : (
        <div className="container" style={{ marginTop: '2rem' }}>
          <DelayedMessage delay={5000}>
            <p>No movie found for {search}</p>
          </DelayedMessage>
        </div>
      )}
    </div>
  )
}

export default memo(MovieList)
