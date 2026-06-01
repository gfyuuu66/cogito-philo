import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase OPTIONNEL.
 * - Sans clés (.env absent) : `supabase` vaut `null` → l'app tourne en mode local
 *   (progression + classement stockés dans le navigateur).
 * - Avec clés : login (Slack / Google / e-mail) + classement partagé entre tous.
 *
 * Voir SUPABASE.md pour activer le cloud (création du projet + schéma SQL).
 */

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** E-mail administrateur (badge + droits d'admin sur le classement). */
export const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL ?? "samzyboss51@gmail.com").toLowerCase();

export const supabase: SupabaseClient | null = url && anon ? createClient(url, anon) : null;

export const cloudEnabled = supabase !== null;

export interface LeaderboardRow {
  user_id: string;
  pseudo: string;
  email: string | null;
  points: number;
  mastery: number;
  updated_at: string;
}
