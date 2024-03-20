import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'

const MovieDetails = () => {
  const { imdbID } = useParams()
  const [selectedMovie, setSelectedMovie] = useState(null)

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
    <div>
      <h2>Details Page</h2>
      {selectedMovie && (
        <>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </>
      )}
      {!selectedMovie && (
        <div>
          <Icon icon="eos-icons:bubble-loading" />
        </div>
      )}
    </div>
  )
}

export default MovieDetails
