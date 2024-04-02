import { useCallback, useEffect, useState } from 'react'

const useFetchMovie = (url) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const fetchDetails = useCallback(
    async () => {
      try {
        const cachedDetails = localStorage.getItem(url)
        if (cachedDetails) {
          setSelectedMovie(JSON.parse(cachedDetails))
          setIsLoading(false)
        } else {
          const response = await fetch(url)
          if (!response.ok && !selectedMovie) {
            setIsError(true)
            setIsLoading(false)
            return
          }
          const specData = await response.json()
          setSelectedMovie(specData)
          localStorage.setItem(url, JSON.stringify(specData))
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isError, url, setIsLoading]
  )

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  return { isLoading, isError, selectedMovie }
}

export default useFetchMovie
