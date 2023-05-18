import logo from "./logo.svg";
import "./App.css";
import Square from "./Square.jsx";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
    setWinner("");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              setWinner={setWinner}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            ></Square>
          );
        })}
        {/* <Square square={square} setSquare={setSquare} player={player} setPlayer={setPlayer}></Square> */}
      </div>
      {winner && <span>Winner: {winner}</span>}
    </div>
  );
}

export default App;
