import React from "react";

const Square = (props) => {
  const {
    index,
    player,
    setPlayer,
    setSquares,
    setWinner,
    squares,
    squareValue,
  } = props;

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
      }
    }
  };

  const handleClick = () => {
    if (!squareValue) {
      if (player) {
        squares.splice(index, 1, "X");
      } else {
        squares.splice(index, 1, "O");
      }
      setSquares(squares);
      setPlayer(!player);
      calculateWinner(squares);
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {squareValue === "O" ? (
        <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" />
      ) : (
        squareValue
      )}
    </div>
  );
};

export default Square;
