import { useState, useEffect, useCallback } from "react";

const CRAWL_TEXT = `EPISODE IV
A NEW DEVELOPER

It is a period of digital revolution.
Rebel engineers, striking from
hidden terminals, have won their
first victory against the Empire
of mediocre software.

During the chaos, a young
developer \u2014 PRIYANSH RAJ GUPTA \u2014
has been mastering the ways
of Machine Learning and
Full-Stack Development.

Armed with React, Python,
TensorFlow, and the ancient
wisdom of the Force, he builds
intelligent systems that bring
hope to users across the galaxy.

Pursued by the dark forces of
bugs and deadlines, Priyansh
races to complete his mission:
to craft experiences so
powerful, they could destroy
a Death Star....`;

export const StarWarsIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState("preamble"); // preamble -> crawl -> done
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSkipOrEnd = useCallback(() => {
    if (fadeOut) return;
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [fadeOut, onComplete]);

  useEffect(() => {
    // Show preamble for 4s, then transition to crawl
    const preambleTimer = setTimeout(() => {
      setPhase("crawl");
    }, 4000);

    // Show skip button after 4s
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 4000);

    // Auto-complete after crawl finishes (~35s total: 4s preamble + 30s crawl + 1s buffer)
    const endTimer = setTimeout(() => {
      handleSkipOrEnd();
    }, 35000);

    return () => {
      clearTimeout(preambleTimer);
      clearTimeout(skipTimer);
      clearTimeout(endTimer);
    };
  }, [handleSkipOrEnd]);

  // Persist across hot reloads
  useEffect(() => {
    if (sessionStorage.getItem("sw-intro-seen")) {
      onComplete();
    }
    return () => {
      sessionStorage.setItem("sw-intro-seen", "true");
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        overflow: "hidden",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 600ms ease-out",
      }}
    >
      {/* Starfield background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1px 1px at 20% 30%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 40% 70%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 60% 20%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 80% 60%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 10% 80%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 90% 10%, white 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6) 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 30% 90%, rgba(255,255,255,0.4) 0.5px, transparent 1px), " +
            "radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.5) 0.5px, transparent 1px)",
          backgroundSize: "200px 200px",
          opacity: 0.6,
        }}
      />

      {/* Phase 1: "A long time ago..." preamble */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: phase === "preamble" ? 1 : 0,
          transition: "opacity 1s ease-out",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            color: "#4eb5ff",
            fontFamily: "'Pathway Gothic One', 'Arial Narrow', sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            letterSpacing: "0.05em",
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          A long time ago in a galaxy far, far away....
        </p>
      </div>

      {/* Phase 2: Crawl */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          perspective: "400px",
          perspectiveOrigin: "center bottom",
          overflow: "hidden",
          opacity: phase === "crawl" ? 1 : 0,
          transition: "opacity 1.5s ease-in",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "min(60%, 600px)",
            transformOrigin: "center bottom",
            transform: "rotateX(20deg)",
            animation: phase === "crawl" ? "sw-crawl 30s linear forwards" : "none",
          }}
        >
          {CRAWL_TEXT.split("\n").map((line, i) => {
            // Episode title lines get special styling
            const isTitle = i === 0; // "EPISODE IV"
            const isSubtitle = i === 1; // "A NEW DEVELOPER"

            return (
              <p
                key={i}
                style={{
                  color: "#FFE81F",
                  fontFamily: "'Pathway Gothic One', 'Arial Narrow', sans-serif",
                  fontSize: isTitle
                    ? "clamp(1.2rem, 3vw, 1.8rem)"
                    : isSubtitle
                    ? "clamp(2rem, 5vw, 3.5rem)"
                    : "clamp(1rem, 2.5vw, 1.4rem)",
                  lineHeight: 1.8,
                  textAlign: "center",
                  fontWeight: isTitle || isSubtitle ? "700" : "400",
                  letterSpacing: isTitle ? "0.4em" : isSubtitle ? "0.05em" : "0.02em",
                  margin: isTitle || isSubtitle ? "0.5rem 0" : "0",
                  marginBottom: isSubtitle ? "2rem" : undefined,
                }}
              >
                {line || "\u00A0"}
              </p>
            );
          })}
        </div>
      </div>

      {/* Skip button */}
      {showSkip && !fadeOut && (
        <button
          onClick={handleSkipOrEnd}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 10000,
            background: "transparent",
            border: "1px solid #FFE81F",
            color: "#FFE81F",
            padding: "0.6rem 1.5rem",
            fontFamily: "'Pathway Gothic One', 'Arial Narrow', sans-serif",
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "4px",
            opacity: 0,
            animation: "sw-fade-in 500ms ease-out forwards",
            transition: "background 200ms, color 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FFE81F";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#FFE81F";
          }}
        >
          Skip Intro &#9654;
        </button>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes sw-crawl {
          0% {
            transform: rotateX(20deg) translateY(0);
          }
          100% {
            transform: rotateX(20deg) translateY(-200%);
          }
        }
        @keyframes sw-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
