/* eslint-disable react/no-unknown-property */
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LaptopContainer = () => {
  let model = useGLTF("/mac.glb");
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
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
