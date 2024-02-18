import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../style/themes';

const ResultCard = styled.div`
  width: 310px;
  display: flex;
  margin: 5px auto;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImgWrapper = styled.section`
  width: 90px;
  height: 90px;
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

const ResultInfo = styled.div`
  width: 200px;
  height: 100px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ResultTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0px 0px 3px ${themes.pinkColor};
`;

const PersonalityCard = ({ src, title, sub, onClick }) => {
  return (
    <ResultCard onClick={onClick}>
      <ImgWrapper>
        <ResultImg src={src} alt={title} />
      </ImgWrapper>
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
