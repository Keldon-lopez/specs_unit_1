import logo from './logo.svg';
import './App.css';
import Square from './Square.jsx';
import { useState } from 'react';


function App() {
  const [square, setSquare] = useState(['','','','','','','','','']);
  const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <Square square={square} setSquare={setSquare} player={player} setPlayer={setPlayer}></Square>
    </div>
  );
}

export default App;
