import { useEffect, useMemo, useRef, useState } from "react";
import { NOTIONS, NOTIONS_BY_ID } from "../content";
import type { NotionId } from "../content";

/**
 * Carte 3D des liens entre les 17 notions : une sphère de notions reliées par
 * des arêtes (les « ponts » du programme). Survoler ou cliquer une notion
 * met en lumière ses liens — pour apprendre à faire des parallèles.
 *
 * Sans dépendance : projection calculée à la main + requestAnimationFrame,
 * pilotable à la souris/au doigt, et respectueuse de `prefers-reduced-motion`.
 */
export default function LiensConstellation3D({
  active,
  onSelect,
}: {
  active: NotionId | null;
  onSelect: (id: NotionId) => void;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  // « lite » = pas d'auto-rotation continue (mouvement réduit OU écran tactile).
  const lite =
    typeof window !== "undefined" &&
    (!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      !!window.matchMedia?.("(pointer: coarse)").matches);

  // Répartition régulière sur une sphère (spirale de Fibonacci).
  const points = useMemo(() => {
    const n = NOTIONS.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return NOTIONS.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * golden;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, []);

  // Arêtes (liens) dédupliquées : un lien A→B et B→A ne compte qu'une fois.
  const edges = useMemo(() => {
    const indexOf = new Map<NotionId, number>(NOTIONS.map((n, i) => [n.id, i]));
    const seen = new Set<string>();
    const list: { a: number; b: number }[] = [];
    NOTIONS.forEach((n, i) => {
      n.liens.forEach((lid) => {
        const j = indexOf.get(lid);
        if (j === undefined) return;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) return;
        seen.add(key);
        list.push({ a: i, b: j });
      });
    });
    return list;
  }, []);

  // Voisins de chaque notion (pour mettre en lumière au survol).
  const neighbors = useMemo(() => {
    const adj = NOTIONS.map(() => new Set<number>());
    edges.forEach(({ a, b }) => {
      adj[a].add(b);
      adj[b].add(a);
    });
    return adj;
  }, [edges]);

  const activeIndex = useMemo(
    () => (active ? NOTIONS.findIndex((n) => n.id === active) : -1),
    [active]
  );

  // L'index mis en lumière (survol prioritaire sur la sélection) + un rendu
  // ponctuel quand il change, sans relancer la boucle d'animation.
  const hlRef = useRef<number>(-1);
  const renderRef = useRef<() => void>(() => {});
  useEffect(() => {
    hlRef.current = hover ?? (activeIndex >= 0 ? activeIndex : -1);
    renderRef.current();
  }, [hover, activeIndex]);

  const st = useRef({
    rotY: 0.6,
    rotX: -0.32,
    dragging: false,
    paused: false,
    lastX: 0,
    lastY: 0,
    moved: 0,
    suppressClick: false,
    running: false,
    raf: 0,
    visible: true,
    inView: true,
    w: 0,
    h: 0,
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const AUTO = lite ? 0 : 0.003;

    const measure = () => {
      const s = st.current;
      s.w = scene.clientWidth;
      s.h = scene.clientHeight;
    };
    measure();

    const render = () => {
      const s = st.current;
      const cx = s.w / 2;
      const cy = s.h / 2;
      const R = Math.min(s.w, s.h) * 0.42;
      const cosY = Math.cos(s.rotY), sinY = Math.sin(s.rotY);
      const cosX = Math.cos(s.rotX), sinX = Math.sin(s.rotX);
      const hl = hlRef.current;

      // Projection 2D de chaque point.
      const proj = points.map((p) => {
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const depth = (z2 + 1) / 2; // 0 (arrière) → 1 (avant)
        return { x: cx + x1 * R, y: cy + y2 * R, depth };
      });

      // Arêtes (placées sous les nœuds).
      edges.forEach((e, k) => {
        const el = linkRefs.current[k];
        if (!el) return;
        const a = proj[e.a];
        const b = proj[e.b];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy);
        const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
        const avg = (a.depth + b.depth) / 2;
        const on = hl < 0 || e.a === hl || e.b === hl;
        el.style.width = `${len.toFixed(1)}px`;
        el.style.transform = `translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px) rotate(${ang.toFixed(2)}deg)`;
        el.style.opacity = (hl < 0 ? 0.1 + 0.22 * avg : on ? 0.55 + 0.4 * avg : 0.05).toFixed(3);
        el.style.background = on && hl >= 0 ? NOTIONS[hl].couleur : "var(--color-brand)";
        el.style.zIndex = String(Math.round(avg * 100));
      });

      // Nœuds.
      points.forEach((_, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        const pr = proj[i];
        const isOn = hl < 0 || i === hl || neighbors[hl]?.has(i);
        const scale = (0.62 + 0.5 * pr.depth) * (i === hl ? 1.18 : 1);
        el.style.transform = `translate(${pr.x.toFixed(1)}px, ${pr.y.toFixed(1)}px) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
        el.style.opacity = (hl < 0 ? 0.5 + 0.5 * pr.depth : isOn ? 0.6 + 0.4 * pr.depth : 0.14).toFixed(3);
        el.style.zIndex = String(200 + Math.round(pr.depth * 100) + (i === hl ? 300 : 0));
      });
    };
    renderRef.current = render;

    const shouldLoop = () => {
      const s = st.current;
      return s.dragging || (!lite && s.visible && s.inView && !s.paused);
    };
    const frame = () => {
      const s = st.current;
      if (!s.dragging && !s.paused) s.rotY += AUTO;
      render();
      if (shouldLoop()) {
        s.raf = requestAnimationFrame(frame);
      } else {
        s.running = false;
      }
    };
    const start = () => {
      const s = st.current;
      if (!s.running && shouldLoop()) {
        s.running = true;
        s.raf = requestAnimationFrame(frame);
      }
    };

    const onDown = (e: PointerEvent) => {
      const s = st.current;
      s.dragging = true;
      s.moved = 0;
      s.suppressClick = false;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
      start();
    };
    const onMove = (e: PointerEvent) => {
      const s = st.current;
      if (!s.dragging) return;
      const dx = e.clientX - s.lastX;
      const dy = e.clientY - s.lastY;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
      s.moved += Math.abs(dx) + Math.abs(dy);
      s.rotY += dx * 0.009;
      s.rotX = Math.max(-1.2, Math.min(1.2, s.rotX + dy * 0.009));
      if (s.moved > 6) s.suppressClick = true;
      if (!s.running) render();
    };
    const onUp = () => {
      st.current.dragging = false;
    };

    const onVis = () => {
      st.current.visible = !document.hidden;
      if (st.current.visible) start();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        st.current.inView = entry.isIntersecting;
        if (entry.isIntersecting) start();
      },
      { threshold: 0.05 }
    );
    const ro = new ResizeObserver(() => {
      measure();
      render();
    });

    st.current.visible = !document.hidden;
    render();
    start();
    io.observe(scene);
    ro.observe(scene);
    scene.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(st.current.raf);
      st.current.running = false;
      io.disconnect();
      ro.disconnect();
      scene.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [points, edges, neighbors, lite]);

  const highlighted = hover ?? (activeIndex >= 0 ? activeIndex : null);
  const hlNotion = highlighted !== null ? NOTIONS[highlighted] : null;

  return (
    <div>
      <div
        ref={sceneRef}
        className="lc-scene"
        role="group"
        aria-label="Carte des liens entre les 17 notions"
      >
        {edges.map((_, k) => (
          <div
            key={k}
            ref={(el) => {
              linkRefs.current[k] = el;
            }}
            className="lc-link"
            aria-hidden
          />
        ))}

        {NOTIONS.map((n, i) => {
          const initial = n.titre.replace(/^L['’]|^La |^Le /, "").charAt(0).toUpperCase();
          return (
            <button
              key={n.id}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className="lc-node text-lg"
              title={n.titre}
              aria-label={n.titre}
              style={{ color: n.couleur, borderColor: n.couleur + "66" }}
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover((h) => (h === i ? null : h))}
              onFocus={() => setHover(i)}
              onBlur={() => setHover((h) => (h === i ? null : h))}
              onClick={() => {
                if (!st.current.suppressClick) onSelect(n.id);
              }}
            >
              {initial}
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm mt-2 min-h-6">
        {hlNotion ? (
          <span>
            <span className="font-semibold" style={{ color: hlNotion.couleur }}>
              {hlNotion.titre}
            </span>
            <span className="text-muted">
              {" "}
              se relie à{" "}
              {neighborTitles(hlNotion.id)}
            </span>
          </span>
        ) : (
          <span className="text-faint">Fais tourner la sphère · survole une notion pour voir ses liens</span>
        )}
      </p>
    </div>
  );
}

/** Liste lisible des notions liées à `id` (d'après son champ `liens`). */
function neighborTitles(id: NotionId): string {
  const liens = NOTIONS_BY_ID[id].liens;
  const noms = liens.map((l) => NOTIONS_BY_ID[l]?.titre).filter(Boolean);
  return noms.join(", ");
}
