import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

const services = [
  {
    id: 1,
    title: "Умный двор",
    description: "Комплексная система безопасности для многоквартирных домов с видеодомофоном, видеонаблюдением и мобильным приложением",
    icon: "Home",
    link: "/smartyard",
    color: "red",
    internal: true
  },
  {
    id: 2,
    title: "Услуги для дома",
    description: "Интернет, телевидение, видеонаблюдение, умный дом",
    icon: "Wifi",
    link: "https://axiostv.ru/b2c/",
    color: "blue",
    internal: false
  },
  {
    id: 3,
    title: "Для бизнеса",
    description: "Комплексные решения для юридических лиц",
    icon: "Building",
    link: "https://axiostv.ru/b2b/",
    color: "green",
    internal: false
  },
  {
    id: 4,
    title: "Просмотр ТВ",
    description: "Телевидение на Вашем компьютере",
    icon: "Monitor",
    link: "http://axiostv.ru/tvportal/",
    color: "purple",
    internal: false
  },
  {
    id: 5,
    title: "Список приложений",
    description: "Установите мобильные приложения на все случаи жизни",
    icon: "Smartphone",
    link: "https://axiostv.ru/apps/",
    color: "orange",
    internal: false
  },
  {
    id: 6,
    title: "Как оплатить",
    description: "Подробное описание доступных способов оплаты",
    icon: "Coins",
    link: "https://axiostv.ru/pay/",
    color: "emerald",
    internal: false
  },
  {
    id: 7,
    title: "Личный кабинет",
    description: "Детализация и управление услугами",
    icon: "Files",
    link: "https://bll.axiostv.ru/index.html",
    color: "indigo",
    internal: false
  }
]

export default function Index() {
  const renderServiceCard = (service: typeof services[0]) => {
    const CardWrapper = service.internal ? Link : 'a'
    const linkProps = service.internal 
      ? { to: service.link }
      : { href: service.link, target: "_blank", rel: "noopener noreferrer" }

    return (
      <CardWrapper key={service.id} {...linkProps} className="block">
        <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white h-full cursor-pointer">
          <CardHeader className="text-center pb-4">
            <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={service.icon as any} size={24} className="text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-gray-600 text-base leading-relaxed">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      </CardWrapper>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  АКСИОСТВ
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Лидер в области умной видеодомофонии и видеонаблюдения и современных услуг связи
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 4).map(renderServiceCard)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
            {services.slice(4).map(renderServiceCard)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png" 
                alt="АКСИОСТВ" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Контактная информация</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-red-400" />
                  <a href="tel:+79046810003" className="hover:text-white transition-colors">+7-904-681-0003</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-red-400" />
                  <a href="tel:+74742210001" className="hover:text-white transition-colors">+7-4742-210001</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-red-400" />
                  <a href="mailto:admin@axiostv.ru" className="hover:text-white transition-colors">admin@axiostv.ru</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-red-400" />
                  <span>г. Липецк, пр. Победы 106а</span>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                ИНН 4824066945 ОГРН 1164827056206 
                <a href="mailto:admin@axiostv.ru" className="text-red-400 hover:text-red-300 ml-1">Email</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="https://axiostv.ru/Policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="https://axiostv.ru/UserAgreement.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
                <a href="https://axiostv.ru/cloud_video_oferta.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Договор оферты видеонаблюдения и видеодомофонии
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                &copy; 2024 АКСИОСТВ. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}