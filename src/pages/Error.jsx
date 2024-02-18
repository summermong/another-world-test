import styled from 'styled-components';
import themes from '../style/themes';
import { useNavigate } from 'react-router-dom';
import { StartButton } from '../stories/Button.stories';

const Error = () => {
  const navigate = useNavigate('');

  return (
    <ErrorPageContainer>
      <h2>잘못된 접근입니다.</h2>
      <StartButton onClick={() => navigate('/')} label={'메인으로 돌아가기'} />
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  gap: 20px;
  color: white;
  text-shadow: 0 0 5px ${themes.mintColor};
`;

export default Error;
