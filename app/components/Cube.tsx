"use client";
import { useEffect, useRef } from "react"
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function Cube() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvas.current) return;
    const parentElement = canvas.current.parentElement;
    const width = parentElement!.clientWidth;
    const height = parentElement!.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 1, 1000);
    camera.updateProjectionMatrix();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
    });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x2AD87F });
    const cube = new THREE.Mesh(geometry, material);
    scene.background = new THREE.Color(0x1F2937);
    scene.add(cube);
    camera.position.z = 4;
    const controls = new OrbitControls(camera, canvas.current);
    controls.enableDamping = true;
    controls.autoRotate = true;
    function animate() {
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
      const newWidth = parentElement!.clientWidth;
      const newHeight = parentElement!.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    });
  }, []);
  return (
    <div className="w-36 h-36 m-auto sm:h-96 sm:w-96 md:w-full md:h-full md:m-0">
      <canvas ref={canvas}></canvas>
    </div>
  )
}