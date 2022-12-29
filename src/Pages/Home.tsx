import { useState } from 'react';
import styled from 'styled-components';
import Dialog from '../Components/Commons/Dialog';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestBtn = styled.button`
  background-color: skyblue;
  width: 100px;
  height: 50px;
`;

const Home = () => {
  const [flag, setFlag] = useState(false);

  const agreeFn = () => {
    setFlag(false);
    return flag;
  };

  const disAgreeFn = () => {
    setFlag(false);
    return flag;
  };

  return (
    <Wrapper>
      <TestBtn onClick={() => setFlag(true)}>HomeBtn</TestBtn>
      <Dialog
        openFlag={flag}
        title="Dialog Home"
        content="Home Screen"
        agreeFn={agreeFn}
        disAgreeFn={disAgreeFn}
      />
    </Wrapper>
  );
};

export default Home;
