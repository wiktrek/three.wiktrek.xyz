'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import Cup from '~/components/Cup';
export default function Home() {
  return (
    <main className="text-xl justify-center items-center h-screen w-screen">
      <Canvas camera={{ fov: 60 }}>
        <hemisphereLight args={['#fff', '#333', 5]} />
        <color attach="background" args={['#fffff']} />
        <Box position={[-2, 0, 0]} color="red" />
        <Box position={[0, 0, 0]} color="green" />
        <Box position={[2, 0, 0]} />
        <Cup />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
