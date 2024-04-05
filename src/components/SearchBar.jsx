import React from 'react'
import { useContext, useState } from 'react'
import { SearchContext } from '../App'

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext)

  const handleSubmission = (e) => {
    e.preventDefault()
    console.log(search)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmission}>
        <h2 style={{ margin: '1rem 0' }}>OMDB MOVIES</h2>
        <input
          type="text"
          value={search}
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

export default SearchBar
