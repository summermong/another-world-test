import React from 'react';
import styled from 'styled-components';
import { StartButton } from '../stories/Button.stories';

const Start = () => {
  return (
    <MainContainer>
      <Main>
        <Title>
          눈을 떴더니<p></p>
          <span>이세계</span>의 뭔가가<p></p>되어버린 <span>나</span>
        </Title>
        <StartButton />
      </Main>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px #fff;
  font-weight: 700;
  padding-bottom: 50px;

  span {
    font-size: 45px;
    text-shadow: 0 0 10px #df7abe;
  }
`;

export default Start;
