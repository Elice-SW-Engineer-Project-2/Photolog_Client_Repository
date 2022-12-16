import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';
import SampleImage from './sample.png';

interface IButton {
  fontSize: string;
}
interface IContainer {
  fontFamily: string;
}
interface ISection {
  backgroundColor: string;
}
const Button = styled.button<IButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  background: #07b8b8;
  border-radius: 6px;
  border: 0px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  line-height: 140%;
  color: #ffffff;
  cursor: pointer;
`;
const Container = styled.div<IContainer>`
  height: 500vh;
  font-size: calc(10px + 3vmin);
  background-color: #fff;
  font-family: ${(props) => props.fontFamily};
`;
const Section = styled.div<ISection>`
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100%;
`;
const ImageList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 30vh;
`;
const Row = styled.div`
  position: relative;
  z-index: 0;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30vh;
  width: 100%;
`;
const StyledH1 = styled.h1`
  font-size: 1.2em;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: center;
  color: #2a2a2a;
`;
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function handleTouchEvent(e: Event) {
  e.preventDefault();
  console.log(e);
}
let isAnimating = false;
function handleWheelEvent(e: any) {
  e.preventDefault();
  if (e.deltaY > 0 && !isAnimating) {
    isAnimating = true;
    if (window.visualViewport)
      window.scrollBy({
        top: window.visualViewport.height,
        behavior: 'smooth',
      });
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }
  if (e.deltaY < 0 && !isAnimating) {
    isAnimating = true;
    if (window.visualViewport)
      window.scrollBy({
        top: -window.visualViewport.height,
        behavior: 'smooth',
      });
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }
}

function preventDefaultForScrollKeys(e: any): void | boolean {
  if (keys[e.keyCode as 37]) {
    e.preventDefault();
    return false;
  }
  return undefined;
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null as any,
    Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
      },
    }),
  );
} catch (e) {
  // empty
}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', handleWheelEvent, false); // older FF
  window.addEventListener(wheelEvent, handleWheelEvent, wheelOpt); // modern desktop
  // window.addEventListener('touchmove', handleTouchEvent, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
const debounceResizeEvent = (cb: any, delay: number) => {
  let timeout: any;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(args);
    }, delay);
  };
};
const Intro = () => {
  disableScroll();
  window.onresize = debounceResizeEvent(
    (e: React.UIEvent<Window, 'resize'>) => {
      if (window.visualViewport) {
        const vh = window.visualViewport.height;
        if (window.scrollY % vh === 0) return;
        if (window.scrollY < vh) window.scrollTo(0, vh);
        else if (window.scrollY < vh * 2) window.scrollTo(0, vh * 2);
        else if (window.scrollY < vh * 3) window.scrollTo(0, vh * 3);
        else if (window.scrollY < vh * 4) window.scrollTo(0, vh * 4);
        else if (window.scrollY < vh * 5) window.scrollTo(0, vh * 5);
      }
    },
    500,
  );
  return (
    <>
      <style id="scroll-properties">
        {`::-webkit-scrollbar {
          display: none;
			  }`}
      </style>
      <Container className="Intro" fontFamily="Segoe UI">
        <Section backgroundColor="#ffffff">
          <Header>
            <Link to="/home">
              <Logo style={{ marginLeft: '4.98vw' }} />
            </Link>
            <Button
              fontSize="0.5em"
              style={{ textAlign: 'center', marginLeft: '72.5vw' }}
              onClick={alert}
            >
              로그인
            </Button>
            <Link
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '0.5em',
                lineHeight: '49px',
                color: '#2A2A2A',
                width: '104px',
                height: '47px',
                marginRight: '4.98vw',
                textAlign: 'center',
              }}
              to="/home"
            >
              가입하기
            </Link>
          </Header>
          <Body>
            <StyledH1 style={{ textAlign: 'center' }}>
              포토로그와 함께
              <br />
              <p style={{ color: '#0076D3' }}>
                마음에 드는 사진들을 찾아보세요
              </p>
            </StyledH1>
          </Body>
          <ImageList>
            {Array(7)
              .fill('')
              .map((_, idx) => {
                let offset;
                if (Math.abs(idx - 3) % 3 === 0) offset = 0;
                if (Math.abs(idx - 3) % 3 === 2) offset = 75;
                if (Math.abs(idx - 3) % 3 === 1) offset = 75 + 65;
                if (idx === 3) offset = 75 + 65 + 50;
                return (
                  <img
                    style={{
                      width: '238px',
                      height: '349.55px',
                      transform: `translateY(${offset}px)`,
                    }}
                    src={SampleImage}
                    alt=""
                  />
                );
              })}
          </ImageList>
        </Section>
        <Section backgroundColor="#FFFD92">
          <h1>지도로 주변 명소 검색</h1>
          <button type="button">dddd</button>
        </Section>
        <Section backgroundColor="#DAFFF6">ddd</Section>
        <Section backgroundColor="#FFE2EB">ddd</Section>
      </Container>
    </>
  );
};

export default Intro;
