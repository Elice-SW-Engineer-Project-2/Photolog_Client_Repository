import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { useFetchData, useGetData } from '../../hooks/useGetData';
import { URL } from '../../../../axiosInstance';

interface ICubeProps {
  objectURL?: string[];
  handler?: any;
  setIndex?: any;
}

const Cube = ({ objectURL, handler, setIndex }: ICubeProps) => {
  const cube = useRef<THREE.Mesh>();
  const [isRotating, setIsRotationg] = useState<boolean>(true);
  useFrame((state) => {
    if (isRotating) {
      cube.current!.rotation.x += 0.01;
      cube.current!.rotation.y += 0.01;
    }
  });
  let timeout: NodeJS.Timeout;
  THREE.ImageUtils.crossOrigin = 'Anonymous';
  const loader = new THREE.TextureLoader();
  loader.crossOrigin = 'Anonymous';
  const texture0 = loader.load(`${objectURL![0]}?not-from-cache-please`);
  const texture1 = loader.load(`${objectURL![1]}?not-from-cache-please`);
  const texture2 = loader.load(`${objectURL![2]}?not-from-cache-please`);
  const texture3 = loader.load(`${objectURL![3]}?not-from-cache-please`);
  const texture4 = loader.load(`${objectURL![4]}?not-from-cache-please`);
  const texture5 = loader.load(`${objectURL![5]}?not-from-cache-please`);
  return (
    <mesh ref={cube as any}>
      <Box
        onPointerOver={(event) => {
          setIsRotationg((c) => !c);
        }}
        onClick={(event) => {
          const index = event.face?.materialIndex;
          handler(true);
          setIndex(index);
        }}
        onPointerLeave={() => {
          setIsRotationg((c) => !c);
        }}
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

const Scene = ({ objectURL, handler, setIndex }: ICubeProps) => (
  <>
    <pointLight intensity={0.93} position={[1, 1, 5]} />
    <Cube objectURL={objectURL} handler={handler} setIndex={setIndex} />
  </>
);

const CubeContainer: React.FC = () => {
  const data0 = useFetchData(`${URL}/posts/223`);
  const data1 = useFetchData(`${URL}/posts/218`);
  const data2 = useFetchData(`${URL}/posts/222`);
  let post: any;
  let objectURL;
  if (data1 && data0 && data2) {
    post = [data0, data1, data2, data0, data1, data2];
    objectURL = post?.map((d: any) => d.images[0].imageUrl.url);
  }
  const [isPopupOn, setIsPopupOn] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
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
          onMouseLeave={() => {
            setIsPopupOn(false);
          }}
          style={{
            position: 'absolute',
            left: '66vw',
            width: 'fit-content',
            height: 'fit-content',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '12px',
            padding: '3vmin',
            gap: '3vmin',
            boxShadow: 'rgb(0 0 0 / 10%) -3px 7px 12px',
          }}
        >
          <img
            style={{ borderRadius: '0.8vmin', width: '21vmin' }}
            src={objectURL ? objectURL[index] : ''}
            alt=""
          />
          <div
            style={{
              width: 'fit-content',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3vmin',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2vh',
              }}
            >
              <p
                style={{
                  fontSize: 'calc(3.2px + 1.6vmin)',
                  width: '9vw',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {post ? post[index].title : '????????? ????????????.'}
              </p>
              <S.StyledP lineClamp="3">
                {post ? post[index].content : '????????? ????????????.'}
              </S.StyledP>
              <p
                style={{
                  fontSize: 'calc(2.1px + 1.1vmin)',
                  width: '9vw',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {post ? post[index].user.profiles.nickname : ''}
              </p>
            </div>
            <S.NavigateButton
              backgroundcolor="#07b8b8"
              hoverbackgroundcolor="#00a8a7"
              onClick={() => {
                if (index === 0 || index === 3) navigate(`/post/231`);
                if (index === 1 || index === 4) navigate(`/post/231`);
                if (index === 2 || index === 5) navigate(`/post/231`);
              }}
            >
              ????????? ????????????
            </S.NavigateButton>
          </div>
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
