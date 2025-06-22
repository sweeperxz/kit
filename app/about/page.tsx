import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Про кафедру</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Наша місія</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Кафедра комп'ютерних інформаційних технологій забезпечує високоякісну освіту в галузі інформаційних
                  технологій, готуючи кваліфікованих спеціалістів для сучасного цифрового світу.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Наші цілі</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Розвиток інноваційних методів навчання, проведення наукових досліджень та підготовка
                  конкурентоспроможних фахівців в галузі IT.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Історія кафедри</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Кафедра комп'ютерних інформаційних технологій була заснована у 2005 році з метою підготовки
                висококваліфікованих спеціалістів в галузі інформаційних технологій.
              </p>
              <p className="text-gray-600 mb-4">
                За роки свого існування кафедра підготувала понад 1000 випускників, які успішно працюють в провідних
                IT-компаніях України та світу.
              </p>
              <p className="text-gray-600">
                Сьогодні кафедра продовжує розвиватися, впроваджуючи сучасні технології навчання та наукових досліджень.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Викладачів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Студентів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Випускників</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
