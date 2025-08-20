import { Canvas } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"
import { HeroBoy } from "./HeroBoy";

const HeroExperience = () => {
  return (
    <Canvas>
      {/* Stronger base light */}
      <ambientLight intensity={1.2} />      

      {/* Colored rim lights */}
      <directionalLight position={[-2, 2, 3]} intensity={2} color={"#ff28d5"} /> 
      <directionalLight position={[2, 2, 3]} intensity={2} color={"#1c34ff"} />

      <Sparkles 
        count={100} 
        size={2} 
        speed={0.5} 
        color={"lightblue"} 
        scale={[10, 10, 2]}
      />

      <group>
        <HeroBoy scale={9} position={[0, -15, 0]} />
      </group>
    </Canvas>
  )
}

export default HeroExperience

