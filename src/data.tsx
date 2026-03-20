import { 
  Server, 
  Phone, 
  Monitor, 
  ShieldCheck, 
  LayoutDashboard, 
  Globe, 
  Headphones, 
  CheckCircle2,
  Lock,
  Zap,
  Layers,
  BarChart3,
  Box,
  Cpu
} from "lucide-react";

export const translations = {
  ru: {
    nav: {
      complex: "Комплексное",
      modular: "Модульное",
      contact: "Связаться"
    },
    hero: {
      title1: "Куча задач —",
      title2: "ОДИН",
      title3: "ПОДРЯДЧИК.",
      desc: "Мы предлагаем комплексное либо модульное решение ваших IT задач в области Call Center.",
      subtitle: "CRM Pro — это современная CRM-система, специально разработанная для компаний, которые активно работают с входящими лидами и ведут телефонные продажи. Система объединяет в себе мощные инструменты управления базой клиентов и полноценную интеграцию с колл-центром.",
      btnComplex: "Комплексное решение",
      btnModular: "Модульное решение"
    },
    complex: {
      title: "Комплексное решение",
      subtitle: "Полный цикл развертывания инфраструктуры для вашего бизнеса от А до Я.",
    },
    modular: {
      title: "Модульные решения",
      subtitle: "Собирайте свою экосистему. Выберите и интегрируйте только те инструменты, которые необходимы вашему бизнесу прямо сейчас.",
    },
    footer: {
      rights: "© 2026 CRM Pro. Все права защищены. Современные IT-решения для вашего бизнеса."
    }
  },
  en: {
    nav: {
      complex: "Comprehensive",
      modular: "Modular",
      contact: "Contact Us"
    },
    hero: {
      title1: "A ton of tasks —",
      title2: "ONE",
      title3: "CONTRACTOR.",
      desc: "We offer a comprehensive or modular solution for your IT tasks in the Call Center field.",
      subtitle: "CRM Pro is a modern CRM system specifically designed for companies actively working with inbound leads and conducting telephone sales. The system combines powerful customer base management tools with full call center integration.",
      btnComplex: "Comprehensive Solution",
      btnModular: "Modular Solution"
    },
    complex: {
      title: "Comprehensive Solution",
      subtitle: "Full cycle of infrastructure deployment for your business from A to Z.",
    },
    modular: {
      title: "Modular Solutions",
      subtitle: "Build your ecosystem. Choose and integrate only the tools your business needs right now.",
    },
    footer: {
      rights: "© 2026 CRM Pro. All rights reserved. Modern IT solutions for your business."
    }
  }
};

