import React from "react";
import { Canvas } from "@react-three/fiber";
import RotatingCube from "./RotatingCube";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Jared!<span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Innovative Pages & Applications
                </p>
            </div>

            {/* 3D Canvas containing the rotating cube */}
            <Canvas
                className="absolute top-0 left-0 w-full h-full"
                camera={{ position: [0, 0, 5], fov: 60 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RotatingCube />
            </Canvas>
        </section>
    );
}

export default Hero;
