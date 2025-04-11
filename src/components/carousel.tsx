"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  items: React.ReactNode[]
  interval?: number
  className?: string
  showControls?: boolean
  showIndicators?: boolean
}

export default function Carousel({
  items,
  interval = 5000,
  className,
  showControls = true,
  showIndicators = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const itemsPerPage = 1
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const goToPage = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, interval, isPlaying])

  const startIndex = currentIndex * itemsPerPage
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0%)` }}>
          <div className="w-full flex gap-4">
            {visibleItems.map((item, index) => (
              <div key={startIndex + index} className="flex-1">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showControls && items.length > itemsPerPage && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 rounded-full p-1 shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-emerald-900" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 rounded-full p-1 shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-emerald-900" />
          </button>
        </>
      )}

      {showIndicators && totalPages > 1 && (
        <div className="flex justify-center gap-1 mt-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index ? "bg-emerald-600 w-4" : "bg-emerald-200",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
