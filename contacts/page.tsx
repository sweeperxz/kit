import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactInfo } from "@/components/contact-info"
import { GoogleMap } from "@/components/google-map"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Контакти</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactInfo />
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  )
}
