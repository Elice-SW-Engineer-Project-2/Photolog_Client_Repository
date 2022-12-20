import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { styled as styledMui } from '@mui/material/styles';
import { Button as ButtonMui } from '@mui/material';

interface CubeProps {
  objectURL?: string[];
  handler?: any;
  setIndex?: any;
}

interface INavigateButton {
  backgroundColor: string;
  hoverBackgroundColor: string;
}

const NavigateButton = styledMui(ButtonMui)<INavigateButton>`
  width:fit-content;
  height:fit-content;
  padding: 12px 47px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size:24px;
  font-family: 'Segoe UI';
  line-height: 32px;
  color: #FFFFFF;
  background-color: ${(props) => props.backgroundColor};
  :hover{
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;

function wrapPromise(promise: any) {
  let status = 'pending';
  let result: any;
  const suspender = promise.then(
    (r: any) => {
      status = 'success';
      result = r;
    },
    (e: any) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
      return undefined;
    },
  };
}
const fetcher = async (url: string) => {
  const promiseList: any = [];
  for (let i = 0; i < 6; i += 1) {
    promiseList.push(
      fetch(url)
        .then((res) => res.blob())
        .then(URL.createObjectURL),
    );
  }
  const res = await Promise.all(promiseList);
  return res;
};
const useGetData = (url: string) => {
  const [resource, setResource] = useState(null as any);
  useEffect(() => {
    const res = wrapPromise(fetcher(url));
    setResource(res);
  }, [url]);
  return resource?.read();
};

const Cube = ({ objectURL, handler, setIndex }: CubeProps) => {
  const cube = useRef<THREE.Mesh>();
  const [isRotating, setIsRotationg] = useState(true);
  useFrame((state) => {
    if (isRotating) {
      cube.current!.rotation.x += 0.01;
      cube.current!.rotation.y += 0.01;
    }
  });
  let timeout: NodeJS.Timeout;
  const loader = new THREE.TextureLoader();
  const texture0 = loader.load(objectURL![0]);
  const texture1 = loader.load(objectURL![1]);
  const texture2 = loader.load(objectURL![2]);
  const texture3 = loader.load(objectURL![3]);
  const texture4 = loader.load(objectURL![4]);
  const texture5 = loader.load(objectURL![5]);
  return (
    <mesh ref={cube as any}>
      <Box
        onPointerOver={(event) => {
          setIsRotationg((c) => !c);
        }}
        onClick={(event) => {
          const index = event.face?.materialIndex;
          // const popupContainer = document.querySelector('.popup');
          // const popup = document.createElement('img');
          // if (index !== undefined) popup.setAttribute('src', objectURL![index]);
          // popupContainer?.replaceChildren(popup);
          handler(true);
          setIndex(index);
        }}
        onPointerLeave={() => setIsRotationg((c) => !c)}
        args={[1, 1, 1]}
      >
        <meshBasicMaterial attach="material-0" map={texture0} />
        <meshBasicMaterial attach="material-1" map={texture1} />
        <meshBasicMaterial attach="material-2" map={texture2} />
        <meshBasicMaterial attach="material-3" map={texture3} />
        <meshBasicMaterial attach="material-4" map={texture4} />
        <meshBasicMaterial attach="material-5" map={texture5} />
      </Box>
    </mesh>
  );
};

const Scene = ({ objectURL, handler, setIndex }: CubeProps) => (
  <>
    <pointLight intensity={0.93} position={[1, 1, 5]} />
    <Cube objectURL={objectURL} handler={handler} setIndex={setIndex} />
  </>
);

const CubeContainer: React.FC = () => {
  const objectURL = useGetData('https://picsum.photos/200/200');
  const [isPopupOn, setIsPopupOn] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <Canvas
        camera={{
          near: 0.1,
          far: 100,
          zoom: 2,
        }}
      >
        <OrbitControls enableZoom={false} />
        <Scene
          objectURL={objectURL}
          handler={setIsPopupOn}
          setIndex={setIndex}
        />
      </Canvas>
      {isPopupOn && (
        <div
          className="popup"
          style={{
            position: 'absolute',
            left: '70vw',
            width: 'fit-content',
            height: 'fit-content',
            background: '#87cda1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '1',
          }}
        >
          <img
            style={{ opacity: '1' }}
            src={objectURL ? objectURL[index] : ''}
            alt=""
          />
          <NavigateButton
            backgroundColor="#07b8b8"
            hoverBackgroundColor="#00a8a7"
          >
            게시글보러가기
          </NavigateButton>
        </div>
      )}
    </>
  );
};

Cube.defaultProps = {
  objectURL: '',
  handler: () => {},
  setIndex: () => {},
};
Scene.defaultProps = {
  objectURL: '',
  handler: () => {},
  setIndex: () => {},
};
export default CubeContainer;
