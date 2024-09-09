import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Environment, ScrollControls } from "@react-three/drei";
import LaptopContainer from "./3D_components/LaptopContainer";
import "./index.css";
import "./maskedText.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="bg-[#040505] h-full w-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* 3D model Config */}
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
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
