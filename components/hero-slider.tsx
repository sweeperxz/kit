"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Сучасні технології навчання",
    description: "Використовуємо найновіші методи та технології для підготовки IT-спеціалістів",
    image: "/placeholder.svg?height=600&width=1200",
    bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Наукові дослідження",
    description: "Проводимо передові дослідження в галузі штучного інтелекту та машинного навчання",
    image: "/placeholder.svg?height=600&width=1200",
    bgColor: "bg-gradient-to-r from-green-600 to-blue-600",
  },
  {
    id: 3,
    title: "Практичний досвід",
    description: "Забезпечуємо студентів реальним досвідом роботи з провідними IT-компаніями",
    image: "/placeholder.svg?height=600&width=1200",
    bgColor: "bg-gradient-to-r from-purple-600 to-pink-600",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center`}>
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
              <Button size="lg" variant="secondary">
                Дізнатися більше
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
