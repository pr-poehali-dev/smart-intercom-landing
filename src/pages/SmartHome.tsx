import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const technologies = [
  {
    id: "zwave",
    name: "Z-Wave",
    tagline: "Надёжный стандарт для умного дома",
    gradient: "from-blue-500 to-blue-600",
    gradientHover: "hover:from-blue-600 hover:to-blue-700",
    bg: "from-blue-50 to-blue-100",
    icon: "Radio",
    description:
      "Z-Wave — беспроводной протокол, разработанный специально для автоматизации объектов. Работает на частоте 868 МГц (в России), что исключает помехи от Wi-Fi и Bluetooth. Устройства образуют самовосстанавливающуюся ячеистую сеть — каждый узел усиливает сигнал.",
    pros: [
      "Не конкурирует с Wi-Fi — работает на отдельной частоте",
      "Ячеистая сеть: до 232 устройств, большой радиус",
      "Очень низкое энергопотребление",
      "Высокая совместимость: более 4000 сертифицированных устройств",
      "Отличная стабильность и надёжность соединения",
    ],
    cons: [
      "Контроллер обязателен — без него сеть не работает",
      "Устройства дороже, чем ZigBee",
      "Скорость передачи данных ниже, чем у Wi-Fi",
      "Закрытый стандарт (хотя и широко лицензируемый)",
    ],
  },
  {
    id: "zigbee",
    name: "ZigBee",
    tagline: "Популярный и доступный протокол",
    gradient: "from-orange-500 to-orange-600",
    gradientHover: "hover:from-orange-600 hover:to-orange-700",
    bg: "from-orange-50 to-orange-100",
    icon: "Zap",
    description:
      "ZigBee — открытый стандарт на основе IEEE 802.15.4, работающий на частоте 2.4 ГГц. Получил широкое распространение благодаря низкой стоимости устройств и поддержке крупнейших производителей: Philips Hue, IKEA, Xiaomi, Amazon.",
    pros: [
      "Открытый стандарт — огромный выбор устройств по доступным ценам",
      "Ячеистая сеть с поддержкой тысяч устройств",
      "Очень низкое энергопотребление батарейных устройств",
      "Активное сообщество и широкое распространение",
    ],
    cons: [
      "Работает на 2.4 ГГц — возможны помехи от Wi-Fi и микроволновок",
      "Разные производители иногда несовместимы между собой",
      "Требует координатора (хаба)",
      "Меньший радиус, чем у Z-Wave",
    ],
  },
  {
    id: "knx",
    name: "KNX",
    tagline: "Профессиональный стандарт для серьёзных проектов",
    gradient: "from-purple-600 to-purple-700",
    gradientHover: "hover:from-purple-700 hover:to-purple-800",
    bg: "from-purple-50 to-purple-100",
    icon: "Building2",
    description:
      "KNX — международный стандарт (ISO/IEC 14543), проверенный десятилетиями в коммерческой и жилой недвижимости. Работает преимущественно по проводной шине, что обеспечивает абсолютную надёжность. Применяется в элитных жилых комплексах, офисах, гостиницах.",
    pros: [
      "Максимальная надёжность — проводная шина не зависит от радиопомех",
      "Международный стандарт: более 500 сертифицированных производителей",
      "Полная масштабируемость — от квартиры до целого здания",
      "Долгий срок службы: системы работают 20–30 лет",
      "Децентрализованная архитектура — работает без сервера",
    ],
    cons: [
      "Высокая стоимость оборудования и монтажа",
      "Требует прокладки отдельного кабеля (KNX-шина)",
      "Необходима профессиональная настройка через ETS-software",
      "Сложно добавить устройства после завершения ремонта",
    ],
  },
]

export default function SmartHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
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
            <Link to="/">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
            <Icon name="Lightbulb" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Умный дом</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Автоматизация любых объектов на базе проверенных протоколов. Выберите технологию, которая подходит именно вам.
          </p>
        </div>
      </section>

      {/* Technology banners */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {technologies.map((tech) => (
            <Link
              key={tech.id}
              to={`/smarthome/${tech.id}`}
              className={`block rounded-3xl bg-gradient-to-br ${tech.gradient} ${tech.gradientHover} text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={tech.icon} size={30} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{tech.name}</h2>
                      <p className="text-white/80">{tech.tagline}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-xl px-4 py-2">
                    <span className="text-sm font-medium">Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-base leading-relaxed mb-8">
                  {tech.description}
                </p>

                {/* Pros / Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/15 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="ThumbsUp" size={18} className="text-white" />
                      <span className="font-semibold text-white">Достоинства</span>
                    </div>
                    <div className="space-y-2">
                      {tech.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon name="CheckCircle" size={16} className="text-white/80 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/15 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="ThumbsDown" size={18} className="text-white" />
                      <span className="font-semibold text-white">Недостатки</span>
                    </div>
                    <div className="space-y-2">
                      {tech.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon name="XCircle" size={16} className="text-white/80 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Не знаете что выбрать?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Наш специалист бесплатно проконсультирует и подберёт оптимальное решение для вашего объекта
          </p>
          <Link to="/">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-10 py-6 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[6fr_4fr_1fr_1fr] gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Link to="/">
                  <img
                    src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png"
                    alt="АКСИОСТВ"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <p className="text-gray-400 text-sm">Лидер в области умной видеодомофонии и видеонаблюдения</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <span>Умный двор (МКД)</span>
                <span>Умный дом</span>
                <span>Интернет и ТВ</span>
                <span>Для бизнеса</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7-904-681-0003</li>
                <li>admin@axiostv.ru</li>
                <li>г. Липецк, пр. Победы 106а</li>
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
