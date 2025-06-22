import { neon } from "@neondatabase/serverless"

// Check if DATABASE_URL is available, but don't throw error immediately
const DATABASE_URL = process.env.DATABASE_URL

let sql: any = null

if (DATABASE_URL) {
  sql = neon(DATABASE_URL)
} else {
  console.warn("DATABASE_URL environment variable is not set. Using fallback data.")
}

// Add fallback data for when database is not available
const fallbackNews = [
  {
    id: 1,
    title: "Кафедра КІТ отримала грант на дослідження штучного інтелекту",
    excerpt:
      "Наша кафедра успішно отримала державний грант у розмірі 2 млн грн на проведення досліджень в галузі штучного інтелекту та машинного навчання.",
    content: "Повний текст новини...",
    date: "2024-12-10",
    author: "Проф. Іванов І.І.",
    category: "Наука",
    image_url: "/placeholder.svg?height=400&width=600",
    is_featured: true,
    created_at: "2024-12-10T10:00:00Z",
    updated_at: "2024-12-10T10:00:00Z",
  },
  // Add more fallback news items...
]

const fallbackGallery = [
  {
    id: 1,
    title: "Комп'ютерна лабораторія",
    description: "Сучасна комп'ютерна лабораторія з новітнім обладнанням",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "Комп'ютерна лабораторія",
    category: "Лабораторії",
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 2,
    title: "Лекційна аудиторія",
    description: "Просторі аудиторії для проведення лекцій та семінарів",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "Лекційна аудиторія",
    category: "Аудиторії",
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 3,
    title: "VR лабораторія",
    description: "Лабораторія віртуальної та доповненої реальності",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "VR лабораторія",
    category: "Лабораторії",
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 4,
    title: "Студентські проекти",
    description: "Презентація студентських проектів",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "Студентські проекти",
    category: "Події",
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 5,
    title: "Конференц-зал",
    description: "Зал для проведення конференцій та заходів",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "Конференц-зал",
    category: "Аудиторії",
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 6,
    title: "Робоче місце",
    description: "Індивідуальні робочі місця для студентів",
    image_url: "/placeholder.svg?height=400&width=600",
    alt_text: "Робоче місце",
    category: "Лабораторії",
    created_at: "2024-12-10T10:00:00Z",
  },
]

const fallbackContacts = [
  {
    id: 1,
    name: "Сидоров Володимир Петрович",
    position: "Завідувач кафедри",
    email: "sidorov@university.edu.ua",
    phone: "+380 (44) 123-45-67",
    office: "301",
    is_leadership: true,
    order_index: 1,
    created_at: "2024-12-10T10:00:00Z",
  },
  {
    id: 2,
    name: "Іванов Іван Іванович",
    position: "Заступник завідувача кафедри",
    email: "ivanov@university.edu.ua",
    phone: "+380 (44) 123-45-68",
    office: "302",
    is_leadership: true,
    order_index: 2,
    created_at: "2024-12-10T10:00:00Z",
  },
]

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  author: string
  category: string
  image_url?: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface GalleryItem {
  id: number
  title: string
  description?: string
  image_url: string
  alt_text?: string
  category?: string
  created_at: string
}

export interface Contact {
  id: number
  name: string
  position: string
  email?: string
  phone?: string
  office?: string
  is_leadership: boolean
  order_index: number
  created_at: string
}

export interface NewsCategory {
  id: number
  name: string
  color: string
  created_at: string
}

// Update all database functions to use fallback data when database is not available

export async function getAllNews(): Promise<NewsItem[]> {
  if (!sql) {
    console.log("Using fallback news data")
    return fallbackNews
  }

  try {
    const result = await sql`
      SELECT * FROM news 
      ORDER BY date DESC, created_at DESC
    `
    return result as NewsItem[]
  } catch (error) {
    console.error("Error fetching news:", error)
    console.log("Falling back to static data")
    return fallbackNews
  }
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
  if (!sql) {
    console.log("Using fallback featured news data")
    return fallbackNews.filter((news) => news.is_featured).slice(0, 10)
  }

  try {
    const result = await sql`
      SELECT * FROM news 
      WHERE is_featured = true 
      ORDER BY date DESC, created_at DESC
      LIMIT 10
    `
    return result as NewsItem[]
  } catch (error) {
    console.error("Error fetching featured news:", error)
    console.log("Falling back to static data")
    return fallbackNews.filter((news) => news.is_featured).slice(0, 10)
  }
}

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  if (!sql) {
    console.log("Using fallback gallery data")
    return fallbackGallery
  }

  try {
    const result = await sql`
      SELECT * FROM gallery 
      ORDER BY created_at DESC
    `
    return result as GalleryItem[]
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    console.log("Falling back to static data")
    return fallbackGallery
  }
}

