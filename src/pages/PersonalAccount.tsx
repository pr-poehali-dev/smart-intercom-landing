import Icon from "@/components/ui/icon"

export default function PersonalAccount() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <a href="/" className="cursor-pointer">
                <img
                  src="https://cdn.poehali.dev/files/1a89557c-b358-4617-9d1b-8ae8157d0144.png"
                  alt="АКСИОСТВ"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Icon name="ArrowLeft" size={18} />
              <span>Назад</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Icon name="Files" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Личный кабинет
                </h1>
                <p className="text-lg text-indigo-600 font-medium mt-1">Детализация и управление услугами</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 space-y-8">

            {/* Intro */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Мобильные приложения <strong>«АКСИОСТВ»</strong> содержат полноценный мобильный личный кабинет.
            </p>

            {/* Feature cards */}
            <div className="space-y-5">

              {/* Свёрнутый вид */}
              <div className="flex gap-5 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow">
                  <Icon name="PanelTopClose" size={22} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">Раздел «Договор» — свёрнутый вид</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Отображает краткую справку о состоянии и сроке оплаты.
                  </p>
                </div>
              </div>

              {/* Развёрнутый вид */}
              <div className="flex gap-5 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow">
                  <Icon name="PanelTopOpen" size={22} className="text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Раздел «Договор» — развёрнутый вид</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Представлена полная информация о подключённых услугах, их стоимости и сроках оплаты. В верхней части — текущий баланс, в нижней — сумма рекомендованного платежа с учётом ближайшего продления услуг. Чуть ниже кнопка <strong>«Перейти к оплате»</strong>, которая позволяет провести оплату различными способами.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Раздел <strong>«Детализация оплат и снятий»</strong> позволяет провести самостоятельную сверку расчётов и получить акт выполненных работ (для юрлиц). Также для юрлиц имеется кнопка <strong>«Получить счёт для оплаты»</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 lg:p-12 text-white text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold">Скачайте приложение</h2>
              <p className="text-red-100 text-lg">Личный кабинет и оплата доступны в мобильных приложениях АКСИОСТВ</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://apps.apple.com/us/app/axiostv/id1621118144?l=ru&ls=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.poehali.dev/files/d3c7ad91-33f9-4767-ae63-e1c9e3039236.png"
                  alt="Загрузить в App Store"
                  className="h-14"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ru.axiostv.smartyard&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.poehali.dev/files/0a9b5ff4-c8c5-42e6-946c-37f3d0fc5438.png"
                  alt="Загрузить в Google Play"
                  className="h-14"
                />
              </a>
              <a
                href="https://appgallery.huawei.com/app/C110313065"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.poehali.dev/files/66e166f8-de4d-4e27-837b-9029b5becf8f.png"
                  alt="Загрузить в AppGallery"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Payment Methods */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow">
                <Icon name="CreditCard" size={22} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Другие способы оплаты</h2>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">

              {/* Юрлица */}
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p>
                  Для юрлиц доступна оплата с расчётного счёта организации на расчётный счёт «АКСИОСТВ» по счёту, скачанному в мобильном приложении.
                </p>
              </div>

              {/* Сбер */}
              <div className="p-5 bg-gray-50 rounded-2xl space-y-3">
                <p>
                  Дополнительно доступна оплата наличными через операционистов в отделениях банка Сбер, а также наличными и картами в терминалах и банкоматах этого банка.
                </p>
                <p>
                  Для оплаты с помощью Сбербанк Онлайн и через терминалы необходимо выбрать услугу: Интернет, ТВ или телефон, затем «АКСИОСТВ» (из списка доступных операторов), ввести лицевой счёт и провести оплату.
                </p>
                <p>
                  В некоторых случаях «АКСИОСТВ» в списке провайдеров может не присутствовать. В таком варианте необходимо воспользоваться поиском, введя название «АКСИОСТВ» в поле поиска.
                </p>
                <p>
                  На терминалах для этого необходимо нажать на кнопку <strong>«ПОИСК УСЛУГ И ОРГАНИЗАЦИЙ. МОИ УСЛУГИ»</strong>, затем <strong>«ПОИСК ПО ИНН»</strong> и в открывшемся окне ввести <strong>«4824066945»</strong>. При оплате с помощью карт также можно ввести «АКСИОСТВ», выбрать услугу, ввести лицевой счёт и провести оплату.
                </p>
              </div>

              {/* Центральная касса */}
              <div className="p-5 bg-gray-50 rounded-2xl space-y-4">
                <p>
                  Для оплаты картами любых банков можно воспользоваться <strong>«Центральной кассой»</strong>:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://ckassa.ru/payment/#!search_provider/pt_search/111-11159-2/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-indigo-100 hover:border-indigo-400 hover:shadow transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wifi" size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-indigo-600 group-hover:text-indigo-800">АКСИОСТВ — Интернет</span>
                    <Icon name="ExternalLink" size={14} className="text-gray-400 ml-auto" />
                  </a>
                  <a
                    href="https://ckassa.ru/payment/#!search_provider/pt_search/111-11159-3/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-indigo-100 hover:border-indigo-400 hover:shadow transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-indigo-600 group-hover:text-indigo-800">АКСИОСТВ — Телефон</span>
                    <Icon name="ExternalLink" size={14} className="text-gray-400 ml-auto" />
                  </a>
                  <a
                    href="https://ckassa.ru/payment/#!search_provider/pt_search/1001222778_156/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-indigo-100 hover:border-indigo-400 hover:shadow transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Monitor" size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-indigo-600 group-hover:text-indigo-800">АКСИОСТВ — ТВ</span>
                    <Icon name="ExternalLink" size={14} className="text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Важное примечание */}
              <div className="flex gap-3 p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <Icon name="Info" size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900">
                  Обращаем внимание, что во всех случаях услуга видеонаблюдения и видеодомофонии оплачивается как <strong>Интернет</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}