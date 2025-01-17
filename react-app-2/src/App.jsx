import './App.css';
import { Component } from 'react';
class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      clock: new Date(),
    }
    this.timerID = null;
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.setState({clock: new Date()})
    },1000)
    
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  
  render(){
    return <div>
      {this.state.clock.toString()}
    </div>
  }
}
class States extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: [{id: 1, name:"Test"}],
      newTodoName: ''
    }
  }
  render(){
    return <div>
      <input type="text" value = {this.state.newTodoName} onChange={(e)=>{
        this.setState({newTodoName: e.target.value})
      }}/>
      <div>Todo: {this.state.todoList.map((x)=>{
        return <p>{x.id}{"----->"}{x.name}</p>
      })}
      </div>
      <button onClick={()=>{
        this.setState({todoList: [...this.state.todoList, {id:Math.floor(Math.random() * 1000 + 1000), name:this.state.newTodoName}],newTodoName: '' })
      }}>Add new one</button>
    </div>
  }
}

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        vissible: true,
      }
    }
    render(){
      return (
        <div className="App">
          <States/>
          <button onClick={()=>{
            this.setState({vissible: !this.state.vissible})
          }}>
            Show/Hide
          </button>
          {this.state.vissible && <Clock/>}
        </div>
      );
    }
}

export default App;
