import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";

const Home = () => {

/**
 * Particles
 */

  const particlesGeometry = new THREE.BufferGeometry();
  const count = 800;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

/**
 * Cursor
 */

  const cursorRef = useRef();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${clientX}px`;
      cursorRef.current.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


/**
 * Canvas
 */
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        margin: -10,
        padding: 0,
        position: "relative",
        cursor: "none",
      }}
    >
      <Canvas style={{ background: "#0f2027"}}>
        <Text
            fontSize={ 0.4 }
            font="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
            position={ [0, 1, 0] }
        >
            Hello, {"\n"}My Name Is Renee Saulnier. {"\n"}{"\n"}To Discover More About Me, {"\n"}Click On The Links Below!
        </Text>
        <Float speed={ 1.2 } >
            <Text
                fontSize={ 0.45 }
                font="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
                position={ [0, -2, -1.3] }
                rotation={ [-0.5, 0, 0]}
                color={'grey'}
                onClick={() => window.open('https://renee-saulnier.vercel.app', '_blank', 'noopener noreferrer')}
                onPointerOver={(e) => e.object.material.color.set('black')}
                onPointerOut={(e) => e.object.material.color.set('grey')}
            >CV
            </Text>
        </Float>
        <Float speed={ 1.2 } >
            <Text
                fontSize={ 0.45 }
                font="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
                position={ [2, -2, 1] }
                rotation={ [-0.5, 0, 0]}
                color={'grey'}
                onClick={() => window.open('https://renee-blog-1.vercel.app', '_blank', 'noopener noreferrer')}
                onPointerOver={(e) => e.object.material.color.set('black')}
                onPointerOut={(e) => e.object.material.color.set('grey')}
            >Blog
            </Text>
        </Float>
        <Float speed={ 1.2 } >
            <Text
                fontSize={ 0.35 }
                font="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
                position={ [-1.5, -1.8, 1] }
                rotation={ [-0.5, 0, 0]}
                color={'grey'}
                onClick={() => window.open('https://github.com/ReneeSaulnier', '_blank', 'noopener noreferrer')}
                onPointerOver={(e) => e.object.material.color.set('black')}
                onPointerOut={(e) => e.object.material.color.set('grey')}
            >GitHub
            </Text>
        </Float>
        <Float speed={ 1 } >
            <Text
                fontSize={ 0.45 }
                font="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
                position={ [-2.5, -1.3, -1] }
                rotation={ [-0.5, 0, 0]}
                color={'grey'}
                onClick={() => window.open('https://www.linkedin.com/in/renee-saulnier-34304122b/', '_blank', 'noopener noreferrer')}
                onPointerOver={(e) => e.object.material.color.set('black')}
                onPointerOut={(e) => e.object.material.color.set('grey')}
            >Linkedin
            </Text>
        </Float>
        <points>
            <OrbitControls enableZoom={ false } minPolarAngle={ 0.4 } maxPolarAngle={ 1.5 } minAzimuthAngle={ -Math.PI * 0.3 } maxAzimuthAngle={ Math.PI * 0.3 }  />
            <bufferGeometry attach="geometry" {...particlesGeometry} />
            <pointsMaterial
                attach="material"
                color="white"
                size={0.005}
                sizeAttenuation
                depthWrite={false}
                transparent={true}
            />
            
        </points>
      </Canvas>

      /**
      * This is the cursor
      **/
      <div
        ref={cursorRef}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "25px",
            height: "25px",
            borderRadius: "70%",
            backgroundColor: "white",
            pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Home;
