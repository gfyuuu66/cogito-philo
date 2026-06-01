interface Props {
  value: number; // 0-100
  size?: number;
  stroke?: number;
  color?: string;
  trackOpacity?: number;
  children?: React.ReactNode;
}

export default function ProgressRing({
  value,
  size = 56,
  stroke = 6,
  color = "var(--color-brand)",
  trackOpacity = 0.15,
  children,
}: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = c - (clamped / 100) * c;
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} opacity={trackOpacity} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.2,0.7,0.2,1)" }}
        />
      </svg>
      <span className="absolute text-xs font-bold tabular-nums">{children ?? `${clamped}%`}</span>
    </div>
  );
}
