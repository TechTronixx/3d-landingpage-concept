import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Environment, ScrollControls } from "@react-three/drei";
import LaptopContainer from "../src/assets/components/LaptopContainer";
import { motion } from "framer-motion";
import "./index.css";
import "./maskedText.css";

function App() {
  return (
    <>
      <div className="bg-[#040505] h-full w-screen">
        {/* Updated navbar with logo */}
        <nav className="absolute top-0 flex items-center justify-between w-full max-w-6xl px-6 py-4 text-white -translate-x-1/2 left-1/2">
          <div className="logo">
            {/* Replace with your actual logo */}
            <span className="text-xl font-bold">Logo</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </nav>

        <div className="absolute flex text-center flex-col items-center justify-center top-40 font-[700] left-1/2 -translate-x-1/2 tracking-tight text-6xl">
          <h1 className="masked">macbook pro</h1>
          <motion.span className="text-xl font-normal tracking-wide text-center text-white">
            oh so pro!
          </motion.span>
          <p className="w-3/4 py-1 text-xl font-normal tracking-wide text-center text-white">
            Macbook Pro M4 is the state of the art laptop for developers
            designed to make you more productive.
          </p>
        </div>
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
