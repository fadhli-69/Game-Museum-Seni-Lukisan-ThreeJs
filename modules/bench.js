import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"; // Pastikan Anda menggunakan GLTFLoader.js dari addons
import { GUI } from "lil-gui";

export const loadBenchModel = (scene) => {
  const loader = new GLTFLoader();
  const gui = new GUI();

  // Menggunakan path yang dimulai dari root untuk folder `public`
  loader.load(
    "/models/bench_2/scene.gltf", 
    (gltf) => {
      const bench = gltf.scene;
      console.log("BENCH", gltf);

      

      // Traverse semua anak (child) dari model untuk mengakses setiap Mesh
      bench.traverse((child) => {
        if (child.isMesh) {
          console.log("Materials:", child.material);
          console.log("Map Material", child.material.map);
          console.log("Material Name:", child.material.name);
          console.log("Material Type:", child.material.type);
          console.log("UV attributes:", child.geometry.attributes.uv);
        }
      });

      // Posisi dan Skala Default untuk model Bench
      bench.position.set(0, -3.12, -8);
      bench.rotation.set(0, 11, 0);
      bench.scale.set(3, 3, 3);

      // Menambahkan bench ke dalam scene
      scene.add(bench);
    },
    undefined, // Callback untuk progress (opsional)
    (error) => {
      console.error("An error occurred while loading the bench model.", error);
    }
  );
};
