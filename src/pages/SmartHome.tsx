import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const technologies = [
  {
    id: "zwave",
    name: "Z-Wave",
    tagline: "Надёжный стандарт для умного дома",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    icon: "Radio",
    description:
      "Z-Wave — беспроводной протокол, разработанный специально для автоматизации жилья. Работает на частоте 868 МГц (в России), что исключает помехи от Wi-Fi и Bluetooth. Устройства образуют самовосстанавливающуюся ячеистую сеть — каждый узел усиливает сигнал.",
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
    useCases: ["Освещение и диммеры", "Замки и СКУД", "Датчики протечки и движения", "Термостаты и климат"],
  },
  {
    id: "zigbee",
    name: "ZigBee",
    tagline: "Популярный и доступный протокол",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    bg: "from-orange-50 to-orange-100",
    border: "border-orange-200",
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
    useCases: ["Умное освещение", "Розетки и выключатели", "Датчики температуры и влажности", "Шторы и жалюзи"],
  },
  {
    id: "knx",
    name: "KNX",
    tagline: "Профессиональный стандарт для серьёзных проектов",
    color: "purple",
    gradient: "from-purple-600 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
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
    useCases: ["Управление всем зданием", "Центральное освещение и климат", "Системы безопасности и СКУД", "Элитная жилая недвижимость"],
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
            <div className="hidden md:flex space-x-8">
              <a href="#zwave" className="text-gray-700 hover:text-orange-600 transition-colors">Z-Wave</a>
              <a href="#zigbee" className="text-gray-700 hover:text-orange-600 transition-colors">ZigBee</a>
              <a href="#knx" className="text-gray-700 hover:text-orange-600 transition-colors">KNX</a>
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
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
            <Icon name="Lightbulb" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Умный дом</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Автоматизация жилья на базе проверенных протоколов. Выберите технологию, которая подходит именно вам.
          </p>
        </div>
      </section>

      {/* Comparison hint */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              { label: "Z-Wave", sub: "Надёжность", icon: "Radio", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { label: "ZigBee", sub: "Доступность", icon: "Zap", color: "text-orange-600 bg-orange-50 border-orange-200" },
              { label: "KNX", sub: "Профессионализм", icon: "Building2", color: "text-purple-600 bg-purple-50 border-purple-200" },
            ].map((t) => (
              <a key={t.label} href={`#${t.label.toLowerCase()}`} className={`flex flex-col items-center gap-2 py-4 px-6 rounded-2xl border ${t.color} hover:shadow-md transition-all`}>
                <Icon name={t.icon} size={24} />
                <span className="font-bold text-lg">{t.label}</span>
                <span className="text-sm opacity-70">{t.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technology sections */}
      {technologies.map((tech, idx) => (
        <section
          key={tech.id}
          id={tech.id}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${idx % 2 === 1 ? "bg-white" : `bg-gradient-to-br ${tech.bg}`}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center flex-shrink-0`}>
                <Icon name={tech.icon} size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">{tech.name}</h2>
                <p className="text-gray-500">{tech.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {tech.description}
            </p>

            {/* Pros / Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className={`border ${tech.border} shadow-md`}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Icon name="ThumbsUp" size={20} className="text-green-500" />
                    Достоинства
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tech.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{pro}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border border-red-100 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Icon name="ThumbsDown" size={20} className="text-red-400" />
                    Недостатки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tech.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="XCircle" size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{con}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>


          </div>
        </section>
      ))}

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