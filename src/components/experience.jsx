import {Text, Html, ContactShadows, PresentationControls, Environment, useGLTF } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    // const table = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table/model.gltf')
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    // const reactSymbol = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf')
    const duck = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf')
    // const cactus = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cactus/model.gltf')
    
    
    // reactSymbol.scene.traverse((child) => {
    //     if (child.isMesh) {
    //         child.material = new THREE.MeshStandardMaterial({ color: '#61dbfb' })
    //     }
    // });
    
    return <>

        <Environment preset="city" />
        <color args={ ['#303030'] } attach="background" />
        
        <PresentationControls 
            global 
            rotation={ [0.13, 0.1, 0] }
            polar={ [-0.4, 0] }
            azimuth={ [-1, 0] }
            config={ {mass: 2, tension: 400} }
        >
            <group position={ [-0.7, 0, 0.9] } scale={ [1.5, 1.5, 1.5] }>
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 10 }
                    color={ '#ff6900' }
                    rotation={ [0.1, Math.PI, 0] }
                    position={ [0, 1, -1.1] }
                />
                <primitive 
                    object={ computer.scene } 
                    scale={ [0.4, 0.4, 0.4] } 
                    position={ [0, -0.035, 0] }
                >
                    <Html 
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://projectcv.vercel.app/" title="Resume" />
                    </Html>
                </primitive>
                {/* <primitive 
                    object={ table.scene }
                    position-y={ -1.2 } 
                    scale={ [0.8, 0.8, 0.8] } 
                /> */}
                <primitive 
                    object={ phone.scene } 
                    position={ [-0.9, 0.15, 0.2] } 
                    rotation={ [-1.55, 0, 0] } 
                    scale={ [0.15, 0.15, 0.15] } 
                />
                <primitive 
                    object={ duck.scene }
                    position={ [1, 0.14, -0.2] } 
                    rotation={ [0, -0.3, 0]} 
                    scale={ [0.17, 0.17, 0.17] }
                /> 
                {/* <primitive 
                    object={ cactus.scene } 
                    position={ [-1.2, 0.15, -0.25] } 
                    rotation={ [0, 0.3, 0]} 
                    scale={ [0.13, 0.13, 0.13] } 
                /> */}
                
                {/* <Float>
                    <primitive 
                        object={ reactSymbol.scene } 
                        position={ [0, 0.9, -1] } 
                        scale={ [0.25, 0.25, 0.25]}
                    />
                </Float> */}
                    <Text 
                        font="./JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf" 
                        fontSize={ 0.18 }
                        position={ [ 1.2, 0.21, 0.1 ] }
                        rotation-y={ - 0.5 }
                        maxWidth={ 2 }
                        onClick={() => window.open('https://renee-saulnier.vercel.app', '_blank', 'noopener noreferrer')}
                    >
                    CV</Text>
                <mesh rotation={[1.6, -3.15, 0]} position={[0, -0.999, 0]} scale={[2.2, 0.9, 1]}>
                    <planeGeometry args={ [1.5, 1.5] }/>
                    <meshStandardMaterial color={ 'dimgrey' } />
                </mesh>

            </group>
        </PresentationControls>

        <ContactShadows position-y={-1.2} opacity={0.5} width={0.5} height={0.5} blur={1} far={1.2} />
    </>
}