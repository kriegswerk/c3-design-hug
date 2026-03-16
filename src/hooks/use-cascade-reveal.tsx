import { useEffect, useRef, useState } from "react";

/**
 * useCascadeReveal — Intersection Observer hook that triggers
 * the "Cascade Reveal" animation when an element scrolls into view.
 *
 * Returns a ref to attach to the container and a boolean `revealed`.
 * When resettable is true, the animation resets when the element leaves
 * the viewport and replays when it re-enters.
 */
export function useCascadeReveal(threshold = 0.15, resettable = false) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (!resettable) observer.unobserve(el);
        } else if (resettable) {
          setRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, resettable]);

  return { ref, revealed };
}
