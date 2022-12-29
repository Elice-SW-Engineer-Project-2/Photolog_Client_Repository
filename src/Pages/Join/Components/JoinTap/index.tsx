import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import FormControl from '@mui/material/FormControl';
import { client } from '../../../../axiosInstance';
import * as S from './styled';
import {
  validateEmail,
  validatePw,
  warningNickname,
  warningEmail,
  warningPw,
  state,
  IsJoinDialog,
} from '../../Utils';
import { MODE, TOKEN } from '../../Atoms';
import HelperText from '../HelperText';

const enterKey = (e: any) => {
  if (e.keyCode === 13 || e.code === 'Enter' || e.key === 'Enter') {
    const loginButton: HTMLButtonElement | null =
      document.querySelector('.join-button');
    loginButton?.click();
  }
};

const JoinTap = () => {
  const [token, setToken] = useRecoilState(TOKEN);
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState(MODE);
  const [nicknamestate, setNicknameState] = useState<string>(state.NORMAL);
  const [emailstate, setEmailState] = useState<string>(state.NORMAL);
  const [pwstate, setPwState] = useState<string>(state.NORMAL);
  const [joinstate, setJoinState] = useState<string>(state.NORMAL);

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pw, setpw] = useState<string>('');

  const [flag, setFlag] = useState<boolean>(false);

  const changeNickNameHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const nickNameInput = e.target.value;
    if (nickNameInput.length < 2 || nickNameInput.length > 8) {
      setNicknameState(state.STRERROR);
    } else {
      setNicknameState(state.SUCCESS);
    }
    setNickname(nickNameInput);
    if (!nickNameInput) setNicknameState(state.NORMAL);
  };

  const changeEmailHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    if (!validateEmail(emailInput)) {
      setEmailState(state.STRERROR);
    } else {
      setEmailState(state.SUCCESS);
    }
    setEmail(emailInput);
    if (!emailInput) setEmailState(state.NORMAL);
  };
  const changePwHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwInput = e.target.value;
    if (!validatePw(pwInput)) {
      setPwState(state.STRERROR);
    } else {
      setPwState(state.SUCCESS);
    }
    setpw(pwInput);
    if (!pwInput) setPwState(state.NORMAL);
  };

  //  회원가입 button
  const clickJoinHandler = async () => {
    if (
      !(
        nicknamestate === state.SUCCESS &&
        emailstate === state.SUCCESS &&
        pwstate === state.SUCCESS
      )
    ) {
      return;
    }
    try {
      const result = await client.post(`/users`, {
        nickname,
        email,
        password: pw,
      });
      const loginresult = await client.post(`/auth/login`, {
        email,
        password: pw,
      });
      setToken(loginresult.data.data);
      setJoinState(state.SUCCESS);
      setFlag(true);
    } catch (err: any) {
      setJoinState(state.ERROR);
      setErrorMessage(err.response.data.message);
      setFlag(true);
    }
  };

  const agreeFn = async () => {
    setFlag(false);
    if (joinstate === state.SUCCESS) navigate('/menu/maps');

    return flag;
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '45vh',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '440px',
          justifyContent: 'center',
        }}
      >
        <FormControl
          sx={{
            width: '42ch',
            height: '100px',
          }}
          style={{ marginTop: '10px' }}
        >
          <S.Input
            margin="normal"
            label="닉네임"
            fullWidth
            className="title"
            state={warningNickname(nicknamestate)}
            onChange={changeNickNameHandler}
            onKeyUp={enterKey}
          />
          <HelperText
            helper={warningNickname(nicknamestate)}
            content={nickname}
          />
        </FormControl>
        <FormControl
          sx={{
            width: '42ch',
            height: '100px',
          }}
          style={{ marginTop: '10px' }}
        >
          <S.Input
            margin="normal"
            label="이메일"
            fullWidth
            className="title"
            state={warningEmail(emailstate)}
            onChange={changeEmailHandler}
            onKeyUp={enterKey}
          />
          <HelperText helper={warningEmail(emailstate)} content={email} />
        </FormControl>
        <FormControl
          sx={{
            width: '42ch',
            height: '100px',
          }}
          style={{ marginTop: '10px' }}
        >
          <S.Input
            type="password"
            margin="normal"
            label="비밀번호"
            fullWidth
            className="title"
            state={warningPw(pwstate)}
            onChange={changePwHandler}
            onKeyUp={enterKey}
          />
          <HelperText helper={warningPw(pwstate)} content={pw} />
        </FormControl>
      </div>

      <S.Button className="join-button" onClick={clickJoinHandler}>
        회원가입
      </S.Button>
      {flag ? (
        <IsJoinDialog
          flag={flag}
          tapstate={joinstate}
          errorMessage={errorMessage}
          agreeFn={agreeFn}
        />
      ) : null}
    </div>
  );
};

export default JoinTap;
