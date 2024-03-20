import './App.css'
import MovieDetails from './components/MovieDetails.jsx'
import MovieList from './components/MovieList.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  return (
    <>
      <MovieList />
      <MovieDetails />
      <SearchBar />
    </>
  )
}

export default App
