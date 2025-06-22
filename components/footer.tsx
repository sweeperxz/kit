import { Monitor, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <div>
                <div className="font-bold text-lg">КІТ</div>
                <div className="text-sm text-gray-400">Кафедра ІТ</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Кафедра комп'ютерних інформаційних технологій - ваш шлях до успішної кар'єри в IT.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакти</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+380 (50) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>kit@university.edu.ua</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>вул. Університетська, 1, Київ</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Швидкі посилання</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <a href="/about" className="hover:text-white transition-colors">
                  Про кафедру
                </a>
              </div>
              <div>
                <a href="/news" className="hover:text-white transition-colors">
                  Новини
                </a>
              </div>
              <div>
                <a href="/gallery" className="hover:text-white transition-colors">
                  Галерея
                </a>
              </div>
              <div>
                <a href="/contacts" className="hover:text-white transition-colors">
                  Контакти
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Кафедра комп'ютерних інформаційних технологій. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
