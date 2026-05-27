import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function SmartHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Icon name="Lightbulb" size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Умный дом</h1>
          <p className="text-lg text-gray-500">Комфорт и автоматизация для дома или квартиры</p>
          <div className="bg-orange-50 border border-orange-200 rounded-2xl px-8 py-6">
            <Icon name="Wrench" size={32} className="text-orange-400 mx-auto mb-3" />
            <p className="text-orange-700 font-medium text-lg">Раздел в разработке</p>
            <p className="text-orange-500 text-sm mt-1">Скоро здесь появятся новые возможности</p>
          </div>
          <Link to="/">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 mt-4">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
