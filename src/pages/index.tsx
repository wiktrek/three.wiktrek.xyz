import type { NextPage } from "next";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.005;
      cube.rotation.z += 0.01;
      // moon.position.x -= 0.001;
      renderer.render(scene, camera);
    }
    animate();
    // const moonTexture = new THREE.TextureLoader().load("/images/moon.png");
    // const moon = new THREE.Mesh(
    //   new THREE.SphereGeometry(3, 32, 32),
    //   new THREE.MeshStandardMaterial({ map: moonTexture })
    // );
    // moon.position.set(10, 10, 10);
    // scene.add(moon);
    // // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(10, 5, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Helpers
    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(400));

      star.position.set(x, y, z);
      scene.add(star);
    }
    function smallspheres() {
      const geometry = new THREE.SphereGeometry(2, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xff4600 });
      const sphere = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(900));

      sphere.position.set(x, y, z);
      scene.add(sphere);
    }
    Array(20).fill(undefined).forEach(smallspheres);
    Array(200).fill(undefined).forEach(addStar);

    controls.update();
  }, []);

  return (
    <>
      <div className="absolute right-0 bottom-1 z-50 text-4xl text-white">
        {/* <a>wiktrek</a> */}
        <a href="https://wiktrek.xyz">wiktrek.xyz</a>
      </div>
      <canvas id="ez" className="fixed top-0 left-0 z-0"></canvas>
    </>
  );
};

export default Home;
