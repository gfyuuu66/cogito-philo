import { isPresetAvatar } from "../lib/avatar";

/**
 * Affiche l'avatar d'un utilisateur : image uploadée (data URL / URL), emoji
 * prédéfini, ou à défaut l'initiale du pseudo.
 */
export default function Avatar({
  value,
  name,
  size = 40,
  color,
  className = "",
  rounded = "rounded-2xl",
}: {
  value?: string | null;
  name: string;
  size?: number;
  color?: string;
  className?: string;
  rounded?: string;
}) {
  const dim: React.CSSProperties = { width: size, height: size };

  if (value && (value.startsWith("data:") || value.startsWith("http"))) {
    return (
      <img
        src={value}
        alt={name}
        loading="lazy"
        className={`${rounded} object-cover shrink-0 ${className}`}
        style={dim}
      />
    );
  }

  if (isPresetAvatar(value)) {
    return (
      <span
        className={`grid place-items-center ${rounded} bg-surface-2 shrink-0 ${className}`}
        style={{ ...dim, fontSize: size * 0.55, lineHeight: 1 }}
      >
        {value}
      </span>
    );
  }

  const initial = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      className={`grid place-items-center font-display shrink-0 ${rounded} ${className}`}
      style={{
        ...dim,
        fontSize: size * 0.42,
        background: (color ?? "var(--color-accent)") + "22",
        color: color ?? "var(--color-accent)",
      }}
    >
      {initial}
    </span>
  );
}
