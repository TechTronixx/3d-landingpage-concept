/* eslint-disable react/no-unknown-property */
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LaptopContainer = () => {
  let model = useGLTF("/mac.glb");
  let textures = useTexture("/red.jpg");

  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = textures;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.roughness = 0;
  let data = useScroll();

  useFrame(() => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default LaptopContainer;
