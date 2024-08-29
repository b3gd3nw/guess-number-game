import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import GamePage from './pages/GamePage';
import FlowPage from './pages/FlowPage';

function App() {

  useEffect(() => {

    const tg = window.Telegram.WebApp;

    tg.expand();
    tg.ready();

  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<FlowPage title="Welcome to the game" buttonText="PLAY" nextPage="/game" />} />
          <Route path={'/game'} element={<GamePage />} />
          <Route path={'/win'} element={<FlowPage title="Congratulations! You guessed the number" buttonText="Restart Game" nextPage="/game" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

