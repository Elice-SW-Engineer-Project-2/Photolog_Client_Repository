import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { useFetchData } from '../hooks/useGetData';
import { disableScroll, removeDisableScroll } from '../Utils';
import { ReactComponent as Logo } from '../assets/logo.svg';
import MapDemo from '../assets/mapdemo.gif';
import Demo from '../assets/ddemo.gif';
import { DialogTest } from '../../Join/Components/LoginDialog/index';
import { TOKEN } from '../../Join/Atoms';
import { URL } from '../../../axiosInstance';

const Intro = () => {
  const token = useRecoilState(TOKEN)[0];
  const [flag, setFlag] = useState(false);
  const disAgreeFn = () => {
    setFlag(false);
    return flag;
  };
  useEffect(() => {
    if (flag) {
      removeDisableScroll();
    } else {
      disableScroll();
    }
  }, [flag]);
  useEffect(() => {
    disableScroll();
    return removeDisableScroll;
  }, []);
  let isDataLack = false;
  const data = useFetchData(`${URL}/posts?quantity=7`);
  if (!data) isDataLack = true;
  if (data?.length < 7) isDataLack = true;
  const objectURL = data?.map((d: any) => d.images[0].imageUrl.url);
  // const objectURL = useGetData('https://picsum.photos/238/349', 7);
  const navigate = useNavigate();
  const motionVariants = {
    hover: {
      top: '-100px',
      scale: 3,
      transition: { duration: 0.5 },
    },
  };
  return (
    <>
      <style id="scroll-properties">
        {`::-webkit-scrollbar {
          display: none;
			  }`}
      </style>
      <S.Container className="Intro" fontFamily="Segoe UI">
        <S.Section backgroundcolor="#ffffff">
          <S.Header>
            <Logo
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/menu/maps');
              }}
            />
            {token ? (
              ''
            ) : (
              <div style={{ display: 'flex', gap: '10px' }}>
                <S.PrimaryButton
                  fontSize="20px"
                  onClick={() => {
                    setFlag(true);
                  }}
                >
                  ?????????
                </S.PrimaryButton>
                <S.TextButton
                  onClick={() => {
                    navigate('/join');
                  }}
                >
                  ????????????
                </S.TextButton>
              </div>
            )}
          </S.Header>
          <S.Body>
            <S.StyledH1 style={{ textAlign: 'center' }}>
              ??????????????? ??????
              <br />
              <p style={{ color: '#0076D3' }}>
                ????????? ?????? ???????????? ???????????????
              </p>
            </S.StyledH1>
          </S.Body>
          {isDataLack ? (
            ''
          ) : (
            <S.ImageList>
              {Array(7)
                .fill('')
                .map((_, idx) => {
                  let offset;
                  const key = idx;
                  if (Math.abs(idx - 3) % 3 === 0) offset = 0;
                  if (Math.abs(idx - 3) % 3 === 2) offset = 75;
                  if (Math.abs(idx - 3) % 3 === 1) offset = 75 + 65;
                  if (idx === 3) offset = 75 + 65 + 50;
                  return (
                    <motion.div
                      key={key}
                      variants={motionVariants}
                      style={{
                        position: 'relative',
                        top: `${offset}px`,
                      }}
                      animate={{
                        transform: 'translateY(-5px)',
                        transition: {
                          from: 'translateY(0px)',
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        },
                      }}
                      whileHover="hover"
                      onClick={(e) => {
                        if (data) {
                          navigate(`/post/${data[idx].id}`);
                        }
                      }}
                    >
                      <img
                        style={{
                          width: '238px',
                          height: '349.55px',
                          borderRadius: '20px',
                          cursor: 'pointer',
                        }}
                        key={key}
                        src={objectURL ? objectURL[idx] : ''}
                        alt=""
                      />
                    </motion.div>
                  );
                })}
            </S.ImageList>
          )}
          <div
            style={{
              width: '100%',
              height: '9vh',
              zIndex: '100',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '3vh',
                zIndex: '100',
                background:
                  'linear-gradient(0deg, #FFE696 0%, rgba(255, 255, 255, 0) 34.18%)',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '6vh',
                backgroundColor: '#FFE696',
                zIndex: '100',
              }}
            />
          </div>
        </S.Section>
        <S.Section2 backgroundcolor="#FFE696">
          <S.Body2>
            <S.StyledH1>
              <p style={{ color: '#C52424' }}>????????? ?????? ?????? ??????</p>
            </S.StyledH1>
            <pre
              style={{
                fontSize: '0.6em',
                color: '#C52424',
                width: 'fit-content',
                textAlign: 'center',
                marginBottom: '40px',
                lineHeight: '140%',
                cursor: 'default',
              }}
            >
              ????????? ?????? ????????? ???????????????? ?????? ?????? ?????? ????????? ??????
              <br />
              ???????????? ????????? ?????????.
            </pre>
            <S.NavigateButton
              backgroundcolor="#C52424"
              hoverbackgroundcolor="#A51313"
              onClick={() => {
                navigate('/menu/maps');
              }}
            >
              ??????
            </S.NavigateButton>
          </S.Body2>
          <div
            style={{
              width: '693.59px',
              height: '486.56px',
              background: '#fff',
              overflow: 'hidden',
            }}
          >
            <img
              style={{
                position: 'relative',
                left: '-165px',
                top: '-110px',
                scale: '0.66',
              }}
              src={MapDemo}
              alt="??????????????????"
            />
          </div>
        </S.Section2>
        <S.Section2 backgroundcolor="#AAE0E1">
          <div
            style={{
              width: '713.59px',
              height: '486.56px',
              background: '#F5F5F5',
              overflow: 'hidden',
            }}
          >
            <img
              style={{
                position: 'relative',
                left: '-176px',
                top: '-117px',
                scale: '0.67',
              }}
              src={Demo}
              alt="?????????????????????"
            />
          </div>
          <S.Body2>
            <S.StyledH1>
              <p style={{ color: '#0D61AE' }}>???????????? ????????? ???????????????</p>
            </S.StyledH1>
            <pre
              style={{
                fontSize: '0.6em',
                color: '#0D61AE',
                width: 'fit-content',
                textAlign: 'center',
                lineHeight: '140%',
                cursor: 'default',
              }}
            >
              ????????? ?????? ??? ??? ????????? ???????????? ?????????
              <br />
              ???????????????. ?????? ?????? ??????????????? ????????????
              <br />
              ???????????? ?????? ????????? ?????? ??? ??? ?????????.
            </pre>
            <S.NavigateButton
              backgroundcolor="#0D61AE"
              hoverbackgroundcolor="#044F94"
              onClick={() => {
                navigate('/menu/photolists');
              }}
            >
              ??????
            </S.NavigateButton>
          </S.Body2>
        </S.Section2>
        {/* <S.Section2 backgroundcolor="#FFFFFF">
          <CubeContainer />
        </S.Section2> */}
      </S.Container>
      <DialogTest
        openFlag={flag}
        title="test"
        content="test"
        agreeFn={() => {}}
        disAgreeFn={disAgreeFn}
        sizeW="600px"
        sizeH="800px"
      />
    </>
  );
};

export default Intro;
