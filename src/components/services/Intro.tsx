import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WhatWeDo() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 600;
    const height = 600;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(1, 120, 120);

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Add gradient colors
    const colors = [];
    const color1 = new THREE.Color("#6ffcff");
    const color2 = new THREE.Color("#b56dff");

    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const y = position.getY(i);
      const mix = (y + 1) / 2;
      const color = color1.clone().lerp(color2, mix);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        const distance =
          Math.sin(x * 3 + time) *
          Math.cos(y * 3 + time) *
          0.1;

        positions.setXYZ(
          i,
          x + x * distance,
          y + y * distance,
          z + z * distance
        );
      }

      positions.needsUpdate = true;

      points.rotation.y += 0.002;
      points.rotation.x += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-[#081226] to-[#1a4b66]">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">

        {/* Left Content */}
        <div className="md:w-1/2 text-white flex flex-col justify-center">
          <div className="space-y-8 max-w-xl">


            <h2 className="text-5xl xl:text-6xl font-semibold leading-[1.1]">
              Where Creativity Meets Intelligent Technology
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              CYNI AI is a creative technology firm delivering end-to-end
              digital solutions by merging AI-driven film production and VFX
              with custom software development. We design and deploy
              intelligent, scalable systems that transform ambitious concepts
              into powerful digital experiences across web, mobile, and cinema.
            </p>

          </div>
        </div>

        {/* Right Animation */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-[600px] h-[600px] rounded-full overflow-hidden">
            <div ref={mountRef} />
          </div>
        </div>

      </div>
    </section>
  );
}