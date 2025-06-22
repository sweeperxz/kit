"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { GalleryItem } from "@/lib/database"

interface ImageGalleryProps {
  galleryImages: GalleryItem[]
}

export function ImageGallery({ galleryImages }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  if (galleryImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Галерея порожня</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src={image.image_url || "/placeholder.svg"}
                alt={image.alt_text || image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
              {image.description && <p className="text-gray-600 text-sm">{image.description}</p>}
              {image.category && (
                <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  {image.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage.image_url || "/placeholder.svg"}
              alt={selectedImage.alt_text || selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              {selectedImage.description && <p className="text-gray-300">{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
