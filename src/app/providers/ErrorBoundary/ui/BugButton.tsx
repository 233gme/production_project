import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// test ErrorBoundary component
export const BugButton = () => {
  const [error, setError] = useState(false)
  const throwError = () => { setError(!error) }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
      <Button onClick={throwError}>
          {'#####'}
      </Button>
  )
}
