import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'

const MovieDetails = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { imdbID } = useParams()
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=2fa5119d`
        )
        if (!response.ok && !selectedMovie) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const specData = await response.json()
        setSelectedMovie(specData)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchDetails()
  }, []) /*including imdID and selectedMovie in the dependency array causes an infinite loop */

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
    return (
      <div style={{ fontSize: '25px', marginTop: '8rem', textAlign: 'center' }}>
        There is an error ...
      </div>
    )
  }

  const { Poster, Title, Plot, Genre } = selectedMovie

  return (
    <div className="container-2">
      <NavLink to="/">
        <Icon className="icon" icon="icon-park-solid:back" />
      </NavLink>
      <div className="details">
        <div className="details-wrapper">
          <img src={Poster} alt={Title} />
          <div className="info">
            <h2 style={{ fontFamily: 'cursive' }}>{Title}</h2>
            <p>{Plot}</p>
            <h4>{Genre}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
