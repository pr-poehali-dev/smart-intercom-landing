import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">АКСИОСТВ</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#advantages" className="text-gray-700 hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#security" className="text-gray-700 hover:text-blue-600 transition-colors">Безопасность</a>
              <a href="#personalization" className="text-gray-700 hover:text-blue-600 transition-colors">Персонализация</a>
              <a href="#economy" className="text-gray-700 hover:text-blue-600 transition-colors">Экономия</a>
              <a href="#convenience" className="text-gray-700 hover:text-blue-600 transition-colors">Удобство</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Умный двор
                  <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    нового поколения
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Система безопасности в многоквартирном доме с видеодомофоном, 
                  видеонаблюдением и интуитивным управлением со смартфона
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-200 hover:bg-blue-50">
                  Узнать больше
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Бесплатная установка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>От 90₽ в месяц</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Архив 6 месяцев</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20"></div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Видеодомофон</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg aspect-video mb-4 flex items-center justify-center">
                    <Icon name="Camera" size={48} className="text-white opacity-60" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Звонок от посетителя</span>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        Открыть
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="X" size={16} className="mr-1" />
                        Отклонить
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="MessageSquare" size={16} className="mr-1" />
                        Ответить
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              АКСИОСТВ — лидер в области умной видеодомофонии с проверенными решениями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Полное покрытие без мертвых зон",
                color: "blue"
              },
              {
                icon: "User",
                title: "Персонализация", 
                description: "Персональные ключи и уведомления",
                color: "green"
              },
              {
                icon: "DollarSign",
                title: "Экономия",
                description: "Бесплатная установка и обслуживание",
                color: "orange"
              },
              {
                icon: "Smartphone",
                title: "Удобство",
                description: "Управление со смартфона",
                color: "purple"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${
                    item.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    item.color === 'green' ? 'from-green-500 to-green-600' :
                    item.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    'from-purple-500 to-purple-600'
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Максимальная безопасность
              </h2>
              <p className="text-lg text-gray-600">
                Камеры устанавливаются снаружи и внутри дома для исключения "мертвых зон". 
                Полный контроль территории 24/7.
              </p>
              
              <div className="space-y-4">
                {[
                  "Камеры обзора перед подъездом",
                  "Камера входа в подъезд",
                  "Камера внутреннего пространства",
                  "Камера лифтового холла",
                  "Камера 1-го этажа у почтовых ящиков",
                  "Дополнительные камеры на углах дома"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Архив событий</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Все события фиксируются и хранятся полгода с фото и видео
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Видео: 10 дней</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Фото: 6 месяцев</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Camera" size={20} className="mr-2 text-blue-500" />
                  Карта камер
                </h3>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[1,2,3,4,5,6,7,8,9].map((num) => (
                      <div key={num} className="bg-blue-500 text-white p-2 rounded text-center">
                        Камера {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  Двухподъездный дом: <span className="font-semibold text-blue-600">14 камер</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalization" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Smartphone" size={20} className="mr-2 text-green-500" />
                    Мобильное приложение
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Ваш ребенок дома</span>
                        <span className="text-xs text-gray-500">15:30</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Вход по персональному ключу</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Звонок в домофон</span>
                        <span className="text-xs text-gray-500">14:22</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Курьер с доставкой</p>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Пропущенный вызов</span>
                        <span className="text-xs text-gray-500">12:15</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Незнакомый посетитель</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">
                Персональный контроль
              </h2>
              <p className="text-lg text-gray-600">
                Все ключи от домофона персональные. В событиях фиксируются 
                все действия по вашей квартире.
              </p>
              
              <div className="space-y-4">
                {[
                  "Уведомления об открытии домофона ключом",
                  "Пропущенные вызовы с фото и видео",
                  "Статистика посещений за 6 месяцев",
                  "Контроль прихода детей домой",
                  "История всех событий по квартире"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section id="economy" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Выгодно для всех
            </h2>
            <p className="text-xl text-gray-600">
              Никаких скрытых платежей. Прозрачная система оплаты.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Gift" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">Бесплатная установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Установка видеодомофона и видеокамер за счет компании АКСИОСТВ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white transform scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">От 90₽ в месяц</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Комплексная система безопасности по доступной цене
                </p>
                <div className="text-2xl font-bold text-orange-600">90₽</div>
                <div className="text-sm text-gray-500">за квартиру в месяц</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">Бесплатное обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Техническое обслуживание и поддержка за счет компании
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Convenience Section */}
      <section id="convenience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Удобство использования
              </h2>
              <p className="text-lg text-gray-600">
                Мобильное приложение АКСИОСТВ — лидер по функционалу и удобству. 
                Управляйте всей системой одним касанием.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "Phone",
                    title: "Видеовызовы",
                    description: "Приходят даже при заблокированном экране"
                  },
                  {
                    icon: "Eye",
                    title: "Живое видео",
                    description: "Просмотр камер в режиме реального времени"
                  },
                  {
                    icon: "Download",
                    title: "Скачивание архива",
                    description: "Моментальный доступ к фрагментам"
                  },
                  {
                    icon: "Settings",
                    title: "Управление",
                    description: "Контроль всей инфраструктуры дома"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <Icon name={item.icon as any} size={24} className="text-blue-500 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Входящий вызов</h3>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg aspect-video mb-4 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Icon name="User" size={48} className="mx-auto mb-2 opacity-60" />
                      <p className="text-sm">Посетитель у входа</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-red-500 hover:bg-red-600">
                      <Icon name="PhoneOff" size={16} className="mr-2" />
                      Отклонить
                    </Button>
                    <Button className="flex-1 bg-green-500 hover:bg-green-600">
                      <Icon name="Unlock" size={16} className="mr-2" />
                      Открыть
                    </Button>
                    <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Ответить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы сделать ваш дом безопаснее?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Оставьте заявку и получите бесплатную консультацию
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Сделать заявку</h3>
            
            <form className="space-y-4">
              <Input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full"
              />
              <Input 
                type="tel" 
                placeholder="Телефон" 
                className="w-full"
              />
              <Input 
                type="text" 
                placeholder="Адрес дома" 
                className="w-full"
              />
              <Textarea 
                placeholder="Дополнительная информация" 
                className="w-full h-24 resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg py-6">
                Отправить заявку
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">АКСИОСТВ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лидер в области умной видеодомофонии и видеонаблюдения
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Видеодомофоны</li>
                <li>Видеонаблюдение</li>
                <li>Умный двор</li>
                <li>Мобильное приложение</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>8 (800) 123-45-67</li>
                <li>info@aksiostv.ru</li>
                <li>г. Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="MessageSquare" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 АКСИОСТВ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}