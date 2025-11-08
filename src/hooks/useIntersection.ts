import { useEffect, useRef, useState } from 'react'

interface IntersectionOptions {
  threshold?: number
  rootMargin?: string
}

export const useIntersection = (
  options: IntersectionOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Once visible, stop observing
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}
