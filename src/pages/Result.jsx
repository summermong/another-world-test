import styled from 'styled-components';
import themes from '../style/themes';
import { resultData } from '../data/resultData';
import { MatchData } from '../data/resultData';
import { KatalkButton, LinkButton } from '../stories/Button.stories';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Adfit from '../hook/Adfit';

const Result = () => {
  const { testResult } = useParams();
  const navigate = useNavigate();

  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  const validMbti = [
    'INFP',
    'ENFP',
    'INFJ',
    'ENFJ',
    'INTP',
    'ENTP',
    'INTJ',
    'ENTJ',
    'ISFP',
    'ESFP',
    'ISTP',
    'ESTP',
    'ISFJ',
    'ESFJ',
    'ISTJ',
    'ESTJ',
  ];

  useEffect(() => {
    if (!testResult || !validMbti.includes(testResult)) {
      navigate('/error');
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = false;
    document.head.appendChild(script);

    script.onload = () => {
      handleKaTalkShare();
    };
  }, []);

  const handleReplay = () => {
    navigate('/');
  };

  const handleLinkModal = link => {
    setIsLinkModalOpen(!isLinkModalOpen);
    navigator.clipboard.writeText(link);

    setTimeout(() => {
      setIsLinkModalOpen(false);
    }, '2000');
  };

  const handleCloseLinkModal = () => {
    setIsLinkModalOpen(false);
  };

  const handleKaTalkShare = async () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      const kakaoAPI = import.meta.env.VITE_KAKAOTALK_APP_KEY;

      if (!kakao.isInitialized()) {
        await new Promise(resolve => kakao.init(kakaoAPI, resolve));
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${resultData[testResult]?.title}`,
          description: '이세계에서의 직업을 확인해보세요!',
          imageUrl: `${import.meta.env.VITE_WEBSITE_URL}${resultData[testResult]?.src}`,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '직업 확인하기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <ResultContainer>
      <ResultBox>
        <ImgWrapper>
          <ResultImg src={resultData[testResult]?.src} alt={`${resultData[testResult]?.title}`} />
        </ImgWrapper>
        <Title>{resultData[testResult]?.title}</Title>
        <Desc>{resultData[testResult]?.desc}</Desc>
        <MatchWrapper>
          <MatchResult>
            <MatchImgWrapper>
              <MatchImg
                src={`${MatchData[testResult]?.good.src}`}
                alt={`${MatchData[testResult]?.good.title}`}
              />
            </MatchImgWrapper>
            <MatchInfo>
              <Match> ❤️ {MatchData[testResult]?.good.title} </Match>
            </MatchInfo>
          </MatchResult>
          <MatchResult>
            <MatchImgWrapper>
              <MatchImg
                src={`${MatchData[testResult]?.bad.src}`}
                alt={`${MatchData[testResult]?.bad.title}`}
              />
            </MatchImgWrapper>
            <MatchInfo>
              <Match> 💔 {MatchData[testResult]?.bad.title} </Match>
            </MatchInfo>
          </MatchResult>
        </MatchWrapper>
        <ShareButton>
          <KatalkButton onClick={handleKaTalkShare} label={'카카오톡 공유하기'} />
          <LinkButton
            onClick={() => handleLinkModal(window.location.href)}
            label={'링크 복사하기'}
          />
        </ShareButton>
        <EtcButtons>
          <EtcButton onClick={handleReplay}>{'<< 다시 하기'}</EtcButton>
          <EtcButton onClick={() => navigate('/results')}>{'전체 결과 >>'}</EtcButton>
        </EtcButtons>

        {isLinkModalOpen && (
          <ModalBackdrop onClick={handleCloseLinkModal}>
            <ShareModal>
              <p>복사 완료!</p>
            </ShareModal>
          </ModalBackdrop>
        )}
        <Adfit unit={'DAN-rjWFQP1lygxFUCzt'} width={320} height={50} />
      </ResultBox>
    </ResultContainer>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareModal = styled.div`
  background-color: white;
  box-shadow: 0 0 10px ${themes.pinkColor};
  border-radius: 3px;
  padding: 20px;
  z-index: 100;
  width: 150px;
  font-weight: 700;
  color: black;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ResultBox = styled.div`
  text-align: center;
  width: 350px;
  padding: 10px 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgWrapper = styled.section`
  width: 100px;
  height: 100px;
  display: flex;
  margin: 15px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow:
    0px 0px 15px ${themes.purpleColor},
    0px 0px 15px ${themes.pinkColor};
`;

const ResultImg = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.h2`
  margin: 5px 0px;
  padding-top: 5px;
  font-weight: 700;
  text-shadow:
    0px 0px 3px ${themes.pinkColor},
    0px 0px 3px ${themes.purpleColor};
`;

const Desc = styled.section`
  width: 100%;
  word-break: break-all;
  white-space: pre-line;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  text-shadow: 0px 0px 3px ${themes.pinkColor};
`;

const MatchWrapper = styled.div`
  margin: 0px auto;
  margin-bottom: 10px;
  height: 130px;
  display: flex;
  align-items: center;
`;

const MatchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0px auto;
`;

const MatchImgWrapper = styled.section`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow:
    0px 0px 15px ${themes.purpleColor},
    0px 0px 15px ${themes.pinkColor};
`;

const MatchImg = styled.img`
  width: 40px;
  height: 40px;
`;

const MatchInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  gap: 5px;
  font-weight: 700;
`;

const Match = styled.div`
  font-size: 14px;
`;

const ShareButton = styled.div`
  padding: 20px 0px;
`;

const EtcButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
`;

const EtcButton = styled(EtcButtons)`
  border: none;
  cursor: pointer;
`;

export default Result;
