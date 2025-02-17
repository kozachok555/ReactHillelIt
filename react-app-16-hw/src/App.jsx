import { useState } from 'react';
import './App.css';

function App() {
  const [vissible,setVisible] = useState(false)
  const [text,setText] = useState('')
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
        <h1>TODO</h1>
        <input placeholder='input value' type="text" value={text} onChange={(e)=>{
          setVisible(true)
          setText(e.target.value)
        }}/>
        <button onClick={()=>{
          setTodoList([...todoList,text])
          setVisible(false)
          setText('')
        }}>Add</button>
        <div data-textid="value-element"> 
            {vissible && <p>typing...</p>}
           {todoList.map((e)=>{return <p>{e}</p>})}
        </div>
    </div>
  );
}

export default App;
