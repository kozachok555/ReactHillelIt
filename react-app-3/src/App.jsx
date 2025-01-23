import './App.css';
import { Component } from 'react';
import SmileComponent from './SmileComponent';
class App extends Component {
  render(){
    return (
      <div className="App">
        <SmileComponent/>
        <button onClick={()=>{
          localStorage.clear('smileCounts')
        }}>Clear</button>
      </div>
    );
  }
}

export default App;