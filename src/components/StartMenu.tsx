import React from 'react';

const StartMenu = () => {
  return (
    <div id="startMenuContainer">
      <h1>Pokemon Card Game</h1>
      <form id="startMenuForm" autoComplete="off">
        <div className="form-control">
          <input type="text" name="playerName" required />
          <label>Enter Your Name</label>
        </div>

        <div id="selectElement">
          <label>Select Difficulty: </label>

          <select name="difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div id="selectDeck">
          <label>Select Deck:</label>

          <select name="deck" id="deck">
            <option value="standard">Standard</option>
            <option value="dream-world">Dream World</option>
            <option value="official-artwork">Official Artwork</option>
          </select>
        </div>
        <button className="btn" id="newGameButton">
          Start a New Game
        </button>
      </form>
    </div>
  );
};

export default StartMenu;
