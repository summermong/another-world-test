import { useState } from 'react';
import styled from 'styled-components';
import { ChoiceButton } from '../stories/Button.stories';
import questionData from '../data/questionData';

const Questions = () => {
  const [curQIdx, setCurQIdx] = useState(0);

  const handleNextQ = type => {
    setCurQIdx(prevIdx => prevIdx + 1);
    console.log(type);
  };

  const curQ = questionData[curQIdx];

  console.log(curQ.Num);

  return (
    <QuestionContainer>
      <QuestionBox>
        <QuestionNum>Q. {curQ.Num}</QuestionNum>
        <div>{curQ.Q}</div>
      </QuestionBox>
      <ProgressBar />
      <AnswerBox>
        {curQ.A.map((answer, idx) => (
          <ChoiceButton
            key={idx}
            onClick={() => handleNextQ(answer.type)}
            label={answer.text}
            answer={answer}
          />
        ))}
      </AnswerBox>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  color: white;
`;

const QuestionBox = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0px;
  text-shadow: 0 0 10px #df7abe;
`;

const QuestionNum = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 3px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 0 10px #df7abe;
  margin: 20px 0px;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 50vh;
  gap: 20px;
  padding-top: 20px;
`;

export default Questions;
