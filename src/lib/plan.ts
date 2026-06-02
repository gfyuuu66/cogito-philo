import { NOTIONS, type NotionId } from "../content";

/**
 * Plan de révision : répartit les 17 notions sur les jours qui restent avant le
 * bac, en partant de la date de création du compte, et en s'adaptant à la
 * progression (les notions maîtrisées sortent du planning, les oubliées
 * remontent en « à rattraper »).
 */

const DAY = 86_400_000;

/** Date du bac (configurable via VITE_BAC_DATE, ex. 2026-06-09). */
export const BAC_DATE = new Date(import.meta.env.VITE_BAC_DATE ?? "2026-06-09T08:00:00");
/** On vise à avoir TOUT appris quelques jours avant, pour garder du temps de relecture. */
const REVIEW_BUFFER_DAYS = 2;

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function daysBetween(a: Date, b: Date): number {
  return Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / DAY);
}

export interface DayPlan {
  date: Date;
  index: number;
  isToday: boolean;
  isPast: boolean;
  notions: NotionId[];
}

export interface RevisionPlan {
  bacDate: Date;
  learnByDate: Date;
  daysUntilBac: number;
  totalNotions: number;
  masteredCount: number;
  remainingCount: number;
  perDay: number;
  todayNotions: NotionId[];
  doneTodayCount: number;
  overdue: NotionId[];
  schedule: DayPlan[];
  onTrack: boolean;
  finished: boolean;
  examPassed: boolean;
}

export function buildPlan(opts: {
  createdAt?: string | null;
  isMastered: (id: NotionId) => boolean;
  now?: Date;
}): RevisionPlan {
  const { isMastered } = opts;
  const now = opts.now ?? new Date();
  const today = startOfDay(now);
  const bac = startOfDay(BAC_DATE);
  const learnBy = startOfDay(new Date(BAC_DATE.getTime() - REVIEW_BUFFER_DAYS * DAY));

  // Début du plan = création du compte (jamais après aujourd'hui).
  let start = opts.createdAt ? startOfDay(new Date(opts.createdAt)) : today;
  if (Number.isNaN(start.getTime()) || start.getTime() > today.getTime()) start = today;

  const all: NotionId[] = NOTIONS.map((n) => n.id);
  const masteredCount = all.filter((id) => isMastered(id)).length;
  const remainingCount = all.length - masteredCount;

  const daysUntilBac = Math.max(0, daysBetween(today, bac));
  const examPassed = today.getTime() > bac.getTime();

  // Nombre total de jours du planning (de la création à la deadline d'apprentissage).
  const lastDay = learnBy.getTime() >= start.getTime() ? learnBy : start;
  const totalDays = Math.max(1, daysBetween(start, lastDay) + 1);
  const perDay = Math.max(1, Math.ceil(all.length / totalDays));

  // Planning fixe : on répartit les 17 notions (ordre du programme) sur les jours.
  const schedule: DayPlan[] = [];
  for (let d = 0; d < totalDays; d++) {
    const date = new Date(start.getTime() + d * DAY);
    schedule.push({
      date,
      index: d,
      isToday: daysBetween(date, today) === 0,
      isPast: startOfDay(date).getTime() < today.getTime(),
      notions: all.slice(d * perDay, (d + 1) * perDay),
    });
  }

  // Index du jour courant (borné au planning).
  const todayIndex = Math.min(Math.max(0, daysBetween(start, today)), totalDays - 1);

  // À rattraper : notions des jours passés encore non maîtrisées.
  const overdueAll = schedule.slice(0, todayIndex).flatMap((s) => s.notions).filter((id) => !isMastered(id));

  // Objectif du jour = notions prévues aujourd'hui + rattrapage, hors déjà maîtrisées.
  const todayPlanned = schedule[todayIndex]?.notions ?? [];
  const todaySet = new Set<NotionId>([...overdueAll, ...todayPlanned]);
  let todayNotions = [...todaySet].filter((id) => !isMastered(id));

  // Si on a fini le planning mais qu'il reste des notions non maîtrisées, on les met toutes.
  if (todayIndex >= totalDays - 1) {
    todayNotions = all.filter((id) => !isMastered(id));
  }

  const plannedTodayTotal = new Set<NotionId>([...overdueAll, ...todayPlanned]).size;
  const doneTodayCount = [...new Set<NotionId>([...overdueAll, ...todayPlanned])].filter((id) => isMastered(id)).length;

  return {
    bacDate: bac,
    learnByDate: learnBy,
    daysUntilBac,
    totalNotions: all.length,
    masteredCount,
    remainingCount,
    perDay,
    todayNotions,
    doneTodayCount: Math.min(doneTodayCount, plannedTodayTotal),
    overdue: overdueAll,
    schedule,
    onTrack: overdueAll.length === 0,
    finished: remainingCount === 0,
    examPassed,
  };
}
