import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const sectionNames: Record<string, { name: string; icon: string; gradient: string }> = {
  zwave: { name: "Z-Wave", icon: "Radio", gradient: "from-blue-500 to-blue-600" },
  zigbee: { name: "ZigBee", icon: "Zap", gradient: "from-orange-500 to-orange-600" },
  knx: { name: "KNX", icon: "Building2", gradient: "from-purple-600 to-purple-700" },
}

export default function SmartHomeSection() {
  const { section } = useParams()
  const info = sectionNames[section ?? ""] ?? { name: section ?? "", icon: "Lightbulb", gradient: "from-gray-500 to-gray-600" }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
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
            <Link to="/smarthome">
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
          <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
            <Icon name={info.icon} size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{info.name}</h1>
          <div className="bg-orange-50 border border-orange-200 rounded-2xl px-8 py-6">
            <Icon name="Wrench" size={32} className="text-orange-400 mx-auto mb-3" />
            <p className="text-orange-700 font-medium text-lg">Раздел в разработке</p>
            <p className="text-orange-500 text-sm mt-1">Скоро здесь появятся подробные материалы</p>
          </div>
          <Link to="/smarthome">
            <Button className={`bg-gradient-to-r ${info.gradient} text-white mt-4`}>
              Вернуться к Умному дому
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
