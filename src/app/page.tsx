'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import Model from '~/components/Model';
export default function Home() {
  return (
    <main className="text-xl justify-center items-center h-screen w-screen">
      <Canvas>
        <hemisphereLight args={['#fff', '#333', Math.PI]} />
        <color attach="background" args={['#05080a']} />
        <Box position={[-2, 0, 0]} color="red" />
        <Box position={[0, 0, 0]} color="green" />
        <Box position={[2, 0, 0]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
