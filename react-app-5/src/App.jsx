import './App.css';
import Smile from './Smile'
function App() {
  return (
    <div className="App">
      <Smile />
      <button onClick={()=>{
          localStorage.clear('smileCounts')
        }}>Clear</button>
    </div>
  );
}

export default App;
