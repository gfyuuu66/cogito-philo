import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NOTIONS } from "../content";
import { useStore } from "../lib/store";
import ProgressRing from "./ProgressRing";

/**
 * Constellation 3D des 17 notions : une sphère qui tourne autour d'un cœur φ
 * affichant la maîtrise globale. Sans dépendance (CSS 3D + requestAnimationFrame),
 * pilotable à la souris/tactile, et respectueuse de `prefers-reduced-motion`.
 */
export default function Constellation3D() {
  const navigate = useNavigate();
  const { mastery, notionMastery } = useStore();
  const sceneRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // « lite » = pas d'auto-rotation continue : mouvement réduit OU écran tactile
  // (mobile / iPad) — économise batterie/CPU et évite le jank. On peut toujours
  // faire tourner la sphère au doigt.
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

  const st = useRef({
    rotY: 0.6,
    rotX: -0.35,
    dragging: false,
    hover: false,
    lastX: 0,
    lastY: 0,
    moved: 0,
    suppressClick: false,
    running: false,
    raf: 0,
    visible: true,
    inView: true,
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const R = 120;
    const AUTO = lite ? 0 : 0.0033;

    const render = () => {
      const s = st.current;
      const cy = Math.cos(s.rotY), sy = Math.sin(s.rotY);
      const cx = Math.cos(s.rotX), sx = Math.sin(s.rotX);
      points.forEach((p, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        const depth = (z2 + 1) / 2; // 0 (arrière) → 1 (avant)
        el.style.transform = `translate3d(${(x1 * R).toFixed(1)}px, ${(y2 * R).toFixed(1)}px, ${(z2 * R).toFixed(1)}px)`;
        el.style.opacity = (0.4 + 0.6 * depth).toFixed(3);
        el.style.zIndex = String(Math.round(depth * 1000));
      });
    };

    // La boucle ne tourne que si elle a une raison : glissement en cours, ou
    // auto-rotation possible (hors "mouvement réduit", onglet visible, à l'écran).
    const shouldLoop = () => {
      const s = st.current;
      return s.dragging || (!lite && s.visible && s.inView);
    };
    const frame = () => {
      const s = st.current;
      if (!s.dragging && !s.hover) s.rotY += AUTO;
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
    };
    const onUp = () => {
      st.current.dragging = false;
    };
    const onEnter = () => {
      st.current.hover = true;
    };
    const onLeave = () => {
      st.current.hover = false;
    };

    const onVis = () => {
      st.current.visible = !document.hidden;
      if (st.current.visible) start();
    };
    // Suspend l'animation quand la constellation sort de l'écran (économie CPU/batterie).
    const io = new IntersectionObserver(
      ([e]) => {
        st.current.inView = e.isIntersecting;
        if (e.isIntersecting) start();
      },
      { threshold: 0.05 }
    );

    st.current.visible = !document.hidden;
    render();
    start();
    io.observe(scene);
    scene.addEventListener("pointerdown", onDown);
    scene.addEventListener("pointerenter", onEnter);
    scene.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(st.current.raf);
      st.current.running = false;
      io.disconnect();
      scene.removeEventListener("pointerdown", onDown);
      scene.removeEventListener("pointerenter", onEnter);
      scene.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [points, lite]);

  return (
    <div
      ref={sceneRef}
      className="orbit-scene select-none"
      role="group"
      aria-label="Constellation des 17 notions de philosophie"
    >
      <div className="orbit-stage">
        <div className="orbit-core" style={{ zIndex: 500 }}>
          <ProgressRing value={mastery} size={92} stroke={7} color="var(--color-accent)">
            <span className="font-display text-3xl text-accent leading-none">φ</span>
          </ProgressRing>
        </div>

        {NOTIONS.map((n, i) => {
          const initial = n.titre.replace(/^L['’]|^La |^Le /, "").charAt(0).toUpperCase();
          const m = notionMastery(n.id);
          return (
            <button
              key={n.id}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className="orbit-node text-lg"
              title={`${n.titre} · ${m}%`}
              aria-label={`${n.titre}, maîtrise ${m}%`}
              style={{
                color: n.couleur,
                borderColor: n.couleur + "66",
                boxShadow: m >= 70 ? `0 0 0 2px ${n.couleur}55, var(--shadow-soft)` : undefined,
              }}
              onClick={() => {
                if (!st.current.suppressClick) navigate(`/notion/${n.id}`);
              }}
            >
              {initial}
            </button>
          );
        })}
      </div>

      <p className="absolute bottom-1 inset-x-0 text-center text-[0.7rem] text-faint pointer-events-none">
        Fais-la tourner · clique une notion
      </p>
    </div>
  );
}
