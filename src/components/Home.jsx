import { useState } from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="container">
      <h2 style={{ margin: '1rem 0' }}>OMDB MOVIES</h2>
      <SearchBar setSearch={setSearch} search={search} />
      <MovieList search={search} />
    </div>
  )
}

export default Home
