import { useEffect, useState } from 'react'

const DelayedMessage = ({ delay, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isVisible ? children : null
}

export default DelayedMessage
