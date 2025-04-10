// src/components/ModelViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

function RoundtableModel() {
  const modelPath = `${import.meta.env.BASE_URL}models/ShiftyPig.glb`;
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows={false}>
            <RoundtableModel />
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}