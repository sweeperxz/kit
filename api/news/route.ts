import { NextResponse } from "next/server"
import { getAllNews, getFeaturedNews, addNews } from "@/lib/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get("featured")

  try {
    const news = featured === "true" ? await getFeaturedNews() : await getAllNews()
    return NextResponse.json(news)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const news = await addNews(body)

    if (!news) {
      return NextResponse.json({ error: "Failed to create news" }, { status: 500 })
    }

    return NextResponse.json(news, { status: 201 })
  } catch (error) {
    console.error("Error creating news:", error)
    return NextResponse.json({ error: "Failed to create news" }, { status: 500 })
  }
}
