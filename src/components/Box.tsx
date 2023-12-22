import { Vector3 } from '@react-three/fiber';
import { useState } from 'react';
interface Props {
  position: Vector3;
}
export default function Box(props: Props) {
  const [clicked, setClicked] = useState(false);
  function Clicked() {
    console.log('Clicked');
    setClicked(clicked ? false : true);
  }
  return (
    <mesh onClick={Clicked} scale={clicked ? 2 : 1} position={props.position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={clicked ? 'blue' : 'orange'} />
    </mesh>
  );
}
