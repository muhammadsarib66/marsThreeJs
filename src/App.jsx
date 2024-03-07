// import Earth from '/public/Earth';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Modal = (props) => {
  const { scene } = useGLTF("/mars.glb");
  return <primitive object={scene} scale={1}  {...props} />;
};

function App() {
  return (
    <div 
    
    >
    <Canvas
      drp={[1, 2]}
      camera={{ fov: 45 }}
       className=" h-['100vh']"
      style={{ position: "absolute"  }}
      
    >
      <color attach="background"
      args={['#000000']} 
      
       />
      <PresentationControls
        speed={5}
        global
        zoom={20}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"night"}>
          <Modal  />
        <OrbitControls minZoom={0.2} maxZoom={0.3} enableRotate={false}/>
        </Stage>
      </PresentationControls>
    </Canvas>
    </div>
 
  );


}

export default App;
