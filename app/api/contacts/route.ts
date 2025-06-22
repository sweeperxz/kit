import { NextResponse } from "next/server"
import { getAllContacts, getLeadershipContacts } from "@/lib/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const leadership = searchParams.get("leadership")

  try {
    const contacts = leadership === "true" ? await getLeadershipContacts() : await getAllContacts()
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
