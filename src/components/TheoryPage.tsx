import Icon from "@/components/ui/icon";
import { TOPICS, THEORY_DATA } from "@/data";

interface TheoryPageProps {
  search: string;
  setSearch: (s: string) => void;
  selectedTopic: string;
  setSelectedTopic: (t: string) => void;
}

export default function TheoryPage({ search, setSearch, selectedTopic, setSelectedTopic }: TheoryPageProps) {
  const filteredTheory = THEORY_DATA.filter((t) => {
    const matchTopic = selectedTopic === "all" || t.topic === selectedTopic;
    const matchSearch =
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchSearch;
  });

  return (
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
  );
}
