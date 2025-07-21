import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png" 
                  alt="АКСИОСТВ" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <Link to="/smartyard">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                Умный двор
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  АКСИОСТВ
                </span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Лидер в области умной видеодомофонии и видеонаблюдения
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Home" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Умный двор</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-700 text-lg">
                    Комплексная система безопасности для многоквартирных домов с видеодомофоном, 
                    видеонаблюдением и мобильным приложением
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">Бесплатная установка</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">От 90₽ в месяц</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">Архив 6 месяцев</span>
                    </div>
                  </div>
                  <Link to="/smartyard" className="block pt-4">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg py-6">
                      Узнать подробнее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Building" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Другие услуги</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-700 text-lg">
                    Индивидуальное видеонаблюдение, интернет, телевидение и другие 
                    технологические решения для вашего дома
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Wifi" size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-600">Высокоскоростной интернет</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Monitor" size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-600">Цифровое телевидение</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Camera" size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-600">Индивидуальное видеонаблюдение</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 text-lg py-6" disabled>
                      Скоро доступно
                      <Icon name="Clock" size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Свяжитесь с нами</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-red-500" />
                    <span>+7-904-681-0003</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-red-500" />
                    <span>admin@axiostv.ru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-red-500" />
                    <span>г. Липецк, пр. Победы 106а</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png" 
                alt="АКСИОСТВ" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2024 АКСИОСТВ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}