export const getComplexSteps = (lang: 'ru' | 'en') => {
  const isRu = lang === 'ru';
  return [
    {
      id: 1,
      title: isRu ? "Инфраструктура" : "Infrastructure",
      shortDesc: isRu ? "Выделение и настройка VPS" : "Allocation and configuration of VPS",
      icon: Server,
      iconColor: "text-blue-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы предоставляем виртуальные выделенные серверы (VPS), спроектированные для работы с нулевыми просадками производительности. В отличие от стандартных решений, наши ресурсы полностью изолированы на аппаратном уровне.
          </p>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative z-10 backdrop-blur-sm">
            <h4 className="font-bold text-white mb-3">Принцип «Один менеджер - Одна машина»</h4>
            <p className="text-sm text-slate-400 mb-4">Каждый сотрудник получает персональную VPS. Это означает, что ресурсы процессора и памяти не делятся на всю команду, а принадлежат конкретному пользователю.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Прирост производительности:</strong> Отсутствие конкуренции за мощности внутри команды дает максимально быстрый отклик системы.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Стабильность рабочего процесса:</strong> Нагрузка, создаваемая одним менеджером, никак не влияет на скорость работы остальных.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Эффективность:</strong> Автономная работа каждой машины позволяет оптимизировать процессы внутри одной сессии, не мешая работе остальной команды.</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We provide Virtual Private Servers (VPS) designed to operate with zero performance drops. Unlike standard solutions, our resources are completely isolated at the hardware level.
          </p>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative z-10 backdrop-blur-sm">
            <h4 className="font-bold text-white mb-3">The "One Manager - One Machine" Principle</h4>
            <p className="text-sm text-slate-400 mb-4">Each employee receives a personal VPS. This means CPU and memory resources are not shared across the team, but belong to a specific user.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Performance Boost:</strong> No competition for power within the team ensures the fastest possible system response.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Workflow Stability:</strong> The load created by one manager does not affect the speed of the rest of the team.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span><strong>Efficiency:</strong> Autonomous operation of each machine allows optimizing processes within one session without interfering with the rest of the team.</span>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 2,
      title: isRu ? "Связь" : "Communication",
      shortDesc: isRu ? "Внедрение SIP-телефонии" : "SIP telephony implementation",
      icon: Phone,
      iconColor: "text-emerald-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы интегрируем проверенные VoIP-решения, обеспечивающие безупречное качество голоса и стабильно высокий процент дозвона.
          </p>
          <h4 className="font-bold text-white mb-4">Ключевые преимущества:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {[
              { t: "Success Rate", d: "Стабильные показатели в EU и ASIA регионах." },
              { t: "Caller ID", d: "Настройка DID номера, под регион клиента." },
              { t: "Аналитика", d: "Интерактивные дашборды для мониторинга в реальном времени. Вы полностью контролируете активность." },
              { t: "Запись разговоров", d: "Весь аудиопоток фиксируется и доступен внутри системы для контроля качества." },
              { t: "Анонимность", d: "Поддержка оплаты через криптовалюты, что обеспечивает приватность вашего проекта." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-2">{item.t}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We integrate proven VoIP solutions that ensure flawless voice quality and a consistently high connection rate.
          </p>
          <h4 className="font-bold text-white mb-4">Key Benefits:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {[
              { t: "Success Rate", d: "Stable performance in EU and ASIA regions." },
              { t: "Caller ID", d: "DID number configuration tailored to the client's region." },
              { t: "Analytics", d: "Interactive dashboards for real-time monitoring. You fully control the activity." },
              { t: "Call Recording", d: "The entire audio stream is recorded and available within the system for quality control." },
              { t: "Anonymity", d: "Support for cryptocurrency payments, ensuring the privacy of your project." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-2">{item.t}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 3,
      title: isRu ? "Рабочее окружение" : "Workspace Environment",
      shortDesc: isRu ? "Предустановка менеджерского софта и мессенджеров" : "Pre-installation of management software and messengers",
      icon: Monitor,
      iconColor: "text-purple-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы берем на себя техническую подготовку рабочих мест, избавляя вас от рутины. Ваши менеджеры получают полностью настроенные VPS со всем необходимым инструментарием, готовым к эксплуатации с первого входа.
          </p>
          <h4 className="font-bold text-white mb-4">Что мы обеспечиваем:</h4>
          <ul className="space-y-4 relative z-10">
            <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">1</div>
              <p className="text-sm text-slate-300 mt-1"><strong>Регистрация и поддержка:</strong> Мы берем на себя процесс регистрации и технического сопровождения рабочих аккаунтов в WhatsApp, Telegram и Google Voice.</p>
            </li>
            <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">2</div>
              <p className="text-sm text-slate-300 mt-1"><strong>Предустановка софта:</strong> Полная инсталляция необходимых инструментов для связи и удаленного доступа — Softphone, AnyDesk и другие программы по вашему запросу.</p>
            </li>
          </ul>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We handle the technical preparation of workspaces, freeing you from routine. Your managers receive fully configured VPS with all necessary tools, ready to use from the first login.
          </p>
          <h4 className="font-bold text-white mb-4">What we provide:</h4>
          <ul className="space-y-4 relative z-10">
            <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">1</div>
              <p className="text-sm text-slate-300 mt-1"><strong>Registration & Support:</strong> We handle the registration and technical support of work accounts in WhatsApp, Telegram, and Google Voice.</p>
            </li>
            <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">2</div>
              <p className="text-sm text-slate-300 mt-1"><strong>Software Pre-installation:</strong> Full installation of necessary communication and remote access tools — Softphone, AnyDesk, and other programs upon your request.</p>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 4,
      title: isRu ? "Безопасность" : "Security",
      shortDesc: isRu ? "Создание VPN-туннелей" : "Creation of VPN tunnels",
      icon: ShieldCheck,
      iconColor: "text-red-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы создаем закрытый периметр для вашего проекта. Вместо публичных сервисов мы поднимаем выделенный VPN-сервер, который принадлежит только вам, обеспечивая полную анонимность и защиту корпоративного трафика что дает возможность вашим сотрудникам работать из любой точки мира безопасно.
          </p>
          <h4 className="font-bold text-white mb-4">Что это дает вашему бизнесу:</h4>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Lock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Персональный сервер</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Вы получаете выделенный IP-адрес и личный туннель. Это исключает блокировки, которые часто случаются на общих VPN-сервисах из-за действий других пользователей.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Шифрование данных</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Весь входящий и исходящий трафик защищен сквозным шифрованием. Это гарантирует, что конфиденциальная информация, пароли и базы данных защищены от перехвата извне.</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We create a closed perimeter for your project. Instead of public services, we set up a dedicated VPN server that belongs only to you, ensuring complete anonymity and protection of corporate traffic, allowing your employees to work safely from anywhere in the world.
          </p>
          <h4 className="font-bold text-white mb-4">What this gives your business:</h4>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Lock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Personal Server</h4>
                <p className="text-sm text-slate-400 leading-relaxed">You get a dedicated IP address and a private tunnel. This eliminates blocks that often occur on shared VPN services due to the actions of other users.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Data Encryption</h4>
                <p className="text-sm text-slate-400 leading-relaxed">All incoming and outgoing traffic is protected by end-to-end encryption. This ensures that confidential information, passwords, and databases are protected from external interception.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 5,
      title: isRu ? "Управление" : "Management",
      shortDesc: isRu ? "Подключение CRM" : "CRM Integration",
      icon: LayoutDashboard,
      iconColor: "text-orange-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы внедряем облачную CRM-систему, спроектированную для работы с большими объемами трафика. Это единый хаб, который объединяет управление клиентской базой, финансовые потоки и профессиональный колл-центр в одном интерфейсе.
          </p>
          <h4 className="font-bold text-white mb-4">Ключевой функционал:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            {[
              { title: "Сквозная интеграция", desc: "Синхронизация с торговым интерфейсом клиента." },
              { title: "Click-to-Call", desc: "Прямой вызов клиента одной кнопкой." },
              { title: "Умное управление", desc: "19 преднастроенных статусов воронки." },
              { title: "Мгновенный импорт", desc: "Массовая загрузка контактов из Excel/CSV." },
              { title: "Ролевая модель", desc: "Гибкое разграничение прав доступа." },
              { title: "Массовые операции", desc: "Распределение клиентов между командами." },
              { title: "Аналитика", desc: "Интерактивный Dashboard с метриками." },
              { title: "Полная история", desc: "Единая лента событий по каждому клиенту." },
              { title: "Адаптивный UI", desc: "Оптимизация для любых устройств." }
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white text-sm block mb-0.5">{feat.title}</span>
                  <span className="text-xs text-slate-400">{feat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We implement a cloud-based CRM system designed to handle large volumes of traffic. It's a single hub that combines customer base management, financial flows, and a professional call center in one interface.
          </p>
          <h4 className="font-bold text-white mb-4">Key Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            {[
              { title: "End-to-end Integration", desc: "Synchronization with the client's trading interface." },
              { title: "Click-to-Call", desc: "Direct client call with one button." },
              { title: "Smart Management", desc: "19 pre-configured funnel statuses." },
              { title: "Instant Import", desc: "Mass upload of contacts from Excel/CSV." },
              { title: "Role Model", desc: "Flexible access rights differentiation." },
              { title: "Mass Operations", desc: "Distribution of clients between teams." },
              { title: "Analytics", desc: "Interactive Dashboard with metrics." },
              { title: "Full History", desc: "A single event feed for each client." },
              { title: "Adaptive UI", desc: "Optimization for any device." }
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white text-sm block mb-0.5">{feat.title}</span>
                  <span className="text-xs text-slate-400">{feat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 6,
      title: isRu ? "Клиентский сервис" : "Client Service",
      shortDesc: isRu ? "Запуск платформы для взаимодействия с конечным потребителем" : "Launch of a platform for interaction with the end consumer",
      icon: Globe,
      iconColor: "text-cyan-500",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы запускаем для вашего бизнеса торговый терминал, который синхронизирован с CRM-системой. Вы получаете готовый, современный продукт для конечного потребителя, полностью настроенный под ваш бренд.
          </p>
          <h4 className="font-bold text-white mb-4">Возможности платформы:</h4>
          <div className="space-y-3 relative z-10">
            {[
              { title: "White-Label брендирование", desc: "Полная кастомизация интерфейса. Мы интегрируем ваш логотип, фирменные цвета и подключаем платформу на ваш персональный домен." },
              { title: "Профессиональный трейдинг", desc: "Интеграция графиков TradingView. Торговля широким пулом активов: Crypto, Forex и Stocks." },
              { title: "Система депозитов", desc: "Прием депозитов через прямые реквизиты в топовых сетях: BTC, ETH и USDT (TRC20)." },
              { title: "Модуль верификации (KYC)", desc: "Загрузка документов для верификации прямо в личном кабинете." },
              { title: "Синхронизация с CRM", desc: "Любое действие клиента мгновенно отображается на дашборде закрепленного менеджера." },
              { title: "Кроссплатформенность", desc: "Адаптивный дизайн для десктопа и мобильных устройств." }
            ].map((feat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-1">{feat.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We launch a trading terminal for your business that is synchronized with the CRM system. You get a ready-made, modern product for the end consumer, fully customized to your brand.
          </p>
          <h4 className="font-bold text-white mb-4">Platform Features:</h4>
          <div className="space-y-3 relative z-10">
            {[
              { title: "White-Label Branding", desc: "Full interface customization. We integrate your logo, corporate colors, and connect the platform to your personal domain." },
              { title: "Professional Trading", desc: "TradingView charts integration. Trading a wide pool of assets: Crypto, Forex, and Stocks." },
              { title: "Deposit System", desc: "Accepting deposits via direct details in top networks: BTC, ETH, and USDT (TRC20)." },
              { title: "Verification Module (KYC)", desc: "Uploading documents for verification directly in the personal account." },
              { title: "CRM Synchronization", desc: "Any client action is instantly displayed on the assigned manager's dashboard." },
              { title: "Cross-platform", desc: "Adaptive design for desktop and mobile devices." }
            ].map((feat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-1">{feat.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 7,
      title: isRu ? "Сопровождение" : "Support",
      shortDesc: isRu ? "Выделенный Help Desk специалист для вашего проекта" : "Dedicated Help Desk specialist for your project",
      icon: Headphones,
      iconColor: "text-blue-600",
      content: isRu ? (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Мы не оставляем вас один на один со сложной инфраструктурой после запуска. За вашим проектом закрепляется персональный технический специалист, который обеспечивает бесперебойную работу системы и поддерживает вашу команду на всех этапах.
          </p>
          <h4 className="font-bold text-white mb-4">Как устроена наша поддержка:</h4>
          <div className="space-y-4 relative z-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" /> Единый канал коммуникации
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">Мы создаем выделенный рабочий чат, куда подключается весь ваш отдел продаж и наш саппорт-инженер. Прямая связь без бюрократии, сложных тикет-систем и долгого ожидания.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" /> Помощь по функционалу
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">Консультации менеджеров по работе с CRM и торговой платформой. Мы помогаем вашей команде быстрее адаптироваться к системе и использовать ее возможности на 100%.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" /> Фокус на продажах
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">Мы полностью забираем на себя обслуживание IT-инфраструктуры. Вашим сотрудникам не нужно отвлекаться на технические нюансы — они сфокусированы исключительно на обработке трафика и закрытии сделок.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We don't leave you alone with complex infrastructure after the launch. A personal technical specialist is assigned to your project, ensuring smooth system operation and supporting your team at all stages.
          </p>
          <h4 className="font-bold text-white mb-4">How our support works:</h4>
          <div className="space-y-4 relative z-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" /> Single Communication Channel
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">We create a dedicated work chat where your entire sales department and our support engineer connect. Direct communication without bureaucracy, complex ticket systems, and long waits.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" /> Functional Assistance
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">Consultations for managers on working with the CRM and trading platform. We help your team adapt to the system faster and use its capabilities to 100%.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" /> Focus on Sales
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">We fully take over the maintenance of the IT infrastructure. Your employees do not need to be distracted by technical nuances — they are focused exclusively on processing traffic and closing deals.</p>
            </div>
          </div>
        </>
      )
    }
  ];
};

export const getModules = (lang: 'ru' | 'en') => {
  const isRu = lang === 'ru';
  return [
    {
      id: 1,
      icon: Box,
      iconColor: "text-blue-500",
      bg: "bg-blue-500/10",
      title: isRu ? "📦 Модуль 1: VPS" : "📦 Module 1: VPS",
      desc: isRu ? "Изолированная инфраструктура для вашего отдела продаж без эффекта «шумного соседа»." : "Isolated infrastructure for your sales department without the 'noisy neighbor' effect.",
      bullets: isRu ? [
        "Один менеджер - Одна машина",
        "Максимальная производительность",
        "Полная автономность ресурсов"
      ] : [
        "One Manager - One Machine",
        "Maximum performance",
        "Full resource autonomy"
      ]
    },
    {
      id: 2,
      icon: Phone,
      iconColor: "text-emerald-500",
      bg: "bg-emerald-500/10",
      title: isRu ? "📞 Модуль 2: SIP-телефония" : "📞 Module 2: SIP Telephony",
      desc: isRu ? "Профессиональная VoIP-связь с высоким процентом дозвона для интеграции в ваши процессы." : "Professional VoIP communication with a high connection rate for integration into your processes.",
      bullets: isRu ? [
        "Глобальный охват (EU & ASIA)",
        "Локальные Caller ID (DID)",
        "Запись и аналитика звонков"
      ] : [
        "Global coverage (EU & ASIA)",
        "Local Caller ID (DID)",
        "Call recording and analytics"
      ]
    },
    {
      id: 3,
      icon: Monitor,
      iconColor: "text-purple-500",
      bg: "bg-purple-500/10",
      title: isRu ? "💻 Модуль 3: Рабочее окружение" : "💻 Module 3: Workspace",
      desc: isRu ? "Аутсорс технической подготовки рабочих мест. Мы передаем вам готовые к работе машины." : "Outsourcing the technical preparation of workspaces. We hand over ready-to-work machines.",
      bullets: isRu ? [
        "Аккаунты «под ключ» (WA, TG, GV)",
        "Предустановка Softphone, AnyDesk",
        "Мгновенный старт работы"
      ] : [
        "Turnkey accounts (WA, TG, GV)",
        "Pre-installation of Softphone, AnyDesk",
        "Instant start of work"
      ]
    },
    {
      id: 4,
      icon: Lock,
      iconColor: "text-red-500",
      bg: "bg-red-500/10",
      title: isRu ? "🔒 Модуль 4: VPN-сервер" : "🔒 Module 4: VPN Server",
      desc: isRu ? "Персональный закрытый периметр для защиты данных и безопасной удаленной работы." : "Personal closed perimeter for data protection and secure remote work.",
      bullets: isRu ? [
        "Выделенный IP и личный туннель",
        "Сквозное шифрование трафика",
        "Защита от перехвата данных"
      ] : [
        "Dedicated IP and personal tunnel",
        "End-to-end traffic encryption",
        "Protection against data interception"
      ]
    },
    {
      id: 5,
      icon: BarChart3,
      iconColor: "text-orange-500",
      bg: "bg-orange-500/10",
      title: isRu ? "📊 Модуль 5: Лицензия CRM Pro" : "📊 Module 5: CRM Pro License",
      desc: isRu ? "Профессиональная система управления лидами под большие объемы трафика." : "Professional lead management system for large volumes of traffic.",
      bullets: isRu ? [
        "Click-to-Call встроенные звонки",
        "Умная воронка и 19 статусов",
        "Строгая ролевая модель доступа"
      ] : [
        "Click-to-Call built-in calls",
        "Smart funnel and 19 statuses",
        "Strict role-based access model"
      ]
    },
    {
      id: 6,
      icon: Globe,
      iconColor: "text-cyan-500",
      bg: "bg-cyan-500/10",
      title: isRu ? "🌐 Модуль 6: Торговая Платформа" : "🌐 Module 6: Trading Platform",
      desc: isRu ? "Готовый торговый терминал White-Label, настроенный под ваш бренд и домен." : "Ready-made White-Label trading terminal customized to your brand and domain.",
      bullets: isRu ? [
        "Графики TradingView (Crypto, Forex)",
        "Прием депозитов (BTC, ETH, USDT)",
        "Встроенный модуль верификации KYC"
      ] : [
        "TradingView charts (Crypto, Forex)",
        "Deposit acceptance (BTC, ETH, USDT)",
        "Built-in KYC verification module"
      ]
    }
  ];
};

export const getModule7 = (lang: 'ru' | 'en') => {
  const isRu = lang === 'ru';
  return {
    title: isRu ? "🛠 Модуль 7: IT-Аутсорсинг (Help Desk)" : "🛠 Module 7: IT Outsourcing (Help Desk)",
    desc: isRu ? "Техническое сопровождение вашего проекта нашей командой инженеров." : "Technical support for your project by our team of engineers.",
    tags: isRu ? [
      "Прямая связь в чате",
      "Без тикет-систем",
      "Администрирование инфраструктуры"
    ] : [
      "Direct chat communication",
      "No ticket systems",
      "Infrastructure administration"
    ]
  };
};
