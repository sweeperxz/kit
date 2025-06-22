import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import { getAllNews } from "@/lib/database"

export async function NewsGrid() {
  const news = await getAllNews()

  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Новини не знайдено</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((newsItem) => (
        <Card key={newsItem.id} className="hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            <img
              src={newsItem.image_url || "/placeholder.svg?height=300&width=500"}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{newsItem.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(newsItem.date).toLocaleDateString("uk-UA")}
              </div>
            </div>
            <CardTitle className="text-lg leading-tight">{newsItem.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-4">{newsItem.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-1" />
              {newsItem.author}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
