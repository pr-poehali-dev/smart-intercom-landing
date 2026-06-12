import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HomeServicesNav() {
  return (
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
  )
}
