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

              {/* Раздел Договор */}
              <div className="flex gap-5 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow">
                  <Icon name="FileText" size={22} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">Раздел «Договор»</h3>
                  <p className="text-gray-600 leading-relaxed">
                    В свёрнутом виде отображает краткую справку о состоянии и сроке оплаты. В развёрнутом виде представлена полная информация о подключённых услугах, их стоимости и сроках оплаты.
                  </p>
                </div>
              </div>

              {/* Баланс и платёж */}
              <div className="flex gap-5 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow">
                  <Icon name="Wallet" size={22} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">Баланс и рекомендованный платёж</h3>
                  <p className="text-gray-600 leading-relaxed">
                    В верхней части представлен текущий баланс, в нижней — сумма рекомендованного платежа с учётом ближайшего продления услуг. Чуть ниже кнопка <strong>«Перейти к оплате»</strong>, которая позволяет провести оплату различными способами.
                  </p>
                </div>
              </div>

              {/* Детализация */}
              <div className="flex gap-5 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow">
                  <Icon name="ListOrdered" size={22} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">Раздел «Детализация оплат и снятий»</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Позволяет провести самостоятельную сверку расчётов и получить акт выполненных работ (для юрлиц). Также для юрлиц имеется кнопка <strong>«Получить счёт для оплаты»</strong>.
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
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-8 lg:p-12 text-white text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold">Скачайте приложение</h2>
              <p className="text-indigo-200 text-lg">Личный кабинет доступен в мобильных приложениях АКСИОСТВ</p>
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
    </div>
  )
}
