import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { XWingOrbit } from "./XWingOrbit";

const DeathStar = ({ mouseX, mouseY }) => {
  const meshRef = useRef();
  const dishRef = useRef();
  const emissiveRef = useRef(0.05);
  const emissiveDir = useRef(1);

  const [colorMap, bumpMap] = useTexture([
    "/textures/death_star.jpg",
    "/textures/death_star_bump.jpg",
  ]);

  useFrame(() => {
    if (!meshRef.current) return;

    // Slow auto-rotation
    meshRef.current.rotation.y += 0.001;

    // Mouse tilt with lerp
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouseY * 0.3,
      0.02
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      mouseX * 0.1,
      0.02
    );

    // Superlaser dish pulse
    if (dishRef.current) {
      emissiveRef.current += 0.002 * emissiveDir.current;
      if (emissiveRef.current >= 0.3) emissiveDir.current = -1;
      if (emissiveRef.current <= 0.05) emissiveDir.current = 1;
      dishRef.current.material.emissiveIntensity = emissiveRef.current;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Superlaser dish */}
      <mesh ref={dishRef} position={[-0.9, 0.9, 1.5]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#555555"
          emissive="#00ff00"
          emissiveIntensity={0.05}
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

const OrbitRing = () => {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.0005;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0.3, 0]}>
      <torusGeometry args={[2.8, 0.04, 16, 100]} />
      <meshStandardMaterial color="#888888" opacity={0.6} transparent />
    </mesh>
  );
};

const ParallaxGroup = ({ scrollProgress, mouseX, mouseY }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;

    const targetX = THREE.MathUtils.lerp(2.0, 3.5, scrollProgress);
    const targetY = THREE.MathUtils.lerp(0, 2.5, scrollProgress);
    const targetScale = THREE.MathUtils.lerp(1.0, 0.6, scrollProgress);

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.05
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.05
    );

    const s = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.05
    );
    groupRef.current.scale.set(s, s, s);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <DeathStar mouseX={mouseX} mouseY={mouseY} />
      </Float>
      <OrbitRing />
      <XWingOrbit />
    </group>
  );
};

const SceneFallback = () => (
  <mesh>
    <sphereGeometry args={[1.8, 64, 64]} />
    <meshStandardMaterial color="#666666" roughness={0.8} metalness={0.1} />
  </mesh>
);

export const DeathStarScene = ({
  scrollProgress = 0,
  mouseX = 0,
  mouseY = 0,
}) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />

      {/* Background stars */}
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        fade
        speed={0.5}
      />

      {/* Main scene with texture fallback */}
      <Suspense fallback={<SceneFallback />}>
        <ParallaxGroup
          scrollProgress={scrollProgress}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </Suspense>
    </Canvas>
  );
};
