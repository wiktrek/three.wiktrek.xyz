interface Window {
  id: number;
}
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Metadata } from 'next';

const id = Math.random();
const windowAtom = atomWithStorage('windows', [
  {
    id: id,
  },
] as Window[]);
export const metadata: Metadata = {
  title: 'sync windows - wiktrek.xyz',
  description: 'App made with three.js',
  icons: ['/favicon.svg'],
};

export default function Home() {
  'use client';
  // const [windows, setWindows] = useAtom(windowAtom);

  // console.log(windows);

  return (
    <main className="text-xl justify-center items-center h-screen w-screen overflow-hidden relative">
      <div>
        <a>wiktrek</a>
      </div>
    </main>
  );
}
