import React from 'react';
import { EventTrigger } from '../hook/gtag';
import styled from 'styled-components';
import themes from '../style/themes';
import { StartButton } from '../stories/Button.stories';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate('/questions');
    EventTrigger({
      action: '테스트 시작하기',
      category: 'test start',
      label: '테스트 시작하기',
      value: 1,
    });
  };

  return (
    <MainContainer>
      <Main>
        <Title>
          눈을 떴더니<div></div>
          <span>이세계</span>의 뭔가가<div></div>되어버린 <span>나!?</span>
        </Title>
        <StartButton label={'시작하기'} onClick={goToQuestion} />
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
  text-shadow: 0 0 5px ${themes.mintColor};
  font-weight: 700;

  span {
    font-size: 45px;
    text-shadow: 0 0 10px ${themes.pinkColor};
  }
`;

export default Start;
