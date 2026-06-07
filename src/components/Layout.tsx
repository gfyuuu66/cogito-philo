import { NavLink, Link } from "react-router-dom";
import { BookOpen, Compass, Network, Trophy, User, Moon, Sun, Sparkles, LayoutDashboard, CalendarCheck, NotebookText } from "lucide-react";
import { useTheme } from "../lib/theme";
import { useStore } from "../lib/store";
import Avatar from "./Avatar";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Notions", icon: BookOpen, end: true },
  { to: "/resume", label: "Résumé", icon: NotebookText, end: false },
  { to: "/plan", label: "Plan", icon: CalendarCheck, end: false },
  { to: "/methode", label: "Méthode", icon: Compass, end: false },
  { to: "/ponts", label: "Ponts", icon: Network, end: false },
  { to: "/classement", label: "Classement", icon: Trophy, end: false },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  const { profile, points, isAdmin } = useStore();
  const links = isAdmin ? [...nav, { to: "/admin", label: "Admin", icon: LayoutDashboard, end: false }] : nav;

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-40 border-b border-line backdrop-blur-md bg-[color-mix(in_oklab,var(--canvas)_82%,transparent)]">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-white font-display text-xl leading-none shadow-soft group-hover:scale-105 transition-transform">
              φ
            </span>
            <span className="font-display text-xl font-semibold tracking-tight hidden sm:block">Cogito</span>
          </Link>

          <nav className="flex items-center gap-1 ml-auto overflow-x-auto">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive ? "bg-brand-soft text-brand-ink" : "text-muted hover:text-ink hover:bg-surface-2"
                  }`
                }
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggle}
              className="grid place-items-center w-9 h-9 rounded-lg text-muted hover:text-ink hover:bg-surface-2 transition-colors"
              aria-label="Changer de thème"
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <NavLink
              to="/profil"
              className={({ isActive }) =>
                `flex items-center gap-2 pl-2 pr-3 h-9 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-brand-soft text-brand-ink" : "text-muted hover:text-ink hover:bg-surface-2"
                }`
              }
            >
              {profile ? (
                <Avatar value={profile.avatar} name={profile.pseudo} size={24} rounded="rounded-md" />
              ) : (
                <span className="grid place-items-center w-6 h-6 rounded-md bg-accent-soft text-accent">
                  <User size={15} />
                </span>
              )}
              {profile ? (
                <span className="hidden sm:flex items-center gap-1 tabular-nums">
                  <Sparkles size={13} className="text-accent" /> {points}
                </span>
              ) : (
                <span className="hidden sm:inline">Se connecter</span>
              )}
            </NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-line mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex items-center gap-2">
            <span className="grid place-items-center w-6 h-6 rounded-md bg-brand text-white font-display text-sm">φ</span>
            <span className="font-display font-semibold text-ink">Cogito</span> · réviser la philo, viser le 14+
          </p>
          <p>Les 17 notions du programme · Terminale</p>
        </div>
      </footer>
    </div>
  );
}
