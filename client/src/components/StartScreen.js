import React, { useState } from 'react';

export default function StartScreen({ onStartGame }) {
  const [playerName, setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState('single');
  const [boardType, setBoardType] = useState(9);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Prepare the game configuration
    const gameConfig = {
      playerName,
      gameMode,
      boardType,
    };

    // Send the configuration to the Flask backend
    // const response = await fetch('/api/start', {  // No need for localhost:5000
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(gameConfig),
    // });
    // Send the configuration to the Flask backend
    const response = await fetch('http://localhost:5000/api/start', {  // Full URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameConfig),
    });


    if (!response.ok) {
        console.error('Failed to start the game:', response.statusText);
    } else {
        const data = await response.json();
        console.log(data);

        // Call onStartGame with the game configuration to update the App state
        onStartGame(gameConfig); // Pass the game settings to App
    }
  };

  return (
    <div className="start-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player Name:
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Game Mode:
            <select
              value={gameMode}
              onChange={(e) => setGameMode(e.target.value)}
            >
              <option value="single">Single Player</option>
              <option value="multiplayer">Multiplayer</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Board Type:
            <select
              value={boardType}
              onChange={(e) => setBoardType(parseInt(e.target.value))}
            >
              <option value={9}>9 Men's Morris</option>
              <option value={12}>12 Men's Morris</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Start Game</button>
        </div>
      </form>
    </div>
  );
}
