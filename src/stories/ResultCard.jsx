import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultCard = styled.div`
  width: 300px;
  background-color: white;
  box-shadow: 0 0 7px #df7abe;
  display: flex;
  margin: 5px;
  justify-content: space-around;
  border-radius: 5px;
  cursor: pointer;
`;

const ResultImg = styled.img`
  width: 90px;
  height: 90px;
  padding: 10px;
  margin: 5px;
`;

const ResultInfo = styled.div`
  width: 200px;
  height: 100px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  justify-content: center;
`;

const ResultTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const PersonalityCard = ({ src, title, sub, onClick }) => {
  return (
    <ResultCard onClick={onClick}>
      <ResultImg src={src} />
      <ResultInfo>
        <ResultTitle>{title}</ResultTitle>
        <div>{sub}</div>
      </ResultInfo>
    </ResultCard>
  );
};

PersonalityCard.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default PersonalityCard;
