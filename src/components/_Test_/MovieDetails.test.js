import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieDetails from '../MovieDetails'

test('renders MovieDetails correctly', () => {
  const mockMovieData = {
    imdbID: 'tt1234567',
    Poster: 'poster.jpg',
    Title: 'Papillon',
    Plot: 'This is a mock movie plot',
    Genre: 'Comedy',
  }

  const { container } = render(
    <BrowserRouter>
      <MovieDetails />
    </BrowserRouter>
  )

  expect(container.firstChild).toMatchSnapshot()
})
