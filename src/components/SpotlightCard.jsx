import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(79, 70, 229, 0.14)' }) {
  const cardRef = useRef(null)

  const handlePointerMove = (event) => {
    if (!cardRef.current) return
    const bounds = cardRef.current.getBoundingClientRect()
    cardRef.current.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
    cardRef.current.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
    cardRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div ref={cardRef} onPointerMove={handlePointerMove} className={`workaidly-spotlight-card ${className}`}>
      {children}
    </div>
  )
}
