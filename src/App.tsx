import { useState } from "react";
import { type Page, THEORY_DATA, TASKS_DATA, DRAWINGS_DATA } from "@/data";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import TheoryPage from "@/components/TheoryPage";
import TasksPage from "@/components/TasksPage";
import DrawingsPage from "@/components/DrawingsPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goTo = (p: Page) => {
    setPage(p);
    setSearch("");
    setSelectedTopic("all");
    setSelectedLevel("all");
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-golos">
      <Header
        page={page}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        goTo={goTo}
      />

      {page === "home" && (
        <HomePage goTo={goTo} setSelectedTopic={setSelectedTopic} setPage={setPage} />
      )}

      {page === "theory" && (
        <TheoryPage
          search={search}
          setSearch={setSearch}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
      )}

      {page === "tasks" && (
        <TasksPage
          search={search}
          setSearch={setSearch}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />
      )}

      {page === "drawings" && (
        <DrawingsPage
          search={search}
          setSearch={setSearch}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
      )}

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
