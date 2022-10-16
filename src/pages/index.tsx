import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import * as THREE from "three";
const Home: NextPage = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGL1Renderer({
      canvas: document.querySelector("#ez") as Element,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }, []);

  return (
    <>
      <Head>
        <title>Three - wiktrek.xyz</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <canvas id="ez"></canvas>
      </main>
    </>
  );
};

export default Home;
