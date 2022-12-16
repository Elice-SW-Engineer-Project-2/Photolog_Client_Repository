import { useState } from 'react';
import * as S from './styled';

const LoginTap = () => {
  const [state, setState] = useState('NORMAL');
  return (
    <>
      <S.Form>
        <div className="title">이메일</div>
        <div>
          <input />
          {state === 'ERROR' ? (
            <div>2자이상 8자 이하로 작성해주세요</div>
          ) : null}
        </div>
      </S.Form>
      <S.Form>
        <div className="title">비밀번호</div>
        <div>
          <input type="password" />
          {state === 'ERROR' ? (
            <div>2자이상 8자 이하로 작성해주세요</div>
          ) : null}
        </div>
      </S.Form>
      <S.Button>로그인</S.Button>
    </>
  );
};

export default LoginTap;
