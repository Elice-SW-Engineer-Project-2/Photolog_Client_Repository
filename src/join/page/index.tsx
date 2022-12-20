import { useState } from 'react';
import * as S from './styled';
import LoginTap from '../components/loginTap';
import JoinTap from '../components/joinTap';
import FindPwTap from '../components/findPwTap';

interface State {
  LOGIN: string;
  JOIN: string;
  FINDPW: string;
}
const state: State = {
  LOGIN: 'LOGIN',
  JOIN: 'JOIN',
  FINDPW: 'FINDPW',
};

interface StateTap {
  [index: string]: JSX.Element;
  LOGIN: JSX.Element;
  JOIN: JSX.Element;
  FINDPW: JSX.Element;
}

const stateTap: StateTap = {
  LOGIN: <LoginTap />,
  JOIN: <JoinTap />,
  FINDPW: <FindPwTap />,
};
const Join = () => {
  const [mode, setMode] = useState<string>(state.JOIN);
  const clickHandler = (evt: any) => {
    setMode(evt.target.className);
  };
  return (
    <S.Container>
      <br />
      <S.Tap mode={mode}>
        <span
          onClick={clickHandler}
          className={state.LOGIN}
          role="presentation"
        >
          로그인
        </span>
        |
        <span onClick={clickHandler} className={state.JOIN} role="presentation">
          회원가입
        </span>
        |
        <span
          onClick={clickHandler}
          className={state.FINDPW}
          role="presentation"
        >
          비밀번호 찾기
        </span>
      </S.Tap>
      {stateTap[mode]}
    </S.Container>
  );
};

export default Join;