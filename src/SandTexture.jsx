/* eslint-disable react/no-unknown-property */
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Cube = ({ color, position, size }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useFrame((state, delta) => {
    // console.log(state.viewport)
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.rotation.z += Math.sin(state.clock.elapsedTime) * 0.09;
  });
  return (
    <mesh
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(event) => setHovered(false)}
      scale={1.2}
      ref={ref}
      position={position}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </mesh>
  );
};
const Sphere = ({ color, position, size }) => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const ref = useRef()
const speed = hovered ? 0.9 : 0.4
  useFrame((state, delta) =>{
      // ref.current.rotation.x += 0.1;
    //   ref.current.rotation.y += delta * 2.0;
      // ref.current.rotation.x += delta * speed;
    //   ref.current.rotation.z +=  speed;
  })
  return (
    
    <mesh
    onClick={(e) => setActive(!active)}
    onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
    // onPointerEnter={(e) => (e.stopPropagation(), setActive(true))}
    onPointerOut={(event) => setHovered(false)}
    scale={3 }
    ref={ref}
    visible userData={{ test: "hello" }} position={position}>
      <sphereGeometry  args={size} />
      <MeshWobbleMaterial wireframe speed={0.02}/>
      {/* <meshStandardMaterial wireframe color={hovered ? "orange" : color } /> */}
    </mesh>
  );
};
const Torus = ({ color, position, size }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SandTexture = () => {
  return (
    <div>
      <Canvas className="h-[500px]">
        <directionalLight position={[2, 0, 0]} intensity={0.9} />
        <ambientLight intensity={1} />
        {/* <group position={[1, -1, 0]}> */}
        <Sphere  position={[1, 0, 0]} size={[1, 25, 25]} color={"hotpink"} />
        {/* <Torus color={"red"} size={[0.9, 0.1, 30, 30]} position={[1, 0, 0]} /> */}
        {/* <Cube color={"green"} position={[1, 0, 0]} size={[1, 1, 1]} />
      <Cube color={"orange"} position={[-1, 0, 0]} size={[1, 1, 1]} />
      <Cube color={"blue"} position={[1, 2, 0]} size={[1, 1, 1]} />
      <Cube color={"pink"} position={[-1, 2, 0]} size={[1, 1, 1]} />
       */}
        {/* <mesh 
      
    scale={1.2}  position={[1,1,1]}>
      <sphereGeometry args={[15,16,18]} />
      <meshStandardMaterial color= 'hotpink'  /> */}
        {/* </mesh> */}
        {/* </group> */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SandTexture;
