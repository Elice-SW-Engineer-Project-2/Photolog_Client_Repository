import { useState } from 'react';
import { useRecoilState } from 'recoil';
import FormControl from '@mui/material/FormControl';
import { client } from '../../../../axiosInstance';
import * as S from './styled';
import {
  validateEmail,
  warningEmail,
  state,
  IsfindpwDialog,
} from '../../Utils';
import { MODE } from '../../Atoms';
import HelperText from '../HelperText';

const enterKey = (e: any) => {
  if (e.keyCode === 13 || e.code === 'Enter' || e.key === 'Enter') {
    const loginButton: HTMLButtonElement | null =
      document.querySelector('.find-button');
    loginButton?.click();
  }
};

const FindPwTap = () => {
  const [mode, setMode] = useRecoilState(MODE);
  const [findpwstate, setFindPwState] = useState<string>(state.NORMAL);
  const [emailstate, setEmailState] = useState<string>(state.NORMAL);

  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(false);

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
  const clickFindPwHandler = async () => {
    if (!(emailstate === state.SUCCESS)) {
      return;
    }
    try {
      const result = await client.post(`/auth/resetPassword`, {
        email,
      });
      setFindPwState(state.SUCCESS);
      setFlag(true);
      setFlag(true);
    } catch (err: any) {
      setFindPwState(state.ERROR);
      setErrorMessage(err.response.data.message);
      setFlag(true);
    }
  };
  const agreeFn = () => {
    setFlag(false);
    if (findpwstate === state.SUCCESS) setMode('login');

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
          gap: '16px',
        }}
      >
        <S.InfoTop>???????????? ?????? ????????? ????????? ??????????????????</S.InfoTop>
        <FormControl
          sx={{
            width: '42ch',
            height: '100px',
          }}
          style={{ marginTop: '10px' }}
        >
          <S.Input
            margin="normal"
            label="?????????"
            fullWidth
            className="title"
            state={warningEmail(emailstate)}
            onChange={changeEmailHandler}
            onKeyUp={enterKey}
          />
          <HelperText helper={warningEmail(emailstate)} content={email} />
        </FormControl>

        <S.InfoBottom>
          <ul>
            <li>????????? ????????? ?????? ??????????????? ???????????????</li>
            <li>????????? ??? ??? ??????????????? ??????????????????</li>
          </ul>
        </S.InfoBottom>
      </div>

      <S.Button className="find-button" onClick={clickFindPwHandler}>
        ?????? ???????????? ??????
      </S.Button>
      <IsfindpwDialog
        flag={flag}
        tapstate={findpwstate}
        errorMessage={errorMessage}
        agreeFn={agreeFn}
      />
    </div>
  );
};

export default FindPwTap;
