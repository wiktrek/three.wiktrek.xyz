import { unwatchFile } from "fs";
import type { NextPage } from "next";
import { getFontDefinitionFromManifest } from "next/dist/server/font-utils";
import Head from "next/head";
import path from "path";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { any, number } from "zod";
const Home: NextPage = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#ez"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);
    // cube
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const texture = new THREE.TextureLoader().load("/icon.png");
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const moonTexture = new THREE.TextureLoader().load("/images/moon.png");
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({ map: moonTexture })
    );
    moon.position.set(10, 10, 10);
    scene.add(moon);
    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(10, 5, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Helpers
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);

    // const controls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill(undefined).forEach(addStar);
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.005;
      cube.rotation.z += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <>
      <canvas id="ez" className="fixed top-0 left-0"></canvas>
      <main className="absolute items-center justify-center text-center">
        <section className="text-green text-6xl">
          <a>aaaaaaaaaaaaaaaaa</a>
        </section>
      </main>
    </>
  );
};

export default Home;
