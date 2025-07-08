import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";

const REGIONS_DATA = {
  "77": {
    name: "Москва",
    support: "До 50% компенсации на молочное оборудование",
    equipment: "Доильные аппараты, системы охлаждения молока",
    percent: "50%",
    document: "Постановление Правительства Москвы № 123",
  },
  "78": {
    name: "Санкт-Петербург",
    support: "До 40% компенсации на тепличное оборудование",
    equipment: "Системы полива, климат-контроль",
    percent: "40%",
    document: "Постановление Правительства СПб № 456",
  },
  "22": {
    name: "Алтайский край",
    support: "До 30% компенсации на тракторы класса 5-8",
    equipment: "Колесные тракторы, произведенные в РФ",
    percent: "30%",
    document: "Постановление Правительства Алтайского края № 465",
  },
  "23": {
    name: "Краснодарский край",
    support: "До 50% компенсации на овощехранилища",
    equipment: "Овощехранилища, зерносушилки",
    percent: "50%",
    document: "Постановление Правительства Краснодарского края № 789",
  },
  "16": {
    name: "Республика Татарстан",
    support: "До 30% компенсации на зерноуборочные комбайны",
    equipment: "Зерноуборочные комбайны российского производства",
    percent: "30%",
    document: "Постановление Кабинета Министров РТ № 321",
  },
  "31": {
    name: "Белгородская область",
    support: "До 40% компенсации на кормораздатчики",
    equipment: "Кормораздатчики, миксеры кормов",
    percent: "40%",
    document: "Постановление Правительства Белгородской области № 654",
  },
  "50": {
    name: "Московская область",
    support: "До 35% компенсации на системы орошения",
    equipment: "Системы капельного орошения",
    percent: "35%",
    document: "Постановление Правительства МО № 987",
  },
  "61": {
    name: "Ростовская область",
    support: "До 25% компенсации на сеялки",
    equipment: "Сеялки зерновые, пропашные",
    percent: "25%",
    document: "Постановление Правительства Ростовской области № 246",
  },
};

const FAQ_DATA = [
  {
    question: "Какие условия для получения субсидии?",
    answer:
      "Для получения субсидии необходимо: иметь статус сельхозпроизводителя, приобретать технику российского производства не старше 5 лет, подать заявку в установленные сроки.",
  },
  {
    question: "Сколько времени рассматривается заявка?",
    answer:
      "Срок рассмотрения заявки составляет от 2 недель до 3 месяцев в зависимости от региона и объема заявок.",
  },
  {
    question: "Можно ли совмещать федеральные и региональные субсидии?",
    answer:
      "Да, возможно сочетание федеральных и региональных субсидий, но общая поддержка обычно не превышает 50-70% стоимости техники.",
  },
  {
    question: "Какая техника входит в программу поддержки?",
    answer:
      "Тракторы классов 3-8, комбайны, сеялки, опрыскиватели, доильные аппараты, системы орошения, зерносушилки и другое оборудование для сельского хозяйства.",
  },
  {
    question: "Можно ли получить субсидию на подержанную технику?",
    answer:
      "В большинстве регионов поддержка распространяется только на новую технику или технику не старше 3-5 лет.",
  },
];

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleRegionSelect = (regionCode: string) => {
    setSelectedRegion(regionCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Tractor" className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">
                Росагролизинг
              </span>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600">
                Главная
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Услуги
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Поддержка
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Региональные меры поддержки
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Узнайте, какие меры господдержки действуют в Вашем регионе
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Приобретайте с/х технику и оборудование с дополнительной выгодой
              </h2>
              <p className="text-green-100 leading-relaxed">
                Росагролизинг предоставляет своим клиентам уникальный лизинговый
                инструмент по приобретению и обновлению парка сельхозтехники и
                оборудования. Теперь клиенты Росагролизинга могут
                воспользоваться нашим лизинговым предложением на еще более
                выгодных условиях, объединив условия по программам льготного
                лизинга Росагролизинг с мерами государственной поддержки,
                действующими в регионе.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Узнайте, какие меры господдержки действуют в Вашем регионе
            </h2>
          </div>

          {/* Region Filter */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <Label
                htmlFor="region-select"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Выберите регион
              </Label>
              <Select value={selectedRegion} onValueChange={handleRegionSelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите регион" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(REGIONS_DATA).map(([code, data]) => (
                    <SelectItem key={code} value={code}>
                      {data.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Simplified Map */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(REGIONS_DATA).map(([code, data]) => (
                <Button
                  key={code}
                  variant={selectedRegion === code ? "default" : "outline"}
                  className={`p-4 h-auto text-left ${selectedRegion === code ? "bg-green-600 hover:bg-green-700" : ""}`}
                  onClick={() => handleRegionSelect(code)}
                >
                  <div>
                    <div className="font-semibold text-sm">{data.name}</div>
                    <div className="text-xs opacity-75 mt-1">
                      {data.percent} субсидия
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Region Details */}
          {selectedRegion && REGIONS_DATA[selectedRegion] && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-5 w-5 text-green-600" />
                  {REGIONS_DATA[selectedRegion].name}
                </CardTitle>
                <CardDescription>
                  {REGIONS_DATA[selectedRegion].support}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Техника под субсидию
                    </h3>
                    <p className="text-gray-600">
                      {REGIONS_DATA[selectedRegion].equipment}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Процент субсидии
                    </h3>
                    <Badge variant="secondary" className="text-lg">
                      {REGIONS_DATA[selectedRegion].percent}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Нормативный документ
                    </h3>
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-700 text-sm underline"
                    >
                      {REGIONS_DATA[selectedRegion].document}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Получить консультацию
            </h2>
            <p className="text-gray-600">
              Наши специалисты помогут подобрать оптимальную программу поддержки
              для вашего региона
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Как к вам обращаться?</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Контактный телефон *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: formatPhoneNumber(e.target.value),
                      })
                    }
                    placeholder="+7 (___) ___-____"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Ваш E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Введите сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Опишите ваш вопрос или требования к технике"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Задать вопрос
                </Button>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Нажимая кнопку «Задать вопрос», вы соглашаетесь с «Политикой в
                  области обработки и защиты персональных данных», а также даете
                  согласие на обработку персональных данных, указанных вами в
                  заявке.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Tractor" className="h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold">Росагролизинг</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лизинговые решения для сельского хозяйства
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Лизинг техники
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Государственная поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Консультации
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Центр поддержки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>8 (800) 123-45-67</p>
                <p>info@rosagroleasing.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Росагролизинг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
