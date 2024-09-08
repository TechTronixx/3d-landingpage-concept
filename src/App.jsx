import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Environment, ScrollControls } from "@react-three/drei";
import LaptopContainer from "../src/assets/components/LaptopContainer";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr",
          ]}
        />
        <ScrollControls>
          <LaptopContainer />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
