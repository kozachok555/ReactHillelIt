import "./TodoList.scss";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { useState } from "react";
  
export default function TodoList() {
    const [tasks,setTask] = useState([])
    const [text,setText] = useState('')
  return (
    <div className="TodoList">
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="todoList-box">
            <input type="text" className="task-input" placeholder= "Task" onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <Button variant="contained" onClick={()=>{
                setTask([...tasks,text])
                setText('')
            }}>Add</Button>
        </div>
      </Box>
      <div>
        Tasks: {tasks.map((e)=>{
            return <p>{e}</p>
        })}
      </div>
    </div>
  );
}
