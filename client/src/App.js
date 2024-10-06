import React, { useState } from 'react';
import './App.css';  // Optional: General app-wide styles
import Game from './components/Game';
import StartScreen from './components/StartScreen';

function App() {
  const [gameSettings, setGameSettings] = useState(null);

  const handleStartGame = (settings) => {
    setGameSettings(settings);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Play Nine or Twelve Men's Morris</h1>
        </header>
        <main>
          {!gameSettings ? (
            <StartScreen onStartGame={handleStartGame} />
          ) : (
            <Game settings={gameSettings} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
