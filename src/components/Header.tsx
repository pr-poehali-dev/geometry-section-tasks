import Icon from "@/components/ui/icon";
import { Page } from "@/data";

interface HeaderProps {
  page: Page;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  goTo: (p: Page) => void;
}

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "theory", label: "Теория", icon: "BookOpen" },
  { id: "tasks", label: "Задачи", icon: "PenLine" },
  { id: "drawings", label: "Чертежи", icon: "Compass" },
];

export default function Header({ page, mobileMenuOpen, setMobileMenuOpen, goTo }: HeaderProps) {
  return (
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
  );
}
