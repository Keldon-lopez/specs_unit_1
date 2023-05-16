import logo from './logo.svg';
import './App.css';
import Square from './Square.jsx';
import { useState } from 'react';


function App() {
  const [squares, setSquares] = useState(['','','','','','','','','']);
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <div className='container'>
        {squares.map((value,index) => {
          return <Square squares={squares} setSquares={setSquares} player={player} setPlayer={setPlayer} squareValue={value} index={index}></Square>
        })}
      {/* <Square square={square} setSquare={setSquare} player={player} setPlayer={setPlayer}></Square> */}
      </div>
    </div>
  );
}

export default App;
