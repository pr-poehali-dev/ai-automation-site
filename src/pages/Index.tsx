import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const services = [
    {
      icon: "Bot",
      title: "Интеллектуальные чат-боты",
      description: "Разработка AI-ботов для автоматизации общения с клиентами 24/7. Понимание естественного языка, персонализация ответов.",
      features: ["Многоканальность", "ML-обучение", "Интеграция с CRM"],
      image: "https://cdn.poehali.dev/projects/4108368e-5e58-4a73-a106-a999ed61f664/files/9da2eb73-1eed-48e2-9585-c4160d024b49.jpg"
    },
    {
      icon: "Zap",
      title: "Автоматизация процессов",
      description: "Оптимизация бизнес-процессов с помощью AI. Сокращение операционных затрат до 60%.",
      features: ["RPA технологии", "Умная маршрутизация", "Аналитика процессов"],
      image: "https://cdn.poehali.dev/projects/4108368e-5e58-4a73-a106-a999ed61f664/files/f554b145-1f87-488e-8954-a28b6ed4fdf5.jpg"
    },
    {
      icon: "Brain",
      title: "Машинное обучение",
      description: "Кастомные ML-модели для предиктивной аналитики, распознавания и классификации данных.",
      features: ["Предсказательные модели", "Computer Vision", "NLP решения"],
      image: "https://cdn.poehali.dev/projects/4108368e-5e58-4a73-a106-a999ed61f664/files/7144ee7e-e059-4ea9-8aa7-a46e7057e80c.jpg"
    }
  ];

  const cases = [
    {
      company: "E-commerce платформа",
      result: "Снижение времени ответа на 85%",
      description: "Внедрили AI-чат бот для поддержки клиентов. Обработка 2000+ запросов в день."
    },
    {
      company: "Банк",
      result: "Автоматизация 70% запросов",
      description: "Интеллектуальный помощник для операций с картами и счетами."
    },
    {
      company: "Телеком оператор",
      result: "Рост удовлетворенности на 40%",
      description: "Omnichannel бот для техподдержки на 5 платформах."
    }
  ];

  const faq = [
    {
      question: "Сколько времени занимает разработка чат-бота?",
      answer: "Базовый чат-бот разрабатывается за 2-4 недели. Сложные решения с интеграциями и ML — 1-3 месяца."
    },
    {
      question: "На каких платформах работают ваши боты?",
      answer: "Наши решения работают на Telegram, WhatsApp, веб-сайтах, мобильных приложениях и социальных сетях."
    },
    {
      question: "Как обучается AI-модель?",
      answer: "Используем данные клиента, публичные датасеты и transfer learning. Постоянное дообучение на реальных диалогах."
    },
    {
      question: "Какая стоимость внедрения?",
      answer: "От 300 000 ₽ за базовое решение. Финальная цена зависит от функционала и интеграций."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-xl font-bold">AI Automation</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Технологии будущего уже здесь</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Автоматизация бизнеса<br />с помощью <span className="text-primary">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Разрабатываем интеллектуальные чат-боты и AI-решения, которые увеличивают эффективность вашей команды в 3 раза
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          <div className="flex gap-12 justify-center mt-16 text-sm">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Автоматизация</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные AI-решения для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-slide-up overflow-hidden" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы</h2>
            <p className="text-xl text-muted-foreground">Реальные результаты наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <Icon name="TrendingUp" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.company}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{item.result}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">О компании</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Мы — команда экспертов в области искусственного интеллекта и машинного обучения с опытом более 7 лет.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Специализируемся на разработке интеллектуальных чат-ботов, систем автоматизации и кастомных ML-решений для бизнеса любого масштаба.
            Наша миссия — делать передовые AI-технологии доступными и понятными.
          </p>
          <div className="flex gap-6 justify-center">
            <Card className="p-6 bg-card border-border">
              <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Специалистов</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Icon name="Award" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Наград</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Icon name="Globe" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-muted-foreground">Стран</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о наших услугах</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">Обсудим ваш проект и найдём оптимальное решение</p>
          </div>
          <Card className="bg-card border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="flex gap-6 justify-center mt-12">
            <a href="mailto:hello@aiautomation.ru" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span>hello@aiautomation.ru</span>
            </a>
            <a href="tel:+74951234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="text-xl font-bold text-foreground">AI Automation</span>
          </div>
          <p className="mb-4">© 2024 AI Automation. Все права защищены.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
}