import Icon from "@/components/ui/icon";
import { TOPICS, LEVELS, TASKS_DATA, levelColors } from "@/data";

interface TasksPageProps {
  search: string;
  setSearch: (s: string) => void;
  selectedTopic: string;
  setSelectedTopic: (t: string) => void;
  selectedLevel: string;
  setSelectedLevel: (l: string) => void;
}

export default function TasksPage({
  search,
  setSearch,
  selectedTopic,
  setSelectedTopic,
  selectedLevel,
  setSelectedLevel,
}: TasksPageProps) {
  const filteredTasks = TASKS_DATA.filter((t) => {
    const matchTopic = selectedTopic === "all" || t.topic === selectedTopic;
    const matchLevel = selectedLevel === "all" || t.level === selectedLevel;
    const matchSearch =
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchLevel && matchSearch;
  });

  return (
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
  );
}
