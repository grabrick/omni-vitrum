import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../Model/Model';
import { Environment } from '@react-three/drei';

export default function Scene() {
  return (
    <>
      <Canvas
        orthographic
        style={{ background: '#000' }}
        camera={{ position: [0, 0, 1], zoom: 800 }}
        shadows='basic'
      >
        <Suspense fallback={null}>
          <Model />
          <directionalLight intensity={1} position={[0, 2, 10]} color="#d5f8ff" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </>
  );
}
