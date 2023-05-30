import { Canvas, useThree } from '@react-three/fiber'
import { Center, Text3D, OrbitControls } from '@react-three/drei'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import { Typography } from '@mui/material'

/*
//https://codesandbox.io/s/text3d-alignment-forked-7pmmiq?file=/src/App.js:1273-1740
//https://www.npmjs.com/package/@react-three/drei#text3d
//https://github.com/onion2k/r3f-by-example/tree/develop/examples/other

      <Center bottom right position={[-width / 2 + margin, height / 2 - margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/Delicious_Handrawn.json">
          Developer: Alberto Gandoy Florido
          <meshStandardMaterial color="green" />
        </Text3D>
      </Center>
      
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.8} bevelSize={0.04} font="/Delicious_Handrawn.json">
          @AlbertoGF98
          <meshBasicMaterial color="grey"/>
        </Text3D>
      </Center>
*/
function LetteringCanvasComponent() {
   const { auth } = useContext(AuthContext)

   const { token } = auth
   const { text, font, height, width } = token

   return (
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 10]} />
         <Center rotation={[0, 0, 0]}>
            <Text3D
               curveSegments={32}
               bevelEnabled
               bevelSize={0.04}
               bevelThickness={0.1}
               height={parseFloat(height)} //0.5
               lineHeight={0.5}
               letterSpacing={-0.06}
               size={parseFloat(width)} //1.5
               font={font !== '/Delicious_Handrawn.json' ? '/Delicious_Handrawn.json' : font}
            >
               {text}
               <meshNormalMaterial />
            </Text3D>
         </Center>
         <axesHelper
            scale={2}
            position={[0, 0, 0]}
            onUpdate={self => self.setColors('#ff2080', '#20ff80', '#2080ff')}
         />
         <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
         />
      </Canvas>
   )
}

export default LetteringCanvasComponent
