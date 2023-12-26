/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 cup.glb -t 
*/

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useToast } from '~/components/ui/use-toast';
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
  };
  materials: {};
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;
export default function Model(props: { color: string }) {
  const { nodes, materials } = useGLTF('/models/cup.glb') as GLTFResult;
  const { toast } = useToast();
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[5, 2, -2]}
        scale={0.3}
        onClick={() => {
          toast({
            description: 'Clicked!',
            duration: 500,
          });
        }}
      >
        <meshPhysicalMaterial color={props.color} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/cup.glb');
