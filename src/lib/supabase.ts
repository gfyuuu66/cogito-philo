import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase OPTIONNEL.
 * - Sans clés (.env absent) : `supabase` vaut `null` → l'app tourne en mode local
 *   (progression + classement stockés dans le navigateur).
 * - Avec clés : login (Google / e-mail) + classement partagé entre tous.
 *
 * Voir SUPABASE.md pour activer le cloud (création du projet + schéma SQL).
 */

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** E-mail administrateur (badge + droits d'admin + tableau de bord). */
export const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL ?? "samzyboss51@gmail.com").toLowerCase();

export const supabase: SupabaseClient | null =
  url && anon
    ? createClient(url, anon, {
        auth: {
          // Conserve la session entre les visites et gère le retour d'OAuth (Google).
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          flowType: "pkce",
        },
      })
    : null;

export const cloudEnabled = supabase !== null;

/** Progression d'une notion telle que stockée dans le cloud (miroir de NotionProgress). */
export interface CloudNotionProgress {
  coursLu: boolean;
  flashcardsDone: boolean;
  quizBest: { correct: number; total: number } | null;
}

/** Une ligne de la table `scores` (cloud). */
export interface LeaderboardRow {
  user_id: string;
  pseudo: string;
  email: string | null;
  points: number;
  mastery: number;
  /** Avatar : emoji, URL, ou petite image (data URL). */
  avatar: string | null;
  /** Détail de la progression par notion (pour le tableau de bord admin). */
  progress: Record<string, CloudNotionProgress> | null;
  updated_at: string;
}

/**
 * Capture une erreur OAuth renvoyée dans l'URL de retour (ex. « provider is not
 * enabled » quand Google n'est pas activé) AVANT le rendu React — donc une seule
 * fois, sans souci de double-exécution en mode strict. On nettoie l'URL, on garde
 * le message pour la page Profil, et on y redirige si on a atterri ailleurs.
 */
function captureOAuthError() {
  if (typeof window === "undefined" || !cloudEnabled) return;
  const qs = new URLSearchParams(window.location.search);
  const hs = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const raw =
    qs.get("error_description") || hs.get("error_description") || qs.get("error") || hs.get("error");
  if (!raw) return;
  window.history.replaceState({}, "", window.location.pathname);
  try {
    sessionStorage.setItem("cogito.auth.error", decodeURIComponent(raw.replace(/\+/g, " ")));
  } catch {
    /* sessionStorage indisponible */
  }
  if (!window.location.pathname.startsWith("/profil")) {
    window.location.replace(window.location.origin + "/profil");
  }
}

captureOAuthError();
