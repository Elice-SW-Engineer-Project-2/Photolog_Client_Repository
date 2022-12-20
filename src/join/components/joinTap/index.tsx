import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import DialogTest from '../../../Components/Commons/Dialog';
import * as S from './styled';

interface State {
  NORMAL: string; // 입력 전
  SUCCESS: string; //  성공
  STRERROR: string; // 길이 문법 오류
  EXISTERROR: string; // 중복오류
  ERROR: string;
}
const state: State = {
  NORMAL: 'NORMAL', // 입력 전
  SUCCESS: 'SUCCESS',
  STRERROR: 'STRERROR',
  EXISTERROR: 'EXISTERROR',
  ERROR: 'ERROR',
};
const JoinTap = () => {
  const navigate = useNavigate();
  const [nicknamestate, setNicknameState] = useState(state.NORMAL);
  const [emailstate, setEmailState] = useState(state.NORMAL);
  const [pwstate, setPwState] = useState(state.NORMAL);
  const [joinstate, setJoinState] = useState(state.NORMAL);

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setpw] = useState('');

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3232/users`)
      .then((result) => console.log(result));
  }, []);

  const IsExsit = (value: string, data: string) =>
    axios
      .get(`http://localhost:3232/users/`)
      .then((result) => result.data.find((item: any) => item[data] === value));

  const changeNickNameHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const nickNameInput = e.target.value;
    console.log(nickNameInput);
    if (nickNameInput.length < 2 || nickNameInput.length > 8) {
      setNicknameState(state.STRERROR);
    } else if (await IsExsit(nickNameInput, 'nickname')) {
      setNicknameState(state.EXISTERROR);
    } else {
      setNicknameState(state.SUCCESS);
      setNickname(nickNameInput);
    }
  };

  const validateEmail = (i: string) =>
    String(i)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  const validatePw = (i: string) =>
    String(i).match(/^(?=.*?[A-Z])(?=.*?[0-9]).{8,16}$/);

  const changeEmailHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    console.log(emailInput);
    if (!validateEmail(emailInput)) {
      setEmailState(state.STRERROR);
    } else if (await IsExsit(emailInput, 'email')) {
      setEmailState(state.EXISTERROR);
    } else {
      setEmailState(state.SUCCESS);
      setEmail(emailInput);
    }
  };
  const changePwHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwInput = e.target.value;
    console.log(pwInput);
    //  비밀번호 해시 암호화하는거 만들어야함
    if (!validatePw(pwInput)) {
      setPwState(state.STRERROR);
    } else {
      setPwState(state.SUCCESS);
      setpw(pwInput);
    }
  };

  //  회원가입 button
  const clickJoinHandler = async () => {
    if (
      nicknamestate === state.SUCCESS &&
      emailstate === state.SUCCESS &&
      pwstate === state.SUCCESS
    ) {
      const result = await axios.post(`http://localhost:3232/register`, {
        nickname,
        email,
        password: pw,
      });
      console.log('토큰', result.data.accessToken);
      console.log(result);
      setJoinState(state.SUCCESS);
      setFlag(true);
    } else {
      setJoinState(state.ERROR);
      setFlag(true);
    }
  };
  //  경고문구
  const warningNickname = () => {
    let warning = '';
    switch (nicknamestate) {
      case state.STRERROR:
        warning = `2자이상 8자 이하로 작성해주세요`;
        break;
      case state.EXISTERROR:
        warning = `이미 존재하는 닉네임이 있습니다`;
        break;
      default:
        break;
    }
    return warning;
  };

  const warningEmail = () => {
    let warning = '';
    switch (emailstate) {
      case state.STRERROR:
        warning = `올바른 이메일 형식을 작성해주세요`;
        break;
      case state.EXISTERROR:
        warning = `이미 존재하는 이메일이 있습니다!`;
        break;
      default:
        break;
    }
    return warning;
  };

  const warningPw = () => {
    let warning = '';
    switch (pwstate) {
      case state.STRERROR:
        warning = `대문자 포함 8자 이상 16자 이하로 작성해주세요`;
        break;
      default:
        break;
    }
    return warning;
  };

  const agreeFn = () => {
    console.log('확인');
    setFlag(false);
    if (joinstate === state.SUCCESS) navigate(`/`);
    return flag;
  };

  const disAgreeFn = () => {
    console.log('취소');
    setFlag(false);
    if (joinstate === state.SUCCESS) navigate(`/`);
    return flag;
  };
  const dialog = (): JSX.Element => {
    let title = '';
    let content = '';
    if (joinstate === state.SUCCESS) {
      [title, content] = [
        `회원가입 완료`,
        `회원가입이 정상적으로 이루어졌습니다`,
      ];
    } else {
      title = '회원가입 오류';
      if (nicknamestate !== state.SUCCESS) {
        content += `\n${warningNickname()}`;
      }
      if (emailstate !== state.SUCCESS) {
        content += `\n${warningEmail()}`;
      }
      if (pwstate !== state.SUCCESS) {
        content += `\n${warningPw()}`;
      }
    }
    return (
      <DialogTest
        openFlag={flag}
        title={title}
        content={content}
        agreeFn={agreeFn}
        disAgreeFn={disAgreeFn}
        sizeW="700px"
        sizeH="300px"
      />
    );
  };

  return (
    <>
      <S.Form>
        <div className="title">닉네임</div>
        <div>
          <input placeholder="닉네임" onChange={changeNickNameHandler} />
          <div>{warningNickname()}</div>
        </div>
      </S.Form>
      <S.Form>
        <div className="title">이메일</div>
        <div>
          <input placeholder="이메일" onChange={changeEmailHandler} />
          <div>{warningEmail()}</div>
        </div>
      </S.Form>
      <S.Form>
        <div className="title">비밀번호</div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            onChange={changePwHandler}
          />
          <div>{warningPw()}</div>
        </div>
      </S.Form>
      <S.Button onClick={clickJoinHandler}>회원가입</S.Button>
      {dialog()}
    </>
  );
};

export default JoinTap;
