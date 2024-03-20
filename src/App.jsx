import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieList from './components/MovieList.jsx'
import MovieDetails from './components/MovieDetails.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
