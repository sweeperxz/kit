import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { getAllGalleryItems } from "@/lib/database"

export default async function GalleryPage() {
  const galleryImages = await getAllGalleryItems()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Галерея</h1>
        <ImageGallery galleryImages={galleryImages} />
      </main>
      <Footer />
    </div>
  )
}
