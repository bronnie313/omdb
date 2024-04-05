import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar.jsx'
import { SearchContext } from '../../App.jsx'

describe('SearchBar component', () => {
  const mockSearch = 'Avengers'
  const setSearch = jest.fn()

  test('renders SearchBar correctly', () => {
    const { container } = render(
      <SearchContext.Provider value={{ search: '', setSearch: () => {} }}>
        <SearchBar />
      </SearchContext.Provider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('calls setSearch function with correct search value when input changes', () => {
    render(
      <SearchContext.Provider value={{ search: '', setSearch }}>
        <SearchBar />
      </SearchContext.Provider>
    )
    const input = screen.getByPlaceholderText('Search for movies')
    fireEvent.change(input, { target: { value: mockSearch } })
    expect(setSearch).toHaveBeenCalledWith(mockSearch)
  })
})
