import React, { useReducer } from 'react';
import Board from './Board';

const reducer = (state, action) => {
  switch (action.type) {
    case 'JUMP':
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
        mills: [], // reset mills when jumping to a previous move
      };
    case 'MOVE':
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
        mills: action.payload.mills || state.mills, // update mills if a new mill is formed
      };
    default:
      return state;
  }
};

const checkMill = (squares) => {
  const millLines = [
    // Horizontal mills
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [9, 10, 11], [12, 13, 14], [15, 16, 17],
    [18, 19, 20], [21, 22, 23],

    // Vertical mills
    [0, 9, 21], [1, 4, 7], [2, 14, 23],
    [3, 10, 18], [5, 13, 20],
    [6, 11, 15], [8, 12, 17],

    // Diagonal mills
    [0, 3, 6], [2, 5, 8],
    [18, 19, 20], [21, 22, 23]
  ];

  let mills = [];
  for (let i = 0; i < millLines.length; i++) {
    const [a, b, c] = millLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      mills.push([a, b, c]); // Store the mill that was formed
    }
  }
  
  return mills.length > 0 ? mills : null; // Return the list of mills or null if none are formed
};










export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(24).fill(null) }], // Adjusted for a 24-square board
    mills: [],
  });
  
  const { xIsNext, history, mills } = state;

  const jumpTo = (step) => {
    dispatch({ type: 'JUMP', payload: { step } });
  };

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    if (squares[i]) return; // Prevent clicking on an already occupied square

    squares[i] = xIsNext ? 'X' : 'O';
    const newMills = checkMill(squares);

    dispatch({
      type: 'MOVE',
      payload: {
        squares,
        mills: newMills ? newMills : null, // Pass new mills if any were formed
      },
    });
  };

  const current = history[history.length - 1];

  const status = mills && mills.length > 0
    ? 'Mill formed at squares ' + mills.map(mill => `[${mill.join(', ')}]`).join(', ')
    : 'Next player is ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <div className="game-board">
        <Board
          onClick={(i) => handleClick(i)}
          squares={current.squares}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}
