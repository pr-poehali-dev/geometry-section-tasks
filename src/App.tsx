import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "theory" | "tasks" | "drawings";

const TOPICS = ["Куб", "Призма", "Пирамида", "Цилиндр и конус", "Составные тела"];
const LEVELS = ["Базовый", "Средний", "Сложный"];

const THEORY_DATA = [
  {
    id: 1,
    title: "Понятие сечения",
    topic: "Куб",
    desc: "Сечение многогранника — плоская фигура, получаемая при пересечении тела плоскостью. Основные правила построения.",
    readTime: "6 мин",
    icon: "Layers",
  },
  {
    id: 2,
    title: "Метод следов",
    topic: "Призма",
    desc: "Построение сечений с помощью линий пересечения секущей плоскости с плоскостями граней многогранника.",
    readTime: "9 мин",
    icon: "Pencil",
  },
  {
    id: 3,
    title: "Сечения пирамиды",
    topic: "Пирамида",
    desc: "Виды сечений пирамиды плоскостью: треугольные, трапециевидные и параллельные основанию.",
    readTime: "8 мин",
    icon: "Triangle",
  },
  {
    id: 4,
    title: "Осевые сечения тел вращения",
    topic: "Цилиндр и конус",
    desc: "Сечения цилиндра и конуса плоскостью, проходящей через ось: прямоугольник, треугольник, эллипс.",
    readTime: "7 мин",
    icon: "Circle",
  },
  {
    id: 5,
    title: "Площадь сечения",
    topic: "Составные тела",
    desc: "Методы вычисления площади поперечного и наклонного сечения: формулы и геометрические приёмы.",
    readTime: "10 мин",
    icon: "Ruler",
  },
  {
    id: 6,
    title: "Параллельные сечения",
    topic: "Куб",
    desc: "Свойства сечений параллельных друг другу: подобие, сохранение площади при равноотстоящих плоскостях.",
    readTime: "5 мин",
    icon: "AlignJustify",
  },
];

const TASKS_DATA = [
  {
    id: 1,
    title: "Сечение куба через три вершины",
    topic: "Куб",
    level: "Базовый",
    desc: "Построить сечение куба ABCDA₁B₁C₁D₁, проходящее через вершины A, B₁ и C. Определить форму и площадь сечения.",
  },
  {
    id: 2,
    title: "Диагональное сечение куба",
    topic: "Куб",
    level: "Базовый",
    desc: "Найти площадь диагонального сечения куба с ребром a. Доказать, что сечение является прямоугольником.",
  },
  {
    id: 3,
    title: "Сечение правильной треугольной пирамиды",
    topic: "Пирамида",
    level: "Средний",
    desc: "Построить сечение правильной треугольной пирамиды, параллельное основанию и проходящее через середины боковых рёбер.",
  },
  {
    id: 4,
    title: "Сечение четырёхугольной пирамиды",
    topic: "Пирамида",
    level: "Средний",
    desc: "Дана правильная четырёхугольная пирамида. Построить сечение, проходящее через боковое ребро параллельно противоположному.",
  },
  {
    id: 5,
    title: "Сечение прямой призмы",
    topic: "Призма",
    level: "Базовый",
    desc: "Построить сечение прямой треугольной призмы плоскостью, проходящей через ребро основания и середину противоположного бокового ребра.",
  },
  {
    id: 6,
    title: "Наклонное сечение призмы",
    topic: "Призма",
    level: "Сложный",
    desc: "Наклонная плоскость пересекает все боковые грани треугольной призмы. Доказать, что сечение является треугольником, найти его площадь.",
  },
  {
    id: 7,
    title: "Осевое сечение конуса",
    topic: "Цилиндр и конус",
    level: "Базовый",
    desc: "Найти площадь осевого сечения конуса с радиусом основания r = 5 см и высотой h = 12 см.",
  },
  {
    id: 8,
    title: "Сечение цилиндра наклонной плоскостью",
    topic: "Цилиндр и конус",
    level: "Сложный",
    desc: "Цилиндр пересечён плоскостью, проходящей через диаметр одного основания и касательной к другому. Найти площадь сечения-эллипса.",
  },
  {
    id: 9,
    title: "Сечение составного тела",
    topic: "Составные тела",
    level: "Сложный",
    desc: "На кубе стоит правильная четырёхугольная пирамида. Построить сечение, проходящее через середины двух смежных рёбер куба и вершину пирамиды.",
  },
  {
    id: 10,
    title: "Шестиугольное сечение куба",
    topic: "Куб",
    level: "Сложный",
    desc: "Построить правильное шестиугольное сечение куба. Доказать правильность шестиугольника и найти его площадь через длину ребра куба.",
  },
];

