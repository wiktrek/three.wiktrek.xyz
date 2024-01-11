'use client';
interface Window {
  id: number;
}
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Provider, atom, createStore, getDefaultStore, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const store = getDefaultStore();
// const windowAtom = atomWithStorage('windows', [] as Window[]);
const windowAtom = atom([] as Window[]);
const sub = store.sub(windowAtom, () => {
  console.log(store);
});

export default function Home() {
  const [windows, setWindows] = useAtom(windowAtom);
  const [color, setColor] = useState('#99ff99');
  return (
    <Provider store={store}>
      <div className="text-xl justify-center items-center h-screen w-screen overflow-hidden relative">
        <p>wiktrek</p>
      </div>
    </Provider>
  );
}
