import React, { useState } from 'react';

function Square() {
  const [Value, setValue] = useState(null);
  return (
    <button
      className="square"
      onClick={() => {
        setValue('X');
      }}>
      {Value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square Value={i} />;
  }

  render() {
    const status = 'Next Player X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>State</div>
          <ol>Todo</ol>
        </div>
      </div>
    );
  }
}

export default Game;
