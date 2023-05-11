import logo from './logo.svg';
import './App.css';
import Square from './Square.jsx';

function App() {
  let keldon = 'keldon is kinda kool';
  return (
    <div className="App">
      <Square propVar={keldon}></Square>
    </div>
  );
}

export default App;
