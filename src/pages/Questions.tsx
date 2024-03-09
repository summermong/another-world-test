import React, { useState } from 'react';
import styled from 'styled-components';
import themes from '../style/themes';
import { ChoiceButton } from '../stories/Button.stories';
import questionData from '../data/questionData';
import { useNavigate } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import { motion, AnimatePresence } from 'framer-motion';

const Questions = () => {
  const navigate = useNavigate();

  const [curQIdx, setCurQIdx] = useState(0);
  const curQ = questionData[curQIdx];

  const [ie, setIE] = useState(0);
  const [ns, setNS] = useState(0);
  const [tf, setTF] = useState(0);
  const [pj, setPJ] = useState(0);

  const [width, setWidth] = useState(0);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);

  const css = {
    borderRadius: '10px',
  };

  const boxVariants = {
    entry: (back: number) => ({
      x: back ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
      scale: 0.8,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
      scale: 1,
    },
    exit: (back: number) => ({
      x: back ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    }),
  };

  const [back, setBack] = useState(false);

  const handleNextQ = (type: string) => {
    setBack(false);
    if (curQIdx + 1 < questionData.length) {
      setCurQIdx(prevIdx => prevIdx + 1);

      setWidth(((curQIdx + 2) / questionData.length) * 250);

      switch (type) {
        case 'E':
          setIE(prev => prev + 1);
          break;
        case 'S':
          setNS(prev => prev + 1);
          break;
        case 'F':
          setTF(prev => prev + 1);
          break;
        case 'J':
          setPJ(prev => prev + 1);
          break;
        default:
          return;
      }
    } else {
      setIsLoadingOpen(true);
      let mbti = '';

      mbti += ie >= 2 ? 'E' : 'I';
      mbti += ns >= 2 ? 'S' : 'N';
      mbti += tf >= 2 ? 'F' : 'T';
      mbti += pj >= 2 ? 'J' : 'P';

      setTimeout(() => {
        setIsLoadingOpen(false);
        navigate(`/result/${mbti}`);
      }, 5000);
    }
  };

  const handlePrevQ = () => {
    setBack(true);
    if (curQIdx > 0) {
      setCurQIdx(prevIdx => {
        setWidth(((prevIdx - 1) / questionData.length) * 250);
        return prevIdx - 1;
      });
    }
  };

  return (
    <>
      <QuestionContainer>
        <AnimatePresence mode="wait" custom={back}>
          {isLoadingOpen ? (
            <LoadingSpinner>
              이세계로 로딩중...
              <BarLoader
                color={themes.purpleColor}
                height="10px"
                width="250px"
                loading={isLoadingOpen}
                aria-label="Loading Spinner"
                cssOverride={css}
                speedMultiplier={1}
              />
            </LoadingSpinner>
          ) : (
            <motion.div
              custom={back}
              variants={boxVariants}
              initial="entry"
              animate="center"
              exit="exit"
              key={curQIdx}
            >
              <QuestionBox>
                <QuestionNum>Q. {curQ.Num}</QuestionNum>
                <div>{curQ.Q}</div>
              </QuestionBox>

              <BarAndPrevWrapper>
                <PreButton onClick={handlePrevQ}>{'◀️'}</PreButton>
                <ProgressBar>
                  <Progress width={width}>
                    {width === 0 ? '' : ((width / 250) * 100).toFixed(0) + '%'}
                  </Progress>
                </ProgressBar>
              </BarAndPrevWrapper>

              <AnswerBox>
                {curQ.A.map((answer, idx) => (
                  <ChoiceButton
                    key={idx}
                    onClick={() => handleNextQ(answer.type)}
                    label={answer.text}
                  />
                ))}
              </AnswerBox>
            </motion.div>
          )}
        </AnimatePresence>
      </QuestionContainer>
    </>
  );
};

const LoadingSpinner = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 700;
  text-shadow: 0 0 10px ${themes.purpleColor};
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  color: white;
  gap: 10px;
`;

const QuestionBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 16px;
  text-shadow: 0 0 10px ${themes.mintColor};
`;

const QuestionNum = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const BarAndPrevWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;

interface ProgressProps {
  width?: number;
}

const ProgressBar = styled.div<ProgressProps>`
  width: 250px;
  height: 20px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 0 10px ${themes.pinkColor};
  margin: 20px 0px;
  font-size: 12px;
`;

const PreButton = styled.button`
  color: white;
  background: transparent;
  text-shadow: 0 0 10px ${themes.pinkColor};
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: ${themes.purpleColor};
  }
`;

const Progress = styled.div<ProgressProps>`
  width: ${props => props.width}px;
  height: 20px;
  background-color: ${themes.purpleColor};
  border-radius: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding-top: 20px;
`;

export default Questions;
