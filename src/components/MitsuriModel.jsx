import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useEffect } from "react"

function Mitsuri() {

  const { scene } = useGLTF("/models/mitsuri/model.gltf")

  useEffect(() => {

    const loader = new THREE.TextureLoader()

    const texture = loader.load(
      "/models/mitsuri/RGB_7765e38612ac463d95d65517312ea0a2_mitsuri_diff.1001.png"
    )

    scene.traverse((child) => {

      if (child.isMesh) {

        child.material = new THREE.MeshStandardMaterial({
          map: texture
        })

      }

    })

  }, [scene])

  return <primitive object={scene} scale={17} position={[0,-5.5,0]} />

}

export default function MitsuriModel() {

  return (

    <Canvas
  camera={{ position: [0, 1, 6], fov: 50 }}
  style={{ width: "100%", height: "100%" }}
>

      <ambientLight intensity={2}/>
      <directionalLight position={[5,5,5]} intensity={3}/>

      <Mitsuri/>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

    </Canvas>

  )

}