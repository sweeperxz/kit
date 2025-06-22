import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, User } from "lucide-react"
import { getLeadershipContacts, getAllContacts } from "@/lib/database"

export async function ContactInfo() {
  const leadershipContacts = await getLeadershipContacts()
  const allContacts = await getAllContacts()
  const otherContacts = allContacts.filter((contact) => !contact.is_leadership)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Контактна інформація</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Адреса</div>
              <div className="text-gray-600">вул. Університетська, 1, Київ, 01601</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Телефон</div>
              <div className="text-gray-600">+380 (44) 123-45-67</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-gray-600">kit@university.edu.ua</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Години роботи</div>
              <div className="text-gray-600">Пн-Пт: 8:00 - 17:00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Керівництво кафедри</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {leadershipContacts.map((contact) => (
            <div key={contact.id} className="flex items-start space-x-3">
              <User className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <div className="font-medium">{contact.position}</div>
                <div className="text-gray-600">{contact.name}</div>
                {contact.email && <div className="text-sm text-gray-500">{contact.email}</div>}
                {contact.phone && <div className="text-sm text-gray-500">{contact.phone}</div>}
                {contact.office && <div className="text-sm text-gray-500">Кабінет: {contact.office}</div>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {otherContacts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Викладачі кафедри</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {otherContacts.map((contact) => (
              <div key={contact.id} className="flex items-start space-x-3">
                <User className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-gray-600">{contact.position}</div>
                  {contact.email && <div className="text-sm text-gray-500">{contact.email}</div>}
                  {contact.office && <div className="text-sm text-gray-500">Кабінет: {contact.office}</div>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
