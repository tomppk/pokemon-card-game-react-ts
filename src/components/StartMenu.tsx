import { useEffect, useState } from 'react';

const StartMenu = () => {
  // Component level state with default values
  const [playerName, setPlayerName] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [deckArt, setDeckArt] = useState('standard');

  // useEffect invokes callback when StartMenu component is rendered first
  // time
  useEffect(() => {
    // Prevent submitting of start menu form
    const startMenuForm = document.getElementById('startMenuForm');
    if (startMenuForm)
      startMenuForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

    // Selector for start menu form label
    const labels = document.querySelectorAll('.form-control label');

    // Animation for "Enter your name" input in start menu form
    labels.forEach((label) => {
      if (label.textContent)
        label.innerHTML = label.textContent
          .split('')
          .map(
            (letter: string, idx: number) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join('');
    });
  }, []);

  // Function to initialize new game
  const initializeGame = () => {
    console.log(playerName);
    console.log(difficulty);
    console.log(deckArt);
  };

  // JSX to render
  return (
    <div id="startMenuContainer">
      <h1>Pokemon Card Game</h1>
      <form id="startMenuForm" autoComplete="off">
        <div className="form-control">
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            type="text"
            required
          />
          <label>Enter Your Name</label>
        </div>

        <div id="selectElement">
          <label>Select Difficulty: </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div id="selectDeck">
          <label>Select Deck:</label>

          <select
            value={deckArt}
            onChange={(e) => setDeckArt(e.target.value)}
            id="deck">
            <option value="standard">Standard</option>
            <option value="dream-world">Dream World</option>
            <option value="official-artwork">Official Artwork</option>
          </select>
        </div>
        <button onClick={initializeGame} className="btn" id="newGameButton">
          Start a New Game
        </button>
      </form>
    </div>
  );
};

export default StartMenu;
