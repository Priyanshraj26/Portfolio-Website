import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const XWingOrbit = () => {
  const groupRef = useRef();
  const angleRef = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;
    angleRef.current += 0.008;
    const a = angleRef.current;

    const x = Math.cos(a) * 2.8;
    const z = Math.sin(a) * 2.8;
    const y = Math.sin(a * 0.5) * 0.3;

    groupRef.current.position.set(x, y, z);
    groupRef.current.rotation.y = -a + Math.PI / 2;
  });

  return (
    <group ref={groupRef} scale={0.5}>
      {/* Fuselage */}
      <mesh>
        <boxGeometry args={[0.3, 0.05, 0.08]} />
        <meshStandardMaterial color="#cccccc" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Left wing - upper */}
      <mesh position={[0, 0.04, 0.06]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.06]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Left wing - lower */}
      <mesh position={[0, -0.04, 0.06]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.06]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Right wing - upper */}
      <mesh position={[0, 0.04, -0.06]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.06]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Right wing - lower */}
      <mesh position={[0, -0.04, -0.06]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.06]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Engine glow */}
      <pointLight position={[-0.2, 0, 0]} intensity={0.3} color="#4488ff" distance={1.5} />
    </group>
  );
};
