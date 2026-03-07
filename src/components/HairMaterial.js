import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"

const HairMaterial = shaderMaterial(
  {
    color1: new THREE.Color("#ff8fcf"), // pink
    color2: new THREE.Color("#9eff8a")  // green
  },

  // vertex shader
  `
  varying float vY;

  void main() {
    vY = position.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
  `,

  // fragment shader
  `
  uniform vec3 color1;
  uniform vec3 color2;
  varying float vY;

  void main() {

    float mixValue = smoothstep(-0.5, 0.5, vY);

    vec3 color = mix(color2, color1, mixValue);

    gl_FragColor = vec4(color,1.0);
  }
  `
)

extend({ HairMaterial })

export default HairMaterial