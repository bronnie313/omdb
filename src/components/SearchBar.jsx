import PropTypes from 'prop-types'

const SearchBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value)
  }

  const resetSearchInput = () => {
    setSearch('')
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    setSearch(e.target.name)
    resetSearchInput()
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          value={search}
          name="search"
          id="search"
          onChange={handleChange}
          placeholder="Search for movies"
        />
        <button type="submit">search</button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
}

export default SearchBar
