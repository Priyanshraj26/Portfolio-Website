import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getR2D2Response } from "@/data/r2d2Knowledge";
import { X, Send } from "lucide-react";

// ── Simplified 3D R2-D2 icon ──────────────────────────────────────────────
const R2D2Model = ({ isOpen }) => {
  const groupRef = useRef();
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    timeRef.current += delta;

    if (isOpen) {
      // Rapid beeping bobble when chat is open
      groupRef.current.position.y = Math.sin(timeRef.current * 15) * 0.05;
    } else {
      // Idle gentle wobble
      groupRef.current.rotation.z = Math.sin(timeRef.current * 3) * 0.15;
      groupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Body - main barrel */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.6, 16]} />
        <meshStandardMaterial color="#e8e8e8" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Dome head */}
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Blue panel - front */}
      <mesh position={[0, 0.05, 0.36]}>
        <boxGeometry args={[0.2, 0.25, 0.01]} />
        <meshStandardMaterial color="#0044cc" />
      </mesh>

      {/* Blue panel - left */}
      <mesh position={[-0.25, -0.05, 0.25]} rotation={[0, -0.6, 0]}>
        <boxGeometry args={[0.12, 0.15, 0.01]} />
        <meshStandardMaterial color="#0055dd" />
      </mesh>

      {/* Blue panel - right */}
      <mesh position={[0.25, -0.05, 0.25]} rotation={[0, 0.6, 0]}>
        <boxGeometry args={[0.12, 0.15, 0.01]} />
        <meshStandardMaterial color="#0055dd" />
      </mesh>

      {/* Eye lens */}
      <mesh position={[0.1, 0.5, 0.3]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#ffffff"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.35, -0.25, 0]}>
        <boxGeometry args={[0.08, 0.5, 0.15]} />
        <meshStandardMaterial color="#cccccc" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.35, -0.25, 0]}>
        <boxGeometry args={[0.08, 0.5, 0.15]} />
        <meshStandardMaterial color="#cccccc" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Glow ring beneath */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.3, 0.45, 24]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0066ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

// ── Typing indicator dots ─────────────────────────────────────────────────
const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-primary"
        style={{
          animation: `typing-dot 1s ease-in-out ${i * 0.15}s infinite`,
        }}
      />
    ))}
    <style>{`
      @keyframes typing-dot {
        0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
        30% { opacity: 1; transform: translateY(-4px); }
      }
    `}</style>
  </div>
);

// ── Main chatbot component ────────────────────────────────────────────────
export const R2D2Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "r2d2",
      text: "bEEP-boop! \u{1F916} *happy dome spin* BWEEE! Greetings, traveller! I am R2-D2, Priyansh's faithful droid assistant. Ask me anything about his skills, projects, or how to contact him! Beep!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    // Fake delay then respond
    setTimeout(() => {
      const response = getR2D2Response(trimmed);
      setMessages((prev) => [...prev, { from: "r2d2", text: response }]);
      setIsTyping(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "1.5rem",
            zIndex: 1000,
            width: "340px",
            height: "480px",
            background: "rgba(10, 10, 20, 0.95)",
            border: "1px solid #8b5cf6",
            borderRadius: "12px",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "chat-slide-in 250ms ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "0.75rem 1rem",
              borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div>
              <p
                style={{
                  color: "#8b5cf6",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                R2-D2 | ASTROMECH DROID
              </p>
              <p
                style={{
                  color: "rgba(213, 211, 230, 0.6)",
                  fontSize: "0.7rem",
                  margin: 0,
                }}
              >
                Translator online. Beep boop!
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(213, 211, 230, 0.6)",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                }}
              >
                <div
                  style={{
                    padding: "0.6rem 0.85rem",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    ...(msg.from === "user"
                      ? {
                          background: "rgba(139, 92, 246, 0.35)",
                          color: "#e0dff0",
                          borderBottomRightRadius: "2px",
                        }
                      : {
                          background: "rgba(20, 20, 35, 0.9)",
                          color: "#d0cee0",
                          border: "1px solid rgba(50, 80, 180, 0.3)",
                          borderBottomLeftRadius: "2px",
                        }),
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: "flex-start" }}>
                <div
                  style={{
                    background: "rgba(20, 20, 35, 0.9)",
                    border: "1px solid rgba(50, 80, 180, 0.3)",
                    borderRadius: "10px",
                    borderBottomLeftRadius: "2px",
                  }}
                >
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.6rem",
              borderTop: "1px solid rgba(139, 92, 246, 0.3)",
              display: "flex",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask R2-D2 anything..."
              style={{
                flex: 1,
                background: "rgba(15, 15, 30, 0.8)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                borderRadius: "8px",
                padding: "0.5rem 0.75rem",
                color: "#d0cee0",
                fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#8b5cf6",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 0.75rem",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button with 3D R2-D2 icon */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close R2-D2 chat" : "Open R2-D2 chat"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 1001,
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(10, 10, 25, 0.9)",
          border: "2px solid #8b5cf6",
          cursor: "pointer",
          padding: 0,
          overflow: "hidden",
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)",
          animation: "r2d2-glow 2s ease-in-out infinite",
        }}
      >
        <Canvas
          camera={{ position: [0, 0.3, 2.5] }}
          gl={{ alpha: true, antialias: true }}
          style={{ width: "80px", height: "80px", pointerEvents: "none" }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 3]} intensity={1} />
          <R2D2Model isOpen={isOpen} />
        </Canvas>
      </button>

      {/* Keyframe animations */}
      <style>{`
        @keyframes r2d2-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.7); }
        }
        @keyframes chat-slide-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};
