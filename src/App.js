import './App.css';
import Board from './components/Board';

function App() {
  const board ={
    rows: 8,
    columns: 8,
    mines: 10,
  }
  return (
    <div className="App">
      <Board  board={board}/>
    </div>
  );
}

export default App;
