import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

type Product = {
  id: number
  name: string
  price: number
  category: string
  icon: string
  description: string
  discontinued?: boolean
}

const products: Product[] = [
  // Реле
  { id: 1, name: "Sonoff ZBMINIL2 ZigBee Extreme (комплект 2 шт)", price: 2507, category: "Реле", icon: "Cpu", description: "Миниатюрное реле без нейтрали, устанавливается в монтажную коробку. Комплект из 2 штук." },
  { id: 6, name: "Sonoff ZBMINIR2 ZigBee Extreme", price: 1280, category: "Реле", icon: "Cpu", description: "Компактное реле с поддержкой нейтрали и без. Встраивается в стандартную 60 мм коробку." },
  { id: 11, name: "Sonoff ZBMINIL2 ZigBee Extreme", price: 1274, category: "Реле", icon: "Cpu", description: "Одиночное миниатюрное реле без нейтрали для скрытого монтажа." },
  { id: 48, name: "Реле ZigBee ZBMINI16А eWeLink", price: 844, category: "Реле", icon: "Cpu", description: "Бюджетное реле 16А для управления освещением и нагрузкой." },
  { id: 57, name: "Sonoff MINI-ZBRBS ZigBee", price: 1950, category: "Реле", icon: "Cpu", description: "Реле с кнопкой управления, поддерживает нейтраль и режим без нейтрали." },
  { id: 75, name: "Sonoff MINI-ZB2GS ZigBee (2 канала) DUO", price: 2068, category: "Реле", icon: "Cpu", description: "Двухканальное реле для независимого управления двумя нагрузками." },
  { id: 30, name: "Реле ZigBee 40А eWeLink", price: 1806, category: "Реле", icon: "Cpu", description: "Мощное силовое реле 40А для управления электрооборудованием." },
  { id: 91, name: "Реле ZigBee 30А eWeLink", price: 1820, category: "Реле", icon: "Cpu", description: "Силовое реле 30А, подходит для насосов и другой мощной нагрузки." },
  { id: 54, name: "Реле 4-х канальное ZigBee ZG-005-RF TUYA", price: 2237, category: "Реле", icon: "Cpu", description: "Четырёхканальное реле с RF-поддержкой для сложных сценариев автоматизации." },
  { id: 55, name: "ZigBee реле 2CHMINI 10A TUYA eWeLink", price: 1170, category: "Реле", icon: "Cpu", description: "Компактное двухканальное реле 10А в миниатюрном корпусе." },
  { id: 56, name: "ZigBee реле 2CHMINI TUYA eWeLink БЕЗ НЕЙТРАЛИ", price: 1376, category: "Реле", icon: "Cpu", description: "Двухканальное реле для монтажа без нейтрального провода." },
  { id: 83, name: "Реле 4-х канальное ZigBee RF 7-24V eWeLink", price: 2688, category: "Реле", icon: "Cpu", description: "Четырёхканальное реле с питанием 7-24В и RF-управлением." },
  { id: 84, name: "Реле Sonoff ZBMINI ZigBee", price: 1174, category: "Реле", icon: "Cpu", description: "Классическое миниатюрное реле Sonoff первого поколения.", discontinued: true },
  { id: 85, name: "Реле Sonoff ZBMINI ZigBee (сухой контакт)", price: 1564, category: "Реле", icon: "Cpu", description: "Версия ZBMINI с переделкой под сухой контакт.", discontinued: true },
  { id: 104, name: "Реле SONOFF ZigBee MINI-ZB2GS-L (2 канала без нейтрали)", price: 0, category: "Реле", icon: "Cpu", description: "Двухканальное реле без нейтрали. Цена уточняется." },

  // Выключатели механические
  { id: 31, name: "Выключатель ZigBee 1C-86-W MILD eWeLink", price: 1081, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный механический выключатель формата 86, белый." },
  { id: 32, name: "Выключатель ZigBee 3C-86-W MILD eWeLink", price: 1327, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный механический выключатель формата 86, белый." },
  { id: 33, name: "Выключатель ZigBee 3C-90 ULTRA-B eWeLink", price: 1262, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный выключатель ULTRA формата 90, чёрный." },
  { id: 34, name: "Выключатель ZigBee 1C-90 ULTRA-B eWeLink", price: 1000, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный выключатель ULTRA формата 90, чёрный." },
  { id: 35, name: "Выключатель ZigBee 2C-90 ULTRA-B eWeLink", price: 1132, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный выключатель ULTRA формата 90, чёрный." },
  { id: 36, name: "Выключатель ZigBee 2C-86-W MILD eWeLink", price: 1180, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный механический выключатель формата 86, белый." },
  { id: 37, name: "Выключатель ZigBee 1C-90 ULTRA-W eWeLink", price: 1000, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный выключатель ULTRA формата 90, белый." },
  { id: 38, name: "Выключатель ZigBee 2C-90 ULTRA-W eWeLink", price: 1132, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный выключатель ULTRA формата 90, белый." },
  { id: 39, name: "Выключатель ZigBee 3C-90 ULTRA-W eWeLink", price: 1262, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный выключатель ULTRA формата 90, белый." },
  { id: 41, name: "Sonoff ZBM5-1C-120W ZigBee", price: 2926, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный выключатель Sonoff серии ZBM5, формат 120, белый." },
  { id: 42, name: "Sonoff ZBM5-2C-120W ZigBee", price: 3011, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный выключатель Sonoff серии ZBM5, формат 120, белый." },
  { id: 43, name: "Sonoff ZBM5-3C-120W ZigBee", price: 3097, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный выключатель Sonoff серии ZBM5, формат 120, белый." },
  { id: 44, name: "Выключатель ZigBee 1C-86-B MILD eWeLink", price: 1081, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный механический выключатель формата 86, чёрный." },
  { id: 45, name: "Выключатель ZigBee 2C-86-B MILD eWeLink", price: 1180, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный механический выключатель формата 86, чёрный." },
  { id: 46, name: "Выключатель ZigBee 3C-86-B MILD eWeLink", price: 1327, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный механический выключатель формата 86, чёрный." },
  { id: 49, name: "Sonoff ZBM5-1C-86W ZigBee", price: 3290, category: "Выключатели", icon: "ToggleLeft", description: "Одноклавишный выключатель Sonoff серии ZBM5, формат 86, белый." },
  { id: 50, name: "Sonoff ZBM5-2C-86W ZigBee", price: 3848, category: "Выключатели", icon: "ToggleLeft", description: "Двухклавишный выключатель Sonoff серии ZBM5, формат 86, белый." },
  { id: 51, name: "Sonoff ZBM5-3C-86W ZigBee", price: 3978, category: "Выключатели", icon: "ToggleLeft", description: "Трёхклавишный выключатель Sonoff серии ZBM5, формат 86, белый." },
  { id: 60, name: "Выключатель для реле SONOFF E1GSL (ZBMINIL2)", price: 1009, category: "Выключатели", icon: "ToggleLeft", description: "Выносная клавиша для управления реле ZBMINIL2, монтируется в стандартную коробку." },
  { id: 102, name: "SONOFF ZigBee MINI-ZB2GS-E (2 канала)", price: 0, category: "Выключатели", icon: "ToggleLeft", description: "Двухканальный выключатель Sonoff. Цена уточняется." },
  { id: 103, name: "SONOFF ZigBee MINI-ZB2GS-L-E (2 канала без нейтрали)", price: 0, category: "Выключатели", icon: "ToggleLeft", description: "Двухканальный выключатель без нейтрали. Цена уточняется." },

  // Сенсорные выключатели
  { id: 63, name: "Сенсорный выключатель Zigbee 3CH SS3 (чёрный)", price: 1784, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 3-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 64, name: "Сенсорный выключатель Zigbee 6CH SS6 (чёрный)", price: 2034, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 6-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 65, name: "Сенсорный выключатель Zigbee 4CH SS4 (белый)", price: 1867, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 4-канальный сенсорный выключатель на аккумуляторах, белый." },
  { id: 66, name: "Сенсорный выключатель Zigbee 4CH SS4 (чёрный)", price: 1867, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 4-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 67, name: "Сенсорный выключатель Zigbee 5CH SS5 (белый)", price: 1950, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 5-канальный сенсорный выключатель на аккумуляторах, белый." },
  { id: 68, name: "Сенсорный выключатель Zigbee 5CH SS5 (чёрный)", price: 1950, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 5-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 69, name: "Сенсорный выключатель Zigbee 1CH SS1 (белый)", price: 1619, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 1-канальный сенсорный выключатель на аккумуляторах, белый." },
  { id: 70, name: "Сенсорный выключатель Zigbee 1CH SS1 (чёрный)", price: 1619, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 1-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 71, name: "Сенсорный выключатель Zigbee 2CH SS2 (белый)", price: 1702, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 2-канальный сенсорный выключатель на аккумуляторах, белый." },
  { id: 72, name: "Сенсорный выключатель Zigbee 2CH SS2 (чёрный)", price: 1702, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 2-канальный сенсорный выключатель на аккумуляторах, чёрный." },
  { id: 73, name: "Сенсорный выключатель Zigbee 3CH SS3 (белый)", price: 1784, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 3-канальный сенсорный выключатель на аккумуляторах, белый." },
  { id: 101, name: "Сенсорный выключатель Zigbee 6CH SS6 (белый)", price: 2034, category: "Сенсорные выключатели", icon: "Fingerprint", description: "Беспроводной 6-канальный сенсорный выключатель на аккумуляторах, белый." },

  // Розетки
  { id: 5, name: "SONOFF Zigbee S60ZBTPF 16A", price: 1850, category: "Розетки", icon: "Plug", description: "Умная розетка 16А с функцией мониторинга энергопотребления." },
  { id: 8, name: "Sonoff S26R2ZB ZigBee", price: 1426, category: "Розетки", icon: "Plug", description: "Компактная умная розетка с контролем включения/выключения." },
  { id: 24, name: "Розетка 20А-B ZigBee eWeLink", price: 804, category: "Розетки", icon: "Plug", description: "Встраиваемая розетка 20А, чёрная, формат 86." },
  { id: 27, name: "Розетка 16А-W ZigBee eWeLink", price: 706, category: "Розетки", icon: "Plug", description: "Встраиваемая розетка 16А, белая, формат 86." },
  { id: 92, name: "Розетка 16А-B ZigBee eWeLink", price: 770, category: "Розетки", icon: "Plug", description: "Встраиваемая розетка 16А, чёрная, формат 86." },
  { id: 94, name: "Розетка 20А-W ZigBee eWeLink", price: 721, category: "Розетки", icon: "Plug", description: "Встраиваемая розетка 20А, белая, формат 86." },
  { id: 99, name: "Розетка NT86-ZBS1F-BK", price: 1420, category: "Розетки", icon: "Plug", description: "Встраиваемая розетка ZigBee с функцией защиты от перегрузки, чёрная." },

  // Датчики температуры
  { id: 2, name: "SONOFF SNZB-02LD IP65", price: 2293, category: "Датчики температуры", icon: "Thermometer", description: "Датчик температуры и влажности в защищённом корпусе IP65 для улицы и влажных помещений." },
  { id: 4, name: "SONOFF SNZB-02WD IP65", price: 2136, category: "Датчики температуры", icon: "Thermometer", description: "Уличный датчик температуры и влажности IP65 с дисплеем." },
  { id: 10, name: "SONOFF SNZB-02P ZigBee", price: 1174, category: "Датчики температуры", icon: "Thermometer", description: "Компактный датчик температуры и влажности с батарейным питанием." },
  { id: 13, name: "SONOFF SNZB-02D ZigBee (с дисплеем)", price: 1486, category: "Датчики температуры", icon: "Thermometer", description: "Датчик температуры и влажности со встроенным дисплеем." },
  { id: 78, name: "SONOFF SNZB-02DR2 ZigBee", price: 2008, category: "Датчики температуры", icon: "Thermometer", description: "Обновлённая версия датчика температуры и влажности с улучшенной точностью." },
  { id: 87, name: "Датчик температуры ZigBee TIV02 eWeLink", price: 878, category: "Датчики температуры", icon: "Thermometer", description: "Бюджетный датчик температуры и влажности от eWeLink." },

  // Датчики движения и присутствия
  { id: 12, name: "SONOFF SNZB-06P ZigBee", price: 2005, category: "Датчики движения", icon: "Eye", description: "Датчик присутствия на основе микроволнового сенсора — фиксирует даже спящего человека." },
  { id: 15, name: "SONOFF SNZB-03P ZigBee", price: 1322, category: "Датчики движения", icon: "Eye", description: "ИК-датчик движения с широким углом обзора 120° и дальностью 6 метров." },
  { id: 19, name: "Датчик движения ZigBee KR1 eWeLink", price: 2710, category: "Датчики движения", icon: "Eye", description: "Потолочный датчик движения 360° для коммерческих и жилых помещений." },
  { id: 20, name: "Датчик движения ZigBee KV1 eWeLink", price: 1501, category: "Датчики движения", icon: "Eye", description: "Угловой датчик движения с настройкой зоны обнаружения." },
  { id: 23, name: "Датчик присутствия ZigBee eWeLink", price: 2848, category: "Датчики движения", icon: "Eye", description: "Радарный датчик присутствия для точного определения нахождения человека." },
  { id: 89, name: "Датчик движения ZigBee eWeLink", price: 1019, category: "Датчики движения", icon: "Eye", description: "Классический ИК-датчик движения для базовой автоматизации." },
  { id: 90, name: "Датчик присутствия ZigBee (встраиваемый) eWeLink", price: 2886, category: "Датчики движения", icon: "Eye", description: "Встраиваемый в потолок радарный датчик присутствия." },

  // Датчики открытия
  { id: 16, name: "SONOFF SNZB-04P ZigBee", price: 1100, category: "Датчики открытия", icon: "DoorOpen", description: "Датчик открытия двери или окна с магнитным механизмом и уведомлениями." },
  { id: 80, name: "SONOFF SNZB-04PR2 ZigBee", price: 1207, category: "Датчики открытия", icon: "DoorOpen", description: "Обновлённый датчик открытия с улучшенным радиусом связи." },
  { id: 81, name: "SONOFF SNZB-04 ZigBee", price: 936, category: "Датчики открытия", icon: "DoorOpen", description: "Базовый датчик открытия первого поколения.", discontinued: true },

  // Датчики протечки
  { id: 3, name: "SONOFF SNZB-05P ZigBee + кабель WLDC200", price: 1904, category: "Датчики протечки", icon: "Droplets", description: "Датчик протечки с выносным кабелем-сенсором WLDC200 для труднодоступных мест." },
  { id: 17, name: "SONOFF SNZB-05P ZigBee", price: 1066, category: "Датчики протечки", icon: "Droplets", description: "Компактный датчик протечки с мгновенным оповещением на смартфон." },
  { id: 18, name: "Датчик протечки ZigBee ZG-222Z eWeLink", price: 901, category: "Датчики протечки", icon: "Droplets", description: "Бюджетный датчик протечки с уведомлениями через приложение." },
  { id: 26, name: "Кабель SONOFF WLDC200", price: 1304, category: "Датчики протечки", icon: "Droplets", description: "Выносной кабель-сенсор 200 см для датчика протечки SNZB-05P." },

  // Датчики дыма
  { id: 25, name: "Датчик дыма ZigBee", price: 3073, category: "Датчики дыма", icon: "FlameKindling", description: "Автономный датчик дыма с ZigBee связью и громкой сиреной." },
  { id: 74, name: "Датчик дыма ZigBee eWeLink", price: 3073, category: "Датчики дыма", icon: "FlameKindling", description: "Сертифицированный датчик дыма с интеграцией в экосистему eWeLink." },
  { id: 52, name: "Датчик дождя ZigBee SRS01", price: 1549, category: "Датчики дыма", icon: "CloudRain", description: "Датчик дождя для автоматического закрытия окон и управления поливом." },

  // Климат
  { id: 9, name: "Термостатический клапан SONOFF TRVZB ZigBee", price: 3768, category: "Климат", icon: "Gauge", description: "Умный термостатический клапан для радиаторов отопления с программированием по расписанию." },
  { id: 28, name: "Термостатический клапан ZigBee NT001-W eWeLink", price: 2458, category: "Климат", icon: "Gauge", description: "Термостатический клапан для радиаторов, белый, с поддержкой eWeLink." },
  { id: 29, name: "Термостатический клапан ZigBee NT001-B eWeLink", price: 2458, category: "Климат", icon: "Gauge", description: "Термостатический клапан для радиаторов, чёрный, с поддержкой eWeLink." },
  { id: 7, name: "Водяной клапан SONOFF SWV-BSP ZigBee", price: 3409, category: "Климат", icon: "Droplet", description: "Умный шаровой клапан для управления подачей воды, резьба BSP." },
  { id: 61, name: "Комплект для управления климатом", price: 0, category: "Климат", icon: "Gauge", description: "Готовый комплект для автоматизации климата. Цена уточняется." },

  // Освещение
  { id: 40, name: "Потолочный спот ZigBee с доп. Б.П. NT10W eWeLink", price: 1524, category: "Освещение", icon: "Lightbulb", description: "Потолочный светильник-спот ZigBee 10Вт с внешним блоком питания." },
  { id: 47, name: "Потолочный спот ZigBee со встроеным Б.П. NT10WIN eWeLink", price: 1603, category: "Освещение", icon: "Lightbulb", description: "Потолочный спот ZigBee 10Вт со встроенным блоком питания." },
  { id: 53, name: "Потолочная лампа 24Вт RGB 30х30 см ZigBee eWeLink", price: 2854, category: "Освещение", icon: "Lightbulb", description: "Умная потолочная лампа 24Вт RGB, 30×30 см, с управлением цветом и яркостью." },
  { id: 76, name: "Димер ZigBee SONOFF MINI-ZBDIM", price: 3062, category: "Освещение", icon: "SunMedium", description: "Встраиваемый диммер для управления яркостью светодиодных и ламп накаливания." },
  { id: 79, name: "Диммер ZigBee SONOFF MINI-ZBDIM-E", price: 4312, category: "Освещение", icon: "SunMedium", description: "Расширенная версия диммера с поддержкой большего диапазона ламп." },
  { id: 95, name: "Потолочный спот ZigBee с доп. Б.П. NT16W eWeLink", price: 1805, category: "Освещение", icon: "Lightbulb", description: "Потолочный спот ZigBee 16Вт с внешним блоком питания." },
  { id: 96, name: "Потолочный спот ZigBee со встроеным Б.П. NT16WIN eWeLink", price: 2226, category: "Освещение", icon: "Lightbulb", description: "Потолочный спот ZigBee 16Вт со встроенным блоком питания." },
  { id: 98, name: "Потолочная лампа 36Вт RGB 38х38 см ZigBee eWeLink", price: 3698, category: "Освещение", icon: "Lightbulb", description: "Умная потолочная лампа 36Вт RGB, 38×38 см, с полным управлением через приложение." },

  // Шторы
  { id: 59, name: "Выключатель для штор SONOFF ZigBee MINI-ZBRBS-E", price: 2653, category: "Шторы", icon: "PanelTop", description: "Встраиваемый контроллер для моторных штор и рольставней." },
  { id: 82, name: "Умный мотор для штор SONOFF ZigBee", price: 12455, category: "Шторы", icon: "PanelTop", description: "Умный привод для рулонных штор с управлением через приложение.", discontinued: true },

  // Кнопки
  { id: 14, name: "SONOFF SNZB-01P ZigBee", price: 1180, category: "Кнопки", icon: "CircleDot", description: "Беспроводная кнопка сцен для запуска автоматизации одним нажатием." },
  { id: 77, name: "SONOFF SNZB-01M ZigBee", price: 2459, category: "Кнопки", icon: "CircleDot", description: "Миниатюрная беспроводная кнопка с магнитным креплением." },

  // Шлюзы
  { id: 21, name: "Sonoff ZB Bridge-P", price: 2449, category: "Шлюзы", icon: "Router", description: "Локальный шлюз ZigBee с поддержкой до 128 устройств и локальной автоматизацией." },
]

const categoryOrder = ["Шлюзы", "Реле", "Выключатели", "Сенсорные выключатели", "Розетки", "Датчики температуры", "Датчики движения", "Датчики открытия", "Датчики протечки", "Датчики дыма", "Климат", "Освещение", "Шторы", "Кнопки"]
const categories = categoryOrder.filter(cat => products.some(p => p.category === cat))

const categoryColors: Record<string, string> = {
  "Реле": "bg-blue-100 text-blue-700 border-blue-200",
  "Выключатели": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Сенсорные выключатели": "bg-violet-100 text-violet-700 border-violet-200",
  "Розетки": "bg-orange-100 text-orange-700 border-orange-200",
  "Датчики температуры": "bg-red-100 text-red-700 border-red-200",
  "Датчики движения": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Датчики открытия": "bg-green-100 text-green-700 border-green-200",
  "Датчики протечки": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Датчики дыма": "bg-rose-100 text-rose-700 border-rose-200",
  "Климат": "bg-teal-100 text-teal-700 border-teal-200",
  "Освещение": "bg-amber-100 text-amber-700 border-amber-200",
  "Шторы": "bg-purple-100 text-purple-700 border-purple-200",
  "Кнопки": "bg-pink-100 text-pink-700 border-pink-200",
  "Шлюзы": "bg-gray-100 text-gray-700 border-gray-200",
}

const categoryIconColors: Record<string, string> = {
  "Реле": "from-blue-500 to-blue-600",
  "Выключатели": "from-indigo-500 to-indigo-600",
  "Сенсорные выключатели": "from-violet-500 to-violet-600",
  "Розетки": "from-orange-500 to-orange-600",
  "Датчики температуры": "from-red-500 to-red-600",
  "Датчики движения": "from-yellow-500 to-yellow-600",
  "Датчики открытия": "from-green-500 to-green-600",
  "Датчики протечки": "from-cyan-500 to-cyan-600",
  "Датчики дыма": "from-rose-500 to-rose-600",
  "Климат": "from-teal-500 to-teal-600",
  "Освещение": "from-amber-500 to-amber-600",
  "Шторы": "from-purple-500 to-purple-600",
  "Кнопки": "from-pink-500 to-pink-600",
  "Шлюзы": "from-gray-500 to-gray-600",
}

export default function ZigBeeCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Все")
  const [showDiscontinued, setShowDiscontinued] = useState(false)

  const filtered = products.filter(p => {
    if (!showDiscontinued && p.discontinued) return false
    if (activeCategory !== "Все" && p.category !== activeCategory) return false
    return true
  })

  const groupedByCategory = categories.reduce<Record<string, Product[]>>((acc, cat) => {
    const items = filtered.filter(p => p.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
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
            <Link to="/smarthome">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Умный дом
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Icon name="Zap" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">ZigBee устройства</h1>
              <p className="text-gray-500">Каталог Sonoff и eWeLink · {products.filter(p => !p.discontinued).length} устройств</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="pb-6 px-4 sm:px-6 lg:px-8 sticky top-16 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto py-3">
          <div className="flex gap-2 flex-wrap items-center">
            <button
              onClick={() => setActiveCategory("Все")}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeCategory === "Все"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
              }`}
            >
              Все
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500"
                    : `${categoryColors[cat]} hover:opacity-80`
                }`}
              >
                {cat}
              </button>
            ))}
            <label className="ml-auto flex items-center gap-2 text-sm text-gray-500 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showDiscontinued}
                onChange={e => setShowDiscontinued(e.target.checked)}
                className="rounded"
              />
              Снятые с производства
            </label>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${categoryIconColors[category]} flex items-center justify-center`}>
                  <Icon name={items[0].icon} size={18} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[category]}`}>
                  {items.length}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(product => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-2xl border p-4 shadow-sm hover:shadow-md transition-all ${
                      product.discontinued ? "opacity-60" : ""
                    }`}
                  >
                    {/* Icon placeholder */}
                    <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${categoryIconColors[product.category]} flex items-center justify-center mb-4`}>
                      <Icon name={product.icon} size={48} className="text-white/80" />
                    </div>

                    <div className="space-y-2">
                      {product.discontinued && (
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                          Снят с производства
                        </span>
                      )}
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="pt-1">
                        {product.price > 0 ? (
                          <span className="text-lg font-bold text-orange-600">
                            {product.price.toLocaleString("ru-RU")} ₽
                          </span>
                        ) : (
                          <span className="text-sm text-gray-400">Цена уточняется</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Нужна помощь с выбором?</h2>
          <p className="text-orange-100 mb-8">
            Наш специалист подберёт оптимальный комплект устройств под ваш объект и бюджет
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