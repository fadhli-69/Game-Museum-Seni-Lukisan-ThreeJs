// statue.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/statue/scene.gltf",
    (gltf) => {
      const statue = gltf.scene;

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      statue.position.set(0, 0.8, -7);

      // Scale if necessary
      statue.scale.set(20, 20, 20);

      // Iterate through all the meshes in the statue and update their materials
      statue.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("Statue Material:", child.material);
        }
      });

      // Add the statue to the scene
      scene.add(statue);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
