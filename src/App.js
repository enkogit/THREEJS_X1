import './App.scss';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from "three";
import { Head } from './components/head';
import { Landing } from './components/landing';
import { Universe } from './components/universe';
import { Model } from './models/Scene';
import { TokenBSC } from './components/token_bsc';
import { TokenETH } from './components/token_eth';
import { Xtronaut } from './components/xtronaut';
import { Footer } from './components/footer';
import { Roadmap } from './components/roadmap';
import earthTextureURL from './assets/2k_earth_daymap.jpg';
import earthCloudMapURL from './assets/earth-clouds.png';
import earthBumpMapURL from './assets/2k_earth_bump.jpg';
import moonTextureURL from './assets/2k_moon.jpg';

function OrbitingSphere({ radius, position, speed }) {
  const sphereRef = useRef();
  const orbitRef = useRef();
  const texture = new TextureLoader().load(moonTextureURL);

  useFrame(({ clock }) => {
    if (sphereRef.current && orbitRef.current) {
      sphereRef.current.rotation.y += 0.01;
      const elapsedTime = clock.getElapsedTime();
      orbitRef.current.position.set(
        Math.cos(elapsedTime * speed) * radius,
        0,
        Math.sin(elapsedTime * speed) * radius
      );
    }
  });

  return (
    <group ref={orbitRef}>
      <Sphere ref={sphereRef} args={[0.1, 32, 32]} position={position}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </group>
  );
}

function SpinningEarth() {
  const earthRef = useRef();
  const cloudRef = useRef();
  const texture = new TextureLoader().load(earthTextureURL);
  const bumpMap = new TextureLoader().load(earthBumpMapURL);
  const cloudMap = new TextureLoader().load(earthCloudMapURL);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y -= 0.005;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y -= 0.003; // You can adjust the speed of the cloud rotation
    }
  });

  return (
    <>
      <Sphere ref={earthRef} args={[2, 32, 32]}>
        <meshStandardMaterial map={texture} bumpMap={bumpMap} bumpScale={0.05} />
      </Sphere>
      <Sphere ref={cloudRef} args={[2.01, 32, 32]}>
        <meshStandardMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Sphere>
    </>
  );
}

const Loading = () => {
  return(
        <Html center>
          <p className="bottom-space-md" />
          <div className='loader'>
            <h3 style={{'fontSize':'14px'}}>Loading...🤖
            </h3>
            <div className="planet"></div>
          </div>
      </Html>
  );
};

function App() {
  return (
    <div className="screen">
      <div className='main'>
          <Head />
          <Landing />
          <TokenETH />
          <Xtronaut />
          <TokenBSC />
          <Roadmap />
          <Footer />
      </div>
      <div className='canvas dark'>
        <Canvas style={{ background: 'black' }} camera={{ position: [0, 0, 10], fov: 50 }}>
        <Universe />
          <Suspense fallback={<Loading />}>
            <SpinningEarth />
            <mesh position={[0, -3, 0]} scale={0.015}>
                  <Model />
            </mesh> 
            <OrbitingSphere radius={7} position={[0, 0, 0]} speed={0.5} />
            <ambientLight intensity={0.075} />
          </Suspense>
        </Canvas>
      </div>

    </div>
    
  );
}

export default App;
