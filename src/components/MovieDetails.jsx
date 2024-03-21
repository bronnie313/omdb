import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'

const MovieDetails = () => {
  const { imdbID } = useParams()
  const [selectedMovie, setSelectedMovie] = useState(null)
  console.log(selectedMovie)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=2fa5119d`
        )
        const specData = await response.json()
        setSelectedMovie(specData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetails()
  }, [imdbID])

  return (
    <div className="container-2">
      <NavLink to="/">
        <Icon className="icon" icon="icon-park-solid:back" />
      </NavLink>
      {selectedMovie && (
        <div className="details">
          <div className="details-wrapper">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <div className="info">
              <h2 style={{ fontFamily: 'cursive' }}>{selectedMovie.Title}</h2>
              <p>{selectedMovie.Plot}</p>
              <h4>{selectedMovie.Genre}</h4>
            </div>
          </div>
        </div>
      )}
      {!selectedMovie && (
        <div style={{ marginTop: '10rem' }}>
          <Icon icon="eos-icons:bubble-loading" fontSize={'2rem'} />
        </div>
      )}
    </div>
  )
}

export default MovieDetails
