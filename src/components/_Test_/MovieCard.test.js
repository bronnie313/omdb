import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import MovieCard from '../MovieCard.jsx'

describe('MovieCard component', () => {
  it('renders movie title, poster image, and year correctly', () => {
    const mockProps = {
      Poster: 'poster.jpg',
      Title: 'The Redemption',
      Year: '1994',
    }

    render(<MovieCard {...mockProps} />)

    expect(screen.getByText(mockProps.Title)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Poster/i })).toHaveAttribute(
      'src',
      mockProps.Poster
    )
    expect(screen.getByText(mockProps.Year)).toBeInTheDocument()
  })
})
