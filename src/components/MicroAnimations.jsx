import { useEffect } from "react";

function createBlasterEffect(x, y) {
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed; left: ${x}px; top: ${y}px;
    pointer-events: none; z-index: 9998;
    transform: translate(-50%, -50%);
  `;

  const colors = ["#FFE81F", "#ff4500", "#ffffff", "#FFE81F", "#ff4500", "#ffffff", "#FFE81F", "#ff4500"];
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  angles.forEach((angle, i) => {
    const spark = document.createElement("div");
    spark.style.cssText = `
      position: absolute;
      width: 3px;
      height: 10px;
      background: ${colors[i]};
      border-radius: 2px;
      transform-origin: bottom center;
      transform: rotate(${angle}deg);
      animation: blaster-spark 400ms ease-out forwards;
    `;
    container.appendChild(spark);
  });

  document.body.appendChild(container);
  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 450);
}

/**
 * Hook that attaches blaster spark effect to all .cosmic-button clicks.
 * Mount once at the top level (e.g., Home.jsx).
 */
export function useBlasterClick() {
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest(".cosmic-button");
      if (btn) {
        createBlasterEffect(e.clientX, e.clientY);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}
