import PropTypes from 'prop-types'
import { useState } from 'react'

const SearchBar = ({ setSearch }) => {
  const [searchedMovie, setSearchedMovie] = useState('')
  const handleChange = (e) => {
    setSearchedMovie(e.target.value)
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    setSearch(searchedMovie.trim())
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          value={searchedMovie}
          name="search"
          id="search"
          onChange={handleChange}
          placeholder="Search for movies"
          style={{ padding: '4px', marginRight: '1rem', width: '30%' }}
        />
        <button type="submit" style={{ padding: '4px' }}>
          search
        </button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
}

export default SearchBar
