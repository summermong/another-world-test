import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyles';
import styled from 'styled-components';

import Start from './pages/Start';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const music = useMemo(() => new Audio('./public/music/ost.mp3'), []);

  const handleMusicStart = () => {
    if (!isPlaying) {
      music.play();
      setIsPlaying(true);
    } else {
      music.pause();
      setIsPlaying(false);
    }
  };

  const getMusicIcon = () => {
    return isPlaying ? './public/img/icon/music.png' : './public/img/icon/mute.png';
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };
    music.addEventListener('ended', handleEnded);

    return () => {
      music.removeEventListener('ended', handleEnded);
    };
  }, [music]);

  return (
    <AppContainer>
      <MusicPlayer>
        <Music src={getMusicIcon()} onClick={handleMusicStart} />
      </MusicPlayer>
      <BrowserRouter>
        <GlobalStyles />
        <Background />
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const MusicPlayer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  margin: 10px;
  box-shadow: 0 0 10px #fff;
  cursor: pointer;
`;

const Music = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('./img/background/background.jpg');
  background-size: cover;
  background-position: center center;
  filter: brightness(0.4);
`;

export default App;
