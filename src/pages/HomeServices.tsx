import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="cursor-pointer">
              <img
                src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png"
                alt="АКСИОСТВ"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a href="#internet" className="hover:text-blue-600 transition-colors">Интернет</a>
              <a href="#tv" className="hover:text-blue-600 transition-colors">ТВ</a>
              <a href="#phone" className="hover:text-blue-600 transition-colors">Телефон</a>
              <a href="#cctv" className="hover:text-blue-600 transition-colors">Видеонаблюдение</a>
              <a href="#alarm" className="hover:text-blue-600 transition-colors">Сигнализация</a>
              <a href="#smarthome" className="hover:text-blue-600 transition-colors">Умный дом</a>
            </div>
            <a href="#contact">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                Подключиться
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  Для частных клиентов
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Услуги
                  <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    для дома
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Выгодный интернет, цифровое телевидение, домашний телефон, видеонаблюдение, сигнализация и умный дом — всё в одном месте от АКСИОСТВ
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8">
                    Подключиться
                  </Button>
                </a>
                <a href="tel:+74742210001">
                  <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                {["Без скрытых платежей", "Подключение в день заявки", "Техподдержка 24/7"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/24c35f0b-87be-4e27-85ac-f3a23febfd7f.jpg"
                  alt="Домашний интернет АКСИОСТВ"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Интернет */}
      <section id="internet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <Icon name="Wifi" size={14} className="mr-2" />
                Интернет
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Выгодный и надёжный интернет</h2>
              <p className="text-lg text-gray-600">
                Высокоскоростное подключение по оптоволокну прямо до вашей квартиры. Стабильная связь без обрывов и просадок скорости в часы пик.
              </p>
              <div className="space-y-3">
                {[
                  "Оптоволокно до квартиры (FTTB/FTTH)",
                  "Скорость до 1 Гбит/с",
                  "Без ограничения трафика",
                  "Статический IP-адрес по запросу",
                  "Бесплатная установка и настройка роутера",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Узнать тарифы
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/24c35f0b-87be-4e27-85ac-f3a23febfd7f.jpg"
                  alt="Домашний интернет"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ТВ */}
      <section id="tv" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/82c9b86b-b41b-4f4f-89cc-ba6042cbefbe.jpg"
                  alt="Цифровое телевидение АКСИОСТВ"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                <Icon name="Tv" size={14} className="mr-2" />
                Телевидение
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Интерактивное цифровое ТВ</h2>
              <p className="text-lg text-gray-600">
                Более 200 каналов в высоком качестве, интерактивные возможности и видеотека — смотрите что хотите, когда хотите.
              </p>
              <div className="space-y-3">
                {[
                  "Более 200 каналов включая HD и 4K",
                  "Пауза и перемотка прямого эфира",
                  "Запись передач и архив 7 дней",
                  "Просмотр на смартфоне и планшете",
                  "Тематические пакеты каналов",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  Подключить ТВ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Телефон */}
      <section id="phone" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                <Icon name="Phone" size={14} className="mr-2" />
                Телефония
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Домашний телефон</h2>
              <p className="text-lg text-gray-600">
                Надёжная IP-телефония с городским номером. Отличное качество звука и выгодные тарифы на звонки по России и миру.
              </p>
              <div className="space-y-3">
                {[
                  "Городской номер Липецка",
                  "Бесплатные звонки внутри сети АКСИОСТВ",
                  "Низкие тарифы на междугородние звонки",
                  "Переадресация на мобильный",
                  "Работает без отдельного телефонного провода",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Подключить телефон
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-green-200 flex items-center justify-center">
                    <Icon name="PhoneCall" size={48} className="text-green-600" />
                  </div>
                  <p className="text-green-700 font-semibold text-lg">Городской номер</p>
                  <p className="text-green-600 text-3xl font-bold">+7-4742-XXXXXX</p>
                  <p className="text-green-500 text-sm">Ваш номер в Липецке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Видеонаблюдение */}
      <section id="cctv" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/717d281c-2944-4342-aa2e-5a73e7f3ac77.jpg"
                  alt="Видеонаблюдение для дома"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                <Icon name="Camera" size={14} className="mr-2" />
                Видеонаблюдение
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Видеоконтроль вашего дома</h2>
              <p className="text-lg text-gray-600">
                Камеры внутри и снаружи дома, архив записей и просмотр в реальном времени прямо со смартфона — где бы вы ни находились.
              </p>
              <div className="space-y-3">
                {[
                  "Камеры высокого разрешения Full HD",
                  "Ночная съёмка без засветки",
                  "Архив записей до 6 месяцев",
                  "Просмотр с любого устройства",
                  "Уведомления при движении",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-slate-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800">
                  Установить камеры
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Сигнализация */}
      <section id="alarm" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                <Icon name="Shield" size={14} className="mr-2" />
                Сигнализация
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Охрана квартиры</h2>
              <p className="text-lg text-gray-600">
                Профессиональная охранная сигнализация с постановкой на пульт ЧОП. Мгновенное реагирование при тревоге — ваш дом под защитой 24/7.
              </p>
              <div className="space-y-3">
                {[
                  "Постановка на пульт охраны ЧОП",
                  "Датчики движения, открытия дверей и окон",
                  "Уведомление на смартфон при тревоге",
                  "Управление охраной через приложение",
                  "Быстрое реагирование группы охраны",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                  Подключить охрану
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {[
                    { icon: "ShieldCheck", label: "Под охраной", color: "text-green-500", bg: "bg-green-50" },
                    { icon: "Bell", label: "Тревога", color: "text-red-500", bg: "bg-red-50" },
                    { icon: "Smartphone", label: "Управление", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: "Clock", label: "24/7", color: "text-purple-500", bg: "bg-purple-50" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-xl p-4 text-center`}>
                      <Icon name={item.icon} size={28} className={`${item.color} mx-auto mb-2`} />
                      <p className="text-xs font-medium text-gray-700">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Умный дом */}
      <section id="smarthome" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/11891fe7-a0d0-4531-b2e7-8954d58f8a70.jpg"
                  alt="Умный дом АКСИОСТВ"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                <Icon name="Lightbulb" size={14} className="mr-2" />
                Умный дом
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Автоматизация вашего дома</h2>
              <p className="text-lg text-gray-600">
                Управляйте светом, климатом, розетками и безопасностью одним касанием — из любой точки мира через мобильное приложение.
              </p>
              <div className="space-y-3">
                {[
                  "Умное освещение и управление розетками",
                  "Контроль климата и отопления",
                  "Интеграция с видеодомофоном",
                  "Сценарии автоматизации",
                  "Управление через приложение АКСИОСТВ",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Узнать подробнее
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Контакт */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Готовы подключиться?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Оставьте заявку — менеджер свяжется с вами в течение 30 минут и подберёт оптимальный тариф
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74742210001">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 w-full sm:w-auto">
                <Icon name="Phone" size={18} className="mr-2" />
                +7-4742-210001
              </Button>
            </a>
            <a href="tel:+79046810003">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 w-full sm:w-auto">
                <Icon name="Smartphone" size={18} className="mr-2" />
                +7-904-681-0003
              </Button>
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Или напишите на <a href="mailto:admin@axiostv.ru" className="underline hover:text-white">admin@axiostv.ru</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/">
            <img
              src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png"
              alt="АКСИОСТВ"
              className="h-8 w-auto mx-auto mb-4"
            />
          </Link>
          <p className="text-gray-500 text-sm">&copy; 2024 АКСИОСТВ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}