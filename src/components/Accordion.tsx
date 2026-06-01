import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle?: ReactNode;
  color?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function Accordion({ title, subtitle, color = "var(--color-brand)", defaultOpen = false, children }: Props) {
  return (
    <details className="card group overflow-hidden" open={defaultOpen}>
      <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none select-none hover:bg-surface-2 transition-colors">
        <span className="w-1.5 self-stretch rounded-full -my-4 mr-1" style={{ background: color }} aria-hidden />
        <div className="flex-1 min-w-0">
          <div className="font-display text-lg leading-tight">{title}</div>
          {subtitle && <div className="text-sm text-muted mt-0.5">{subtitle}</div>}
        </div>
        <ChevronDown size={18} className="text-muted shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 pt-1 border-t border-line">{children}</div>
    </details>
  );
}
