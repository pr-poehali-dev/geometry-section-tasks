import Icon from "@/components/ui/icon";
import { Page, TOPICS, THEORY_DATA, TASKS_DATA, DRAWINGS_DATA } from "@/data";

interface HomePageProps {
  goTo: (p: Page) => void;
  setSelectedTopic: (t: string) => void;
  setPage: (p: Page) => void;
}

export default function HomePage({ goTo, setSelectedTopic, setPage }: HomePageProps) {
  return (
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
        <h2 className="font-cormorant font-semibold text-3xl text-foreground mb-6">Разделы сечений</h2>
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
  );
}
