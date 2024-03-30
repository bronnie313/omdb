import { useState, createContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MovieDetails, MovieList, SearchBar } from './components'

export const SearchContext = createContext()

function App() {
  const [search, setSearch] = useState('')
  const [isDetailsPage, setIsDetailsPage] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsDetailsPage(location.pathname.startsWith('/movies/'))
  }, [location])

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {!isDetailsPage && <SearchBar />}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:imdbID" element={<MovieDetails />} />
      </Routes>
    </SearchContext.Provider>
  )
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp
