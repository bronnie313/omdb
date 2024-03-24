import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieDetails, MovieList } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:imdbID" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
