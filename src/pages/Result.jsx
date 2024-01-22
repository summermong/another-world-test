import styled, { ThemeProvider } from 'styled-components';
import themes from '../style/themes';
import { resultData } from '../data/resultData';
import { MatchData } from '../data/resultData';
import { useRecoilValue } from 'recoil';
import { mbtiResult } from '../atom/MBTIResult';
import { AdButton } from '../stories/Button.stories';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Result = () => {
  const result = useRecoilValue(mbtiResult);

  const { testResult } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!result || result === '') {
      navigate('/error');
    }
  }, []);

  const handleReplay = () => {
    navigate('/');
  };

  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <ThemeProvider theme={themes}>
      <ResultContainer>
        <ResultBox>
          <ImgWrapper>
            <ResultImg src={resultData[result]?.src} />
          </ImgWrapper>
          <Title>{resultData[result]?.title}</Title>
          <Sub>{resultData[result]?.sub}</Sub>
          <Desc>{resultData[result]?.desc}</Desc>
          <MatchWrapper>
            <MatchImg src={`${MatchData[result]?.good.src}`} />
            <MatchInfo>
              <Match> GOOD ❤️ </Match>
              <MatchName>{MatchData[result]?.good.title}</MatchName>
            </MatchInfo>
          </MatchWrapper>
          <MatchWrapper>
            <MatchImg src={`${MatchData[result]?.bad.src}`} />
            <MatchInfo>
              <Match> BAD 💔 </Match>
              <MatchName>{MatchData[result]?.bad.title}</MatchName>
            </MatchInfo>
          </MatchWrapper>
          <AdButton label="광고 보고 전체 결과 보기" />
          <Buttons>
            <ReButton onClick={handleReplay}>{'<< 다시하기'}</ReButton>
            <ShareButton onClick={handleShare}>
              {'공유하기 >>'}
              {isShareOpen ? (
                <ShareMenu>
                  <KaKaoButton color="yellow">카톡</KaKaoButton>
                  <LinkButton color="blue">링크</LinkButton>
                  <SaveButton color="green">저장</SaveButton>
                </ShareMenu>
              ) : (
                ''
              )}
            </ShareButton>
          </Buttons>
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
  /* width: 100vw; */
  position: relative;
  color: white;
`;

const ResultBox = styled.div`
  text-align: center;
  width: 350px;
  padding: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgWrapper = styled.section`
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

const ResultImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h2`
  margin: 5px 0px;
  font-weight: 700;
  text-shadow:
    0 0 3px ${props => props.theme.mainColor},
    0 0 3px ${props => props.theme.purpleColor};
`;

const Sub = styled.h3`
  margin-bottom: 10px;
  text-shadow:
    0 0 3px ${props => props.theme.mainColor},
    0 0 3px ${props => props.theme.purpleColor};
`;

const Desc = styled.section`
  width: 100%;
  word-break: break-all;
  white-space: pre-line;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  text-shadow: 0 0 3px ${props => props.theme.purpleColor};
  padding: 10px 0;
`;

const MatchWrapper = styled.div`
  width: 300px;
  margin: 5px auto;
  display: flex;
  padding: 5px 0px;
  text-shadow:
    0 0 1px #fff,
    0 0 1px ${props => props.theme.mainColor};
`;

const MatchImg = styled.img`
  background-color: white;
  box-shadow:
    0 0 5px #fff,
    0 0 5px ${props => props.theme.mainColor};
  height: 80px;
  width: 80px;
  padding: 15px;
  margin: 10px;
  border-radius: 20%;
`;

const MatchInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  width: 70%;
`;

const Match = styled.div`
  height: 50px;
  line-height: 70px;
  font-size: 20px;
  font-weight: 700;
`;

const MatchName = styled.div`
  height: 50px;
  line-height: 30px;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  padding-top: 30px;
  font-family: 'Heir of Light';
  cursor: pointer;
`;

const ReButton = styled(BaseButton)``;

const ShareButton = styled(BaseButton)`
  position: relative;
`;

const ShareMenu = styled.div`
  width: 120px;
  height: 40px;
  padding: 5px;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: -15px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  color: red;
  cursor: pointer;
`;

const ShareButtons = styled.button`
  border: none;
  border-radius: 25px;
  padding: 5px;
  cursor: pointer;
  ${({ color }) => `background-color: ${color};`};
`;

const KaKaoButton = styled(ShareButtons)`
  background-color: red;
`;

const LinkButton = styled(ShareButtons)`
  background-color: blue;
`;

const SaveButton = styled(ShareButtons)`
  background-color: yellow;
`;

export default Result;
