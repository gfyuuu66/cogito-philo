import { Fragment, type ReactNode } from "react";

/**
 * Mini-rendu de mise en forme : **gras** et *italique*.
 * Volontairement minimal (pas de markdown complet) pour rester sûr et rapide.
 */
export function renderMarkup(text: string): ReactNode {
  // On découpe en gardant les délimiteurs **...** et *...*
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((tok, i) => {
    if (tok.startsWith("**") && tok.endsWith("**")) {
      return <strong key={i}>{tok.slice(2, -2)}</strong>;
    }
    if (tok.startsWith("*") && tok.endsWith("*")) {
      return <em key={i}>{tok.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{tok}</Fragment>;
  });
}

export function Markup({ text }: { text: string }) {
  return <>{renderMarkup(text)}</>;
}
