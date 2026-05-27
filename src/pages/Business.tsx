import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Business() {
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
              <a href="#internet" className="hover:text-green-600 transition-colors">Интернет</a>
              <a href="#cctv" className="hover:text-green-600 transition-colors">Видеонаблюдение</a>
              <a href="#telephony" className="hover:text-green-600 transition-colors">Телефония</a>
              <a href="#skud" className="hover:text-green-600 transition-colors">СКУД</a>
              <a href="#security" className="hover:text-green-600 transition-colors">Охрана</a>
            </div>
            <a href="#contact">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                Оставить заявку
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  Для юридических лиц
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Решения
                  <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    для бизнеса
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Комплексные телекоммуникационные услуги для компаний любого масштаба — интернет, связь, безопасность и контроль доступа
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8">
                    Оставить заявку
                  </Button>
                </a>
                <a href="tel:+74742210001">
                  <Button size="lg" variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                {["Договор для юр. лиц", "Выделенный менеджер", "SLA и гарантии"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/15be734b-6079-49fe-ba36-aad0d7b6b954.jpg"
                  alt="Бизнес-интернет АКСИОСТВ"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Интернет для бизнеса */}
      <section id="internet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                <Icon name="Wifi" size={14} className="mr-2" />
                Интернет
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Интернет для бизнеса</h2>
              <p className="text-lg text-gray-600">
                Выделенный канал с гарантированной скоростью и приоритетной поддержкой. Ваш бизнес всегда на связи — без перебоев и задержек.
              </p>
              <div className="space-y-3">
                {[
                  "Выделенный симметричный канал",
                  "Гарантированная скорость по SLA",
                  "Статические IP-адреса",
                  "Резервирование канала",
                  "Приоритетная техподдержка 24/7",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Получить предложение
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/15be734b-6079-49fe-ba36-aad0d7b6b954.jpg"
                  alt="Бизнес-интернет"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Видеонаблюдение */}
      <section id="cctv" className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-slate-100 to-green-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/717d281c-2944-4342-aa2e-5a73e7f3ac77.jpg"
                  alt="Видеонаблюдение для бизнеса"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                <Icon name="Camera" size={14} className="mr-2" />
                Видеонаблюдение
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Видеонаблюдение для объектов</h2>
              <p className="text-lg text-gray-600">
                Комплексное видеонаблюдение для офисов, складов, магазинов и производственных помещений. Контроль территории в режиме реального времени.
              </p>
              <div className="space-y-3">
                {[
                  "Камеры для офиса, склада, парковки",
                  "Архив записей до 6 месяцев",
                  "Удалённый доступ для руководителя",
                  "Интеграция с системой охраны",
                  "Профессиональный монтаж и обслуживание",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-slate-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800">
                  Рассчитать проект
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IP-телефония */}
      <section id="telephony" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <Icon name="Phone" size={14} className="mr-2" />
                Телефония
              </div>
              <h2 className="text-4xl font-bold text-gray-900">IP-телефония и АТС</h2>
              <p className="text-lg text-gray-600">
                Виртуальная АТС с многоканальными номерами, записью звонков и гибкой маршрутизацией. Профессиональная связь для вашего бизнеса.
              </p>
              <div className="space-y-3">
                {[
                  "Многоканальные городские номера",
                  "Виртуальная АТС с IVR-меню",
                  "Запись и хранение звонков",
                  "Переадресация и очереди вызовов",
                  "Интеграция с CRM-системами",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Подключить АТС
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="space-y-4 w-full max-w-xs">
                  {[
                    { label: "Входящие звонки", value: "∞", color: "text-green-600", bg: "bg-green-50" },
                    { label: "Внутренние линии", value: "до 100", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Запись звонков", value: "90 дней", color: "text-purple-600", bg: "bg-purple-50" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-xl p-4 flex items-center justify-between`}>
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                      <span className={`${item.color} font-bold text-lg`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* СКУД */}
      <section id="skud" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <img
                  src="https://cdn.poehali.dev/projects/ec0a586e-e729-426a-8390-7b966a3ba006/files/897de899-d9a1-42ad-a978-71a018ca1422.jpg"
                  alt="СКУД для бизнеса"
                  className="w-[312px] mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                <Icon name="KeyRound" size={14} className="mr-2" />
                СКУД
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Контроль и управление доступом</h2>
              <p className="text-lg text-gray-600">
                Система контроля и управления доступом (СКУД) для вашего офиса или предприятия. Турникеты, электронные замки, считыватели карт и биометрия.
              </p>
              <div className="space-y-3">
                {[
                  "Электронные замки и турникеты",
                  "Карточки, брелоки и биометрия",
                  "Журнал проходов сотрудников",
                  "Разграничение прав доступа",
                  "Интеграция с видеонаблюдением",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700">
                  Заказать проект
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Охрана */}
      <section id="security" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                <Icon name="Shield" size={14} className="mr-2" />
                Охрана
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Охрана объектов бизнеса</h2>
              <p className="text-lg text-gray-600">
                Профессиональная охрана вашего объекта с постановкой на пульт ЧОП. Быстрое реагирование при тревоге, мониторинг 24/7.
              </p>
              <div className="space-y-3">
                {[
                  "Постановка на пульт охраны ЧОП",
                  "Охранная и пожарная сигнализация",
                  "Тревожная кнопка для сотрудников",
                  "Мониторинг состояния объекта онлайн",
                  "Группа быстрого реагирования",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                  Защитить объект
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {[
                    { icon: "ShieldCheck" as const, label: "Охрана 24/7", color: "text-green-500", bg: "bg-green-50" },
                    { icon: "Siren" as const, label: "Реагирование", color: "text-red-500", bg: "bg-red-50" },
                    { icon: "Eye" as const, label: "Мониторинг", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: "Flame" as const, label: "Пожарная", color: "text-orange-500", bg: "bg-orange-50" },
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

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Оставьте заявку</h2>
          <p className="text-green-100 text-lg mb-8">
            Менеджер свяжется с вами, выедет на объект и подготовит индивидуальное коммерческое предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74742210001">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 w-full sm:w-auto">
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
          <p className="text-green-200 text-sm mt-6">
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
