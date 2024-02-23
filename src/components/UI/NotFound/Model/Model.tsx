import {
  useGLTF,
  Float,
  Text,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import React, { useMemo, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGetUserAgent } from "@/helpers/useGetUserAgent";

export default function Model() {
  const { viewport, gl, camera, size } = useThree();
  const { nodes } = useGLTF("/medias/shards.glb");
  const renderTarget = useRef<any>();
  const getUserAgent = useGetUserAgent();

  useEffect(() => {
    if (
      !renderTarget.current ||
      size.width !== renderTarget.current.width ||
      size.height !== renderTarget.current.height
    ) {
      renderTarget.current?.dispose();
      renderTarget.current = new THREE.WebGLRenderTarget(
        size.width,
        size.height
      );
    }
    return () => renderTarget.current?.dispose();
  }, [size]);

  const secondScene = useMemo(() => {
    const scene = new THREE.Scene();
    nodes.Scene.children.forEach((mesh) => {
      const clonedMesh = mesh.clone();
      scene.add(clonedMesh);
    });
    return scene;
  }, [nodes]);

  useEffect(() => {
    if (renderTarget.current) {
      gl.setRenderTarget(renderTarget.current);
      gl.render(secondScene, camera);
      gl.setRenderTarget(null);
    }
  }, [gl, camera, secondScene]);

  function Font() {
    const textOption: any = {
      color: "#fff",
      anchorX: "center",
      anchorY: "middle",
    };

    return (
      <group>
        <Text position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
          404
        </Text>

        <Text position={[0, -0.2, -0.1]} fontSize={0.03} {...textOption}>
          Страница не найдена
        </Text>
      </group>
    );
  }
  console.log(getUserAgent);
  return (
    <>
      {getUserAgent === "safari" ? (
        <group scale={viewport.width / 1.5}>
          {nodes.Scene.children.slice(3, 10).map((mesh, i) => (
            <Mesh data={mesh} key={i} />
          ))}
          <Font />
        </group>
      ) : (
        <group scale={viewport.width / 1.5}>
          {nodes.Scene.children.slice(0, 12).map((mesh, i) => (
            <Mesh data={mesh} key={i} />
          ))}
          <Font />
        </group>
      )}
    </>
  );
}

function Mesh({ data }: any) {
  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          thickness={0.28}
          ior={1.8}
          chromaticAberration={0.75}
          backsideResolution={100}
          resolution={300}
        />
      </mesh>
    </Float>
  );
}
