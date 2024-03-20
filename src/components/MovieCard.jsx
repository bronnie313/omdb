// import React from 'react'
import PropTypes from 'prop-types'

const MovieCard = ({ Poster, Title, Year }) => {
  return (
    <div>
      <h3
        style={{ margin: '1rem 0', fontFamily: 'cursive', fontSize: 'medium' }}
      >
        {Title}
      </h3>
      <div className="img-container">
        <img src={Poster} alt="Poster" />
      </div>
      <div>
        <p style={{ fontSize: 'larger', color: 'seagreen', fontWeight: '700' }}>
          {Year}
        </p>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
}

export default MovieCard
