import { NextResponse } from "next/server"
import { getAllGalleryItems, addGalleryItem } from "@/lib/database"

export async function GET() {
  try {
    const gallery = await getAllGalleryItems()
    return NextResponse.json(gallery)
  } catch (error) {
    console.error("Error fetching gallery:", error)
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const galleryItem = await addGalleryItem(body)

    if (!galleryItem) {
      return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 })
    }

    return NextResponse.json(galleryItem, { status: 201 })
  } catch (error) {
    console.error("Error creating gallery item:", error)
    return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 })
  }
}