export async function getAllContacts(): Promise<Contact[]> {
  if (!sql) {
    console.log("Using fallback contacts data")
    return fallbackContacts
  }

  try {
    const result = await sql`
      SELECT * FROM contacts 
      ORDER BY order_index ASC, name ASC
    `
    return result as Contact[]
  } catch (error) {
    console.error("Error fetching contacts:", error)
    console.log("Falling back to static data")
    return fallbackContacts
  }
}

export async function getLeadershipContacts(): Promise<Contact[]> {
  if (!sql) {
    console.log("Using fallback leadership contacts data")
    return fallbackContacts.filter((contact) => contact.is_leadership)
  }

  try {
    const result = await sql`
      SELECT * FROM contacts 
      WHERE is_leadership = true
      ORDER BY order_index ASC
    `
    return result as Contact[]
  } catch (error) {
    console.error("Error fetching leadership contacts:", error)
    console.log("Falling back to static data")
    return fallbackContacts.filter((contact) => contact.is_leadership)
  }
}

// Update other functions with similar fallback logic
export async function getNewsById(id: number): Promise<NewsItem | null> {
  if (!sql) {
    return fallbackNews.find((news) => news.id === id) || null
  }

  try {
    const result = await sql`
      SELECT * FROM news WHERE id = ${id}
    `
    return (result[0] as NewsItem) || null
  } catch (error) {
    console.error("Error fetching news by id:", error)
    return fallbackNews.find((news) => news.id === id) || null
  }
}

export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
  if (!sql) {
    return fallbackNews.filter((news) => news.category === category)
  }

  try {
    const result = await sql`
      SELECT * FROM news 
      WHERE category = ${category}
      ORDER BY date DESC, created_at DESC
    `
    return result as NewsItem[]
  } catch (error) {
    console.error("Error fetching news by category:", error)
    return fallbackNews.filter((news) => news.category === category)
  }
}

export async function getGalleryByCategory(category: string): Promise<GalleryItem[]> {
  if (!sql) {
    return fallbackGallery.filter((item) => item.category === category)
  }

  try {
    const result = await sql`
      SELECT * FROM gallery 
      WHERE category = ${category}
      ORDER BY created_at DESC
    `
    return result as GalleryItem[]
  } catch (error) {
    console.error("Error fetching gallery by category:", error)
    return fallbackGallery.filter((item) => item.category === category)
  }
}

export async function getAllNewsCategories(): Promise<NewsCategory[]> {
  const fallbackCategories = [
    { id: 1, name: "Наука", color: "blue", created_at: "2024-12-10T10:00:00Z" },
    { id: 2, name: "Студенти", color: "green", created_at: "2024-12-10T10:00:00Z" },
    { id: 3, name: "Обладнання", color: "purple", created_at: "2024-12-10T10:00:00Z" },
    { id: 4, name: "Події", color: "orange", created_at: "2024-12-10T10:00:00Z" },
  ]

  if (!sql) {
    return fallbackCategories
  }

  try {
    const result = await sql`
      SELECT * FROM news_categories 
      ORDER BY name ASC
    `
    return result as NewsCategory[]
  } catch (error) {
    console.error("Error fetching news categories:", error)
    return fallbackCategories
  }
}

// Admin functions - only work with database
export async function addNews(news: Omit<NewsItem, "id" | "created_at" | "updated_at">): Promise<NewsItem | null> {
  if (!sql) {
    console.error("Database not available for adding news")
    return null
  }

  try {
    const result = await sql`
      INSERT INTO news (title, excerpt, content, date, author, category, image_url, is_featured)
      VALUES (${news.title}, ${news.excerpt}, ${news.content || ""}, ${news.date}, ${news.author}, ${news.category}, ${news.image_url || ""}, ${news.is_featured})
      RETURNING *
    `
    return result[0] as NewsItem
  } catch (error) {
    console.error("Error adding news:", error)
    return null
  }
}

export async function addGalleryItem(item: Omit<GalleryItem, "id" | "created_at">): Promise<GalleryItem | null> {
  if (!sql) {
    console.error("Database not available for adding gallery item")
    return null
  }

  try {
    const result = await sql`
      INSERT INTO gallery (title, description, image_url, alt_text, category)
      VALUES (${item.title}, ${item.description || ""}, ${item.image_url}, ${item.alt_text || ""}, ${item.category || ""})
      RETURNING *
    `
    return result[0] as GalleryItem
  } catch (error) {
    console.error("Error adding gallery item:", error)
    return null
  }
}

export { sql }
