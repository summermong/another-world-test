import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyles';
import themes from './style/themes';
import styled, { ThemeProvider } from 'styled-components';

import Start from './pages/Start';
import Questions from './pages/Questions';
import Result from './pages/Result';
import ReactGA from 'react-ga4';

import Results from './pages/Results';
import Error from './pages/Error';
import React from 'react';

function App() {
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(`${import.meta.env.VITE_GA}`);
    }
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const musicFile = new URL(`../src/assets/music/ost.mp3`, import.meta.url).href;
  const music = useMemo(() => {
    const audio = new Audio(`${musicFile}`);
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

  const musicPlayerImgUrl = new URL(`../src/assets/img/icon/music.png`, import.meta.url).href;
  const muteImgUrl = new URL(`../src/assets/img/icon/mute.png`, import.meta.url).href;

  const getMusicIcon = () => {
    return isPlaying ? `${musicPlayerImgUrl}` : `${muteImgUrl}`;
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <AppContainer>
      <BrowserRouter basename="/">
        <MusicPlayer onClick={handleMusicStart}>
          <Music src={getMusicIcon()} alt="음악 플레이어 아이콘" />
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
`;

const MusicPlayer = styled.button`
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
  border: none;
  cursor: pointer;
`;

const Music = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

export default App;