const DRAWINGS_DATA = [
  {
    id: 1,
    title: "Диагональное сечение куба",
    topic: "Куб",
    desc: "Построение диагонального сечения куба через две пары противоположных вершин.",
    type: "Аксонометрия",
  },
  {
    id: 2,
    title: "Сечение пирамиды параллельно основанию",
    topic: "Пирамида",
    desc: "Построение сечения правильной пирамиды плоскостью, параллельной основанию.",
    type: "Чертёж",
  },
  {
    id: 3,
    title: "Осевое сечение цилиндра",
    topic: "Цилиндр и конус",
    desc: "Сечение цилиндра плоскостью, проходящей через его ось — прямоугольник.",
    type: "Схема сечения",
  },
  {
    id: 4,
    title: "Шестиугольное сечение куба",
    topic: "Куб",
    desc: "Правильное шестиугольное сечение куба — построение и доказательство правильности.",
    type: "Аксонометрия",
  },
];

const levelColors: Record<string, string> = {
  "Базовый": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Средний": "bg-amber-50 text-amber-700 border-amber-200",
  "Сложный": "bg-red-50 text-red-700 border-red-200",
};

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Page; label: string; icon: string }[] = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "theory", label: "Теория", icon: "BookOpen" },
    { id: "tasks", label: "Задачи", icon: "PenLine" },
    { id: "drawings", label: "Чертежи", icon: "Compass" },
  ];

  const filteredTasks = TASKS_DATA.filter((t) => {
    const matchTopic = selectedTopic === "all" || t.topic === selectedTopic;
    const matchLevel = selectedLevel === "all" || t.level === selectedLevel;
    const matchSearch =
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchLevel && matchSearch;
  });

  const filteredTheory = THEORY_DATA.filter((t) => {
    const matchTopic = selectedTopic === "all" || t.topic === selectedTopic;
    const matchSearch =
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchSearch;
  });

  const filteredDrawings = DRAWINGS_DATA.filter((d) => {
    const matchTopic = selectedTopic === "all" || d.topic === selectedTopic;
    const matchSearch =
      search === "" ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchSearch;
  });

  const goTo = (p: Page) => {
    setPage(p);
    setSearch("");
    setSelectedTopic("all");
    setSelectedLevel("all");
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-golos">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => goTo("home")} className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-cormorant font-bold text-base leading-none">G</span>
            </div>
            <span className="font-cormorant font-semibold text-xl text-foreground tracking-tight">GeoLabe</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  page === item.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  page === item.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HOME */}
      {page === "home" && (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
          <section className="mb-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Учебный портал</p>
              <h1 className="font-cormorant font-bold text-5xl sm:text-7xl leading-[1.05] text-foreground mb-6">
                Геометрия сечений —
                <br />
                <em className="not-italic text-muted-foreground">от простого к сложному</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                Структурированные материалы для глубокого понимания предмета. Теория, задачи и чертежи в одном месте.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => goTo("theory")}
                  className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="BookOpen" size={16} />
                  Начать с теории
                </button>
                <button
                  onClick={() => goTo("tasks")}
                  className="flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  <Icon name="PenLine" size={16} />
                  К задачам
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {[
              { num: THEORY_DATA.length, label: "Тем в теории" },
              { num: TASKS_DATA.length, label: "Задач" },
              { num: DRAWINGS_DATA.length, label: "Чертежей" },
              { num: TOPICS.length, label: "Разделов" },
            ].map((s, i) => (
              <div key={i} className="border border-border rounded-lg p-5 bg-card">
                <div className="font-cormorant font-bold text-4xl text-foreground mb-1">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </section>

          <section className="mb-20">
            <h2 className="font-cormorant font-semibold text-3xl text-foreground mb-8">Разделы</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { page: "theory" as Page, icon: "BookOpen", title: "Теория", desc: "Чёткие объяснения концепций с примерами и формулами.", count: `${THEORY_DATA.length} тем` },
                { page: "tasks" as Page, icon: "PenLine", title: "Задачи", desc: "От базовых до олимпиадных. Поиск по теме и сложности.", count: `${TASKS_DATA.length} задач` },
                { page: "drawings" as Page, icon: "Compass", title: "Чертежи", desc: "Схемы, диаграммы и чертежи к задачам и теоретическим разделам.", count: `${DRAWINGS_DATA.length} чертежа` },
              ].map((s) => (
                <button
                  key={s.page}
                  onClick={() => goTo(s.page)}
                  className="group text-left border border-border rounded-lg p-6 bg-card hover:border-foreground hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center mb-4 group-hover:bg-foreground transition-colors duration-200">
                    <Icon name={s.icon} size={18} className="text-foreground group-hover:text-background transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1">{s.count}</span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-cormorant font-semibold text-3xl text-foreground mb-6">Разделы физики</h2>
            <div className="flex flex-wrap gap-3">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => { setSelectedTopic(t); setPage("tasks"); }}
                  className="px-5 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* THEORY */}
      {page === "theory" && (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Раздел</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl text-foreground mb-6">Теория</h1>
            <div className="flex flex-col gap-3">
              <div className="relative max-w-sm">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по теории..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTopic("all")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === "all" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                >
                  Все темы
                </button>
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(selectedTopic === t ? "all" : t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === t ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredTheory.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Icon name="SearchX" size={32} className="mx-auto mb-3 opacity-40" />
              <p>Ничего не найдено</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTheory.map((item) => (
                <div key={item.id} className="group border border-border rounded-lg p-6 bg-card hover:border-foreground hover:shadow-sm transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center group-hover:bg-foreground transition-colors duration-200">
                      <Icon name={item.icon} size={16} className="text-foreground group-hover:text-background transition-colors duration-200" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      {item.readTime}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{item.topic}</span>
                  <h3 className="font-semibold text-foreground mt-1 mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* TASKS */}
      {page === "tasks" && (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Раздел</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl text-foreground mb-6">Задачи</h1>

            <div className="relative max-w-sm mb-4">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск задач..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
              />
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Тема</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTopic("all")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === "all" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                  >
                    Все
                  </button>
                  {TOPICS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTopic(selectedTopic === t ? "all" : t)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === t ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Уровень сложности</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLevel("all")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedLevel === "all" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                  >
                    Все уровни
                  </button>
                  {LEVELS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setSelectedLevel(selectedLevel === l ? "all" : l)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedLevel === l ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-5">
            {filteredTasks.length === TASKS_DATA.length
              ? `Все задачи — ${filteredTasks.length}`
              : `Найдено: ${filteredTasks.length} из ${TASKS_DATA.length}`}
          </p>

          {filteredTasks.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Icon name="SearchX" size={32} className="mx-auto mb-3 opacity-40" />
              <p>Задачи не найдены. Попробуйте изменить фильтры.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div key={task.id} className="group border border-border rounded-lg p-5 bg-card hover:border-foreground hover:shadow-sm transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center flex-shrink-0 font-cormorant font-bold text-sm text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-200">
                      {task.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground text-sm">{task.title}</h3>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${levelColors[task.level]}`}>
                          {task.level}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground block mb-2">{task.topic}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground flex-shrink-0 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* DRAWINGS */}
      {page === "drawings" && (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Раздел</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl text-foreground mb-6">Чертежи</h1>
            <div className="flex flex-col gap-3">
              <div className="relative max-w-sm">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск чертежей..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTopic("all")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === "all" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                >
                  Все
                </button>
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(selectedTopic === t ? "all" : t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedTopic === t ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredDrawings.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Icon name="SearchX" size={32} className="mx-auto mb-3 opacity-40" />
              <p>Ничего не найдено</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {filteredDrawings.map((item) => (
                <div key={item.id} className="group border border-border rounded-lg bg-card hover:border-foreground hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden">
                  <div className="h-44 bg-secondary flex items-center justify-center border-b border-border relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.07]">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`grid-${item.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.8"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${item.id})`}/>
                      </svg>
                    </div>
                    <div className="text-center z-10">
                      <Icon name="Compass" size={28} className="mx-auto mb-2 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">{item.type}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{item.topic}</span>
                    <h3 className="font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Открыть чертёж</span>
                      <Icon name="ArrowRight" size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-cormorant font-bold text-xs">G</span>
            </div>
            <span className="font-cormorant font-semibold text-foreground">GeoLabe</span>
          </div>
          <p>{THEORY_DATA.length} тем · {TASKS_DATA.length} задач · {DRAWINGS_DATA.length} чертежа</p>
        </div>
      </footer>
    </div>
  );
}