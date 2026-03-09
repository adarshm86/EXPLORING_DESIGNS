import Navbar from "./components/Navbar"
import MitsuriModel from "./components/MitsuriModel"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"

function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Background Gradient (UNCHANGED) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "110vh",
          zIndex: -1
        }}
      >
        <ShaderGradientCanvas>
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#fff0f9"
            color2="#d8c1db"
            color3="#90d1e1"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="waterPlane"
            uAmplitude={1}
            uDensity={2.2}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={4.2}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
        
      {/* Mitsuri Hero Section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "90vw",
            height: "100vh"
          }}
        >
          <MitsuriModel />
        </div>
      </div>

    </div>
  )
}

export default App