import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, Flame, CheckCircle2, Circle, AlertTriangle, PartyPopper, Trophy, Target } from "lucide-react";
import { NOTIONS, type NotionId } from "../content";
import { useStore } from "../lib/store";
import { buildPlan, BAC_DATE } from "../lib/plan";
import ProgressRing from "../components/ProgressRing";

const byId = (id: NotionId) => NOTIONS.find((n) => n.id === id)!;
const fmtDay = (d: Date) => d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
const fmtShort = (d: Date) => d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });

export default function Plan() {
  const { profile, notionMastery } = useStore();

  const plan = useMemo(
    () =>
      buildPlan({
        createdAt: profile?.createdAt ?? null,
        isMastered: (id) => notionMastery(id) >= 70,
      }),
    [profile?.createdAt, notionMastery]
  );

  const progressPct = Math.round((plan.masteredCount / plan.totalNotions) * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <p className="chip mb-3">
          <CalendarCheck size={13} className="text-brand" /> Plan de révision
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Prêt·e pour le bac</h1>
        <p className="text-muted mt-2">
          Épreuve de philosophie le <strong className="text-ink">{fmtDay(BAC_DATE)}</strong>.
        </p>
      </header>

      {/* Compte à rebours + progression */}
      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-center card p-6 mb-6">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-semibold text-brand tabular-nums">
              {plan.examPassed ? "🎓" : `J-${plan.daysUntilBac}`}
            </span>
            {!plan.examPassed && <span className="text-muted">avant l'épreuve</span>}
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-muted">Notions maîtrisées</span>
              <span className="font-semibold tabular-nums">
                {plan.masteredCount}/{plan.totalNotions}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-surface-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
        <ProgressRing value={progressPct} size={96} stroke={9}>
          <span className="text-lg font-bold">{progressPct}%</span>
        </ProgressRing>
      </div>

      {/* Bannière de statut */}
      <StatusBanner plan={plan} />

      {/* Objectif du jour */}
      {!plan.examPassed && !plan.finished && (
        <section className="card p-6 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Flame size={20} className="text-accent" />
            <h2 className="font-display text-xl">Objectif d'aujourd'hui</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            {plan.todayNotions.length > 0
              ? `Révise ${plan.todayNotions.length} notion${plan.todayNotions.length > 1 ? "s" : ""} aujourd'hui pour rester dans les temps (~${plan.perDay}/jour).`
              : "Tout est à jour pour aujourd'hui. En avance ? Attaque les notions des jours suivants !"}
          </p>
          {plan.todayNotions.length > 0 ? (
            <ul className="grid sm:grid-cols-2 gap-2">
              {plan.todayNotions.map((id) => (
                <NotionRow key={id} id={id} mastered={false} />
              ))}
            </ul>
          ) : (
            <div className="rounded-xl bg-surface-2 p-4 text-center text-muted text-sm">
              ✅ Objectif du jour atteint. Bravo !
            </div>
          )}
        </section>
      )}

      {/* Planning complet */}
      <section className="mb-2">
        <h2 className="font-display text-xl mb-3 flex items-center gap-2">
          <Target size={18} className="text-brand" /> Ton planning jusqu'au bac
        </h2>
        <ol className="space-y-2">
          {plan.schedule.map((day) => {
            const allDone = day.notions.every((id) => notionMastery(id) >= 70);
            return (
              <li
                key={day.index}
                className={`card p-4 ${day.isToday ? "ring-2 ring-brand/40" : ""} ${day.isPast && !day.isToday ? "opacity-70" : ""}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="grid place-items-center w-8 h-8 rounded-lg text-xs font-bold shrink-0"
                    style={
                      day.isToday
                        ? { background: "var(--color-brand)", color: "white" }
                        : { background: "var(--color-surface-2)", color: "var(--color-muted)" }
                    }
                  >
                    J{day.index + 1}
                  </span>
                  <span className="font-medium capitalize flex-1">
                    {day.isToday ? "Aujourd'hui" : fmtShort(day.date)}
                  </span>
                  {allDone && day.notions.length > 0 && (
                    <span className="chip text-[0.65rem]" style={{ color: "var(--color-success)" }}>
                      <CheckCircle2 size={11} /> fait
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {day.notions.map((id) => {
                    const n = byId(id);
                    const done = notionMastery(id) >= 70;
                    return (
                      <Link
                        key={id}
                        to={`/notion/${id}`}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-colors"
                        style={{
                          background: done ? n.couleur + "22" : "var(--color-surface-2)",
                          color: done ? n.couleur : "var(--color-ink)",
                          textDecoration: done ? "none" : "none",
                        }}
                      >
                        {done ? <CheckCircle2 size={12} /> : <Circle size={12} className="opacity-50" />}
                        {n.titre}
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
        <p className="text-xs text-faint mt-3 text-center">
          Les {2} derniers jours avant l'épreuve sont laissés libres pour relire tes fiches et t'entraîner aux sujets.
        </p>
      </section>

      {!profile && (
        <div className="card p-5 mt-6 text-center">
          <p className="text-muted mb-3">
            Crée un compte pour que ton plan démarre à ta date d'inscription et se synchronise sur tous tes appareils.
          </p>
          <Link to="/profil" className="btn btn-primary mx-auto">
            Créer mon compte
          </Link>
        </div>
      )}
    </div>
  );
}

function StatusBanner({ plan }: { plan: ReturnType<typeof buildPlan> }) {
  let icon = <Flame size={18} />;
  let color = "var(--color-brand)";
  let text = "";

  if (plan.examPassed) {
    icon = <Trophy size={18} />;
    color = "var(--color-accent)";
    text = "L'épreuve est passée — j'espère que ça s'est bien déroulé ! 🎉";
  } else if (plan.finished) {
    icon = <PartyPopper size={18} />;
    color = "var(--color-success)";
    text = "Toutes les notions sont maîtrisées 🎉 Continue de réviser tes fiches et entraîne-toi sur les sujets.";
  } else if (plan.overdue.length > 0) {
    icon = <AlertTriangle size={18} />;
    color = "var(--color-danger)";
    text = `Tu as ${plan.overdue.length} notion${plan.overdue.length > 1 ? "s" : ""} de retard. Pas de panique : rattrape-les en priorité aujourd'hui.`;
  } else {
    text = "Tu es dans les temps 👍 Tiens le rythme et tu seras prêt·e pour le 9 !";
  }

  return (
    <div
      className="card p-4 mb-6 flex items-start gap-2.5 text-sm"
      style={{ borderColor: color, background: `color-mix(in oklab, ${color} 8%, var(--surface))` }}
    >
      <span className="shrink-0 mt-0.5" style={{ color }}>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

function NotionRow({ id, mastered }: { id: NotionId; mastered: boolean }) {
  const n = byId(id);
  return (
    <li>
      <Link
        to={`/notion/${id}`}
        className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5 hover:border-brand/40 transition-colors"
      >
        <span
          className="grid place-items-center w-8 h-8 rounded-lg font-display shrink-0"
          style={{ background: n.couleur + "1f", color: n.couleur }}
        >
          {n.titre.replace(/^L['’]|^La |^Le /, "").charAt(0)}
        </span>
        <span className="flex-1 font-medium truncate">{n.titre}</span>
        {mastered ? (
          <CheckCircle2 size={18} className="text-success shrink-0" />
        ) : (
          <span className="chip text-[0.65rem] shrink-0" style={{ color: n.couleur }}>
            à réviser
          </span>
        )}
      </Link>
    </li>
  );
}
