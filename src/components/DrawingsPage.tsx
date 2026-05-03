import Icon from "@/components/ui/icon";
import { TOPICS, DRAWINGS_DATA } from "@/data";

interface DrawingsPageProps {
  search: string;
  setSearch: (s: string) => void;
  selectedTopic: string;
  setSelectedTopic: (t: string) => void;
}

export default function DrawingsPage({ search, setSearch, selectedTopic, setSelectedTopic }: DrawingsPageProps) {
  const filteredDrawings = DRAWINGS_DATA.filter((d) => {
    const matchTopic = selectedTopic === "all" || d.topic === selectedTopic;
    const matchSearch =
      search === "" ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchSearch;
  });

  return (
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
  );
}
