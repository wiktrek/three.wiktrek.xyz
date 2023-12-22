'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';

export default function Home() {
  return (
    <main className="text-xl justify-center items-center h-screen w-screen">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-2, 0, 0]} color="red" />
        <Box position={[0, 0, 0]} color="green" />
        <Box position={[2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
