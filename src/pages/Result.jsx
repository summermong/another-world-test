import styled, { ThemeProvider } from 'styled-components';
import themes from '../style/themes';
import resultData from '../data/resultData';
import { useRecoilValue } from 'recoil';
import { mbtiResult } from '../atom/MBTIResult';

const Result = () => {
  const result = useRecoilValue(mbtiResult);
  console.log(result);

  return (
    <ThemeProvider theme={themes}>
      <ResultContainer>
        <ResultBox>
          <ImgWrapper>
            <img src={resultData[result]?.src} width={100} height={100} />
          </ImgWrapper>
          <Title>{resultData[result]?.title}</Title>
          <Sub>{resultData[result]?.sub}</Sub>
          <Desc>{resultData[result]?.desc}</Desc>
          <div>
            <div>LIKE: {resultData[result]?.like}</div>
          </div>
          <div>DISLIKE: {resultData[result]?.dislike}</div>
          <div>
            <div>이미지</div>
            <div>
              <div> 잘 맞아요 </div>
              <div> 잘 맞는거 이름</div>
            </div>
          </div>
          <div>WELL: </div>
        </ResultBox>
      </ResultContainer>
    </ThemeProvider>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
`;

const ResultBox = styled.div`
  text-align: center;
  padding: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  margin: 30px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow:
    0 0 15px #fff,
    0 0 15px ${props => props.theme.mainColor};
`;

const Title = styled.h2`
  margin: 5px 0px;
  font-weight: 700;
  text-shadow:
    0 0 3px ${props => props.theme.mainColor},
    0 0 3px ${props => props.theme.purpleColor};
`;

const Sub = styled.h3`
  text-shadow:
    0 0 3px ${props => props.theme.mainColor},
    0 0 3px ${props => props.theme.purpleColor};
`;

const Desc = styled.div`
  width: 100%;
  word-break: break-all;
  white-space: pre-line;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  text-shadow: 0 0 3px ${props => props.theme.purpleColor};
`;

export default Result;
