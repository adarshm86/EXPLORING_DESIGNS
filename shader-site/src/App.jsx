import Navbar from "./components/Navbar"
import MitsuriModel from "./components/MitsuriModel"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import petal from "./assets/FLOWER.png"

function App() {
  return (
    <div>
      {/* Embedded CSS for smooth scrolling and the Glassmorphism About Card 
      */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          overflow-x: hidden;
        }

        .about-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 3rem;
          max-width: 800px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          color: #d1477a;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
        }

        .glass-card h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.7);
        }

        .glass-card p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #555;
          font-weight: 600;
        }
      `}</style>

      {/* Navbar */}
      <Navbar />

      {/* Background Gradient */}
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

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4vw"
        }}
      >
        {/* Left Text */}
        <div>
          <h1
            style={{
              fontSize: "8rem",
              fontWeight: "800",
              margin: 0,
              lineHeight: "0.8",
              letterSpacing: "1px",
              color: "#fff" // Added white color so it pops better!
            }}
          >
            MITSURI KANROJI
          </h1>

          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "5px",
              marginBottom: "5px",
              color: "#9000008d",
              fontWeight: "bold"
            }}
          >
            Love Hashira
          </p>
          <img
            src={petal}
            alt="sakura petal"
            style={{
              width: "150px",
              marginTop: "10px",
              opacity: 0.9
            }}
          />
        </div>

        {/* Right 3D Model */}
        <div
          style={{
            width: "90vw",
            height: "100vh"
          }}
        >
          <MitsuriModel />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <div className="glass-card">
          <h2>The Love Hashira</h2>
          <p>
            <strong>Mitsuri Kanroji</strong> is a major supporting character and the Love Hashira of the Demon Slayer Corps. 
            Despite her gentle and emotional personality, she possesses immense, superhuman physical strength and a unique, whip-like Nichirin Sword.
          </p>
          <p>
            Her breathing style, <em>Love Breathing</em>, was self-created by altering Flame Breathing to suit her incredible flexibility and muscle density. She is known for her iconic pink and green hair—rumored to be the result of eating too much sakura mochi!
          </p>
        </div>
      </div>

    </div>
  )
}

export default App