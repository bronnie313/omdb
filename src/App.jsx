import './App.css'
import MovieCard from './components/MovieCard.jsx'
import MovieDetails from './components/MovieDetails.jsx'
import MovieList from './components/MovieList.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  return (
    <>
      <MovieList />
      <MovieCard />
      <MovieDetails />
      <SearchBar />
    </>
  )
}

export default App
