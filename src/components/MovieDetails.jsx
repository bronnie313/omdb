import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import useFetchMovie from './useFetchMovie'

const MovieDetails = () => {
  const { imdbID } = useParams()
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=2fa5119d`

  const { isLoading, isError, selectedMovie } = useFetchMovie(url)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
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
    return (
      <div style={{ fontSize: '25px', marginTop: '8rem', textAlign: 'center' }}>
        There is an error ...
      </div>
    )
  }

  const { Poster, Title, Plot, Genre } = selectedMovie

  return (
    <div className="container-2">
      <NavLink onClick={handleGoBack}>
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
