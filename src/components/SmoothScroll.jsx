import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

function LenisBridge({ hash, pathname }) {
  const lenis = useLenis(ScrollTrigger.update)

  useEffect(() => {
    if (!lenis) return undefined

    const update = (time) => lenis.raf(time * 1000)

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(update)
  }, [lenis])

  useEffect(() => {
    if (!lenis) return undefined

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        lenis.scrollTo(hash, { immediate: true, offset: -96 })
      } else {
        lenis.scrollTo(0, { immediate: true })
      }

      ScrollTrigger.refresh()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, lenis, pathname])

  return null
}

export default function SmoothScroll({ children }) {
  const location = useLocation()
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(query.matches)

    query.addEventListener('change', updatePreference)
    return () => query.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) window.scrollTo(0, 0)
  }, [location.pathname, reducedMotion])

  if (reducedMotion) return children

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.25,
        anchors: true,
      }}
    >
      <LenisBridge hash={location.hash} pathname={location.pathname} />
      {children}
    </ReactLenis>
  )
}
