import { useEffect, useState } from 'react'

const useFetchMovie = (url) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok && !selectedMovie) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const specData = await response.json()
        setSelectedMovie(specData)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, isError, selectedMovie }
}

export default useFetchMovie
