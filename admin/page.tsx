"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

const categories = ["Наука", "Студенти", "Обладнання", "Події", "Партнерство", "Освіта", "Стартапи", "Міжнародне"]

export default function AdminPage() {
  const [databaseAvailable, setDatabaseAvailable] = useState(true)
  const [newsForm, setNewsForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    image_url: "",
    is_featured: false,
  })

  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    image_url: "",
    alt_text: "",
    category: "",
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if database is available
    const checkDatabase = async () => {
      try {
        const response = await fetch("/api/news")
        if (!response.ok) {
          setDatabaseAvailable(false)
        }
      } catch (error) {
        setDatabaseAvailable(false)
      }
    }
    checkDatabase()
  }, [])

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newsForm,
          date: new Date().toISOString().split("T")[0],
        }),
      })

      if (response.ok) {
        alert("Новину успішно додано!")
        setNewsForm({
          title: "",
          excerpt: "",
          content: "",
          author: "",
          category: "",
          image_url: "",
          is_featured: false,
        })
      } else {
        alert("Помилка при додаванні новини")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Помилка при додаванні новини")
    } finally {
      setLoading(false)
    }
  }

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(galleryForm),
      })

      if (response.ok) {
        alert("Зображення успішно додано!")
        setGalleryForm({
          title: "",
          description: "",
          image_url: "",
          alt_text: "",
          category: "",
        })
      } else {
        alert("Помилка при додаванні зображення")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Помилка при додаванні зображення")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Адміністративна панель</h1>

        {!databaseAvailable && (
          <Alert className="max-w-4xl mx-auto mb-6">
            <AlertDescription>
              База даних недоступна. Для повної функціональності адміністративної панелі необхідно налаштувати
              підключення до Neon DB.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="news" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="news">Додати новину</TabsTrigger>
            <TabsTrigger value="gallery">Додати зображення</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle>Додати нову новину</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Заголовок</Label>
                    <Input
                      id="title"
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Короткий опис</Label>
                    <Textarea
                      id="excerpt"
                      value={newsForm.excerpt}
                      onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Повний текст</Label>
                    <Textarea
                      id="content"
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="author">Автор</Label>
                    <Input
                      id="author"
                      value={newsForm.author}
                      onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Категорія</Label>
                    <Select
                      value={newsForm.category}
                      onValueChange={(value) => setNewsForm({ ...newsForm, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть категорію" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="image_url">URL зображення</Label>
                    <Input
                      id="image_url"
                      value={newsForm.image_url}
                      onChange={(e) => setNewsForm({ ...newsForm, image_url: e.target.value })}
                      placeholder="/placeholder.svg?height=400&width=600"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_featured"
                      checked={newsForm.is_featured}
                      onCheckedChange={(checked) => setNewsForm({ ...newsForm, is_featured: checked })}
                    />
                    <Label htmlFor="is_featured">Головна новина</Label>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Додавання..." : "Додати новину"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Додати зображення до галереї</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGallerySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="gallery_title">Назва</Label>
                    <Input
                      id="gallery_title"
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Опис</Label>
                    <Textarea
                      id="description"
                      value={galleryForm.description}
                      onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="gallery_image_url">URL зображення</Label>
                    <Input
                      id="gallery_image_url"
                      value={galleryForm.image_url}
                      onChange={(e) => setGalleryForm({ ...galleryForm, image_url: e.target.value })}
                      placeholder="/placeholder.svg?height=400&width=600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="alt_text">Alt текст</Label>
                    <Input
                      id="alt_text"
                      value={galleryForm.alt_text}
                      onChange={(e) => setGalleryForm({ ...galleryForm, alt_text: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="gallery_category">Категорія</Label>
                    <Input
                      id="gallery_category"
                      value={galleryForm.category}
                      onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                      placeholder="Лабораторії, Аудиторії, Події..."
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Додавання..." : "Додати зображення"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
