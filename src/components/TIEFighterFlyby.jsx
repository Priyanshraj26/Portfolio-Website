import { useEffect, useRef, useState } from "react";

const firedSections = new Set();

export const TIEFighterFlyby = ({ sectionId }) => {
  const [isFlying, setIsFlying] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedSections.has(sectionId)) {
          firedSections.add(sectionId);
          setIsFlying(true);
          setTimeout(() => setIsFlying(false), 1300);
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(section);
    return () => observerRef.current?.disconnect();
  }, [sectionId]);

  if (!isFlying) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 500,
        pointerEvents: "none",
        animation: "tie-flyby 1.2s ease-in-out forwards",
      }}
    >
      {/* Motion blur trail */}
      <div
        style={{
          position: "absolute",
          left: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3))",
        }}
      />
      {/* TIE Fighter SVG */}
      <svg viewBox="0 0 60 40" width="60" height="40">
        {/* Body */}
        <circle cx="30" cy="20" r="6" fill="#888" stroke="#aaa" strokeWidth="1" />
        {/* Left wing panel */}
        <polygon
          points="0,2 20,10 20,30 0,38"
          fill="#555"
          stroke="#888"
          strokeWidth="0.5"
        />
        {/* Right wing panel */}
        <polygon
          points="60,2 40,10 40,30 60,38"
          fill="#555"
          stroke="#888"
          strokeWidth="0.5"
        />
        {/* Connector rods */}
        <line x1="20" y1="20" x2="24" y2="20" stroke="#aaa" strokeWidth="1.5" />
        <line x1="36" y1="20" x2="40" y2="20" stroke="#aaa" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
