import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function Mitsuri() {

  const { scene } = useGLTF("/models/mitsuri/mitsuri.glb")

  return (
    <primitive
      object={scene}
      scale={17}
      position={[0, -5.5, 0]}
    />
  )
}

export default function MitsuriModel() {

  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >

      <ambientLight intensity={1.5} />

      <directionalLight position={[5,5,5]} intensity={3} />

      <directionalLight position={[-5,3,-5]} intensity={1.5} />

      <Mitsuri />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

    </Canvas>
  )
}

useGLTF.preload("/models/mitsuri/mitsuri.glb")