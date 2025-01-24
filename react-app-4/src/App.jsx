import { useState } from 'react';
import './App.css';

function App() {
  const [todoList,setTodoList] = useState([])
  const [newTodoName,setNewTodoName] = useState('')
  return (
    <div className="App">
      <input type="text" value = {newTodoName} onChange={(e)=>{
        setNewTodoName(e.target.value)
      }}/>
      <div>Todo: {todoList.map(x=> {
        return  <p>{x}</p>
      })}</div>
      <button onClick={()=>{
        setTodoList([...todoList,newTodoName])
        setNewTodoName('')
      }}>
        Add new one
      </button>
    </div>
  );
}

export default App;
