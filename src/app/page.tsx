'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HexColorPicker } from 'react-colorful';
import Box from '~/components/Box';
import Model from '~/components/Cup';
import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('#99ff99');
  function Picker() {
    return (
      <HexColorPicker
        className="absolute top-0 left-0"
        color={color}
        onChange={(c) => setColor(c)}
      />
    );
  }
  return (
    <main className="flex text-xl justify-center items-center h-screen w-screen overflow-hidden">
      <Canvas camera={{ fov: 60 }}>
        <hemisphereLight args={['#fff', '#333', 5]} />
        <color attach="background" args={['#05080a']} />
        <Box position={[-2, 0, 0]} color="red" />
        <Box position={[0, 0, 0]} color="green" />
        <Box position={[2, 0, 0]} />
        <Cup color={color} />
        <OrbitControls />
      </Canvas>
      <Picker />
    </main>
  );
}
function Cup(props: { color: string }) {
  return (
    <>
      <Model color={props.color} />
    </>
  );
}
