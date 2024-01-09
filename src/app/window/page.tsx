'use client';
interface Window {
  id: number;
}
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HexColorPicker } from 'react-colorful';
import Box from '~/components/Box';
import Model from '~/components/Cup';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
const windowAtom = atomWithStorage('windows', [{}] as Window[]);
export default function Home() {
  const [windows, setWindows] = useAtom(windowAtom);
  const [color, setColor] = useState('#99ff99');
  const a = {
    id: Number(Math.random() * 10),
  } as Window;
  function Picker() {
    return (
      <div className="absolute bottom-0 left-0">
        <HexColorPicker color={color} onChange={(c) => setColor(c)} />
      </div>
    );
  }
  function addWindow(p: Window) {
    let ww = windows;
    windows.map((w) => {
      if (p.id == w.id) {
        return;
      }
    });
    ww.push(p);
    setWindows(ww);
  }
  useEffect(() => {
    addWindow(a);
  });
  window.addEventListener('beforeunload', function (e) {
    let index = windows.indexOf(a);
    setWindows(windows.splice(index, 1));
  });
  return (
    <main className="text-xl justify-center items-center h-screen w-screen overflow-hidden relative">
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
