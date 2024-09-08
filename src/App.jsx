import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Environment, ScrollControls } from "@react-three/drei";
import LaptopContainer from "../src/assets/components/LaptopContainer";

function App() {
  return (
    <>
      <div className="bg-[#040505] h-full w-screen">
        <h1 className="absolute top-32 font-bold left-1/2 md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-b from-neutral-200 via-neutral-600 to-neutral-700 -translate-x-1/2 text-center text-transparent text-6xl">
          macbook M4 pro 2024.
        </h1>
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          {/* // Add control movement with mouse or touch */}
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
      </div>
    </>
  );
}

export default App;
