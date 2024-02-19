import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyles';
import themes from './style/themes';
import styled, { ThemeProvider } from 'styled-components';

import Start from './pages/Start';
import Questions from './pages/Questions';
import Result from './pages/Result';
import Results from './pages/Results';
import Error from './pages/Error';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const music = useMemo(() => {
    const audio = new Audio('/music/ost.mp3');
    audio.loop = true;
    return audio;
  }, []);

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
    return isPlaying ? '/img/icon/music.png' : '/img/icon/mute.png';
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
      <BrowserRouter basename="/">
        <MusicPlayer>
          <Music src={getMusicIcon()} onClick={handleMusicStart} alt="음악 플레이어 아이콘" />
        </MusicPlayer>
        <GlobalStyles />
        <ThemeProvider theme={themes}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/result/:testResult" element={<Result />} />
            <Route path="/results" element={<Results />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  position: relative;
  font-family: 'Heir of Light';
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
  box-shadow: 0 0 10px ${themes.pinkColor};
  cursor: pointer;
`;

const Music = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

export default App;
