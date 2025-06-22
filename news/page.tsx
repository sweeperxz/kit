import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsGrid } from "@/components/news-grid"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Новини</h1>
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}
