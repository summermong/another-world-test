import styled from 'styled-components';
import PersonalityCard from '../stories/ResultCard';
import { resultData } from '../data/resultData';
import { useNavigate } from 'react-router-dom';
import Adfit from '../hook/Adfit';

const Results = () => {
  const navigate = useNavigate('');
  return (
    <ResultContainer>
      <ResultList>
        <Title>전체 결과</Title>
        {Object.keys(resultData).map(key => {
          const { src, title } = resultData[key];
          return (
            <PersonalityCard
              key={key}
              src={src}
              title={title}
              onClick={() => navigate(`/result/${key}`)}
            />
          );
        })}
        <EtcButtons>
          <EtcButton onClick={() => navigate(-1)}>{'<< 뒤로 가기'}</EtcButton>
          <EtcButton onClick={() => navigate('/')}>{'다시 하기 >>'}</EtcButton>
        </EtcButtons>
        <Adfit unit={'DAN-SGjklGCZThRETP4c'} width={320} height={100} />
      </ResultList>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 700;
  text-shadow:
    0px 0px 3px #df7abe,
    0px 0px 3px #bf8df2;
  color: white;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 20px;
`;

const EtcButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;

const EtcButton = styled(EtcButtons)`
  border: none;
  cursor: pointer;
`;

export default Results;
