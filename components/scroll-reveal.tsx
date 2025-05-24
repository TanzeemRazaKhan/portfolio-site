"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (direction) {
      case "up":
        return "animate-slide-up"
      case "down":
        return "animate-slide-down"
      case "left":
        return "animate-slide-in-left"
      case "right":
        return "animate-slide-in-right"
      case "scale":
        return "animate-scale-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div ref={ref} className={`transition-all duration-800 ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
