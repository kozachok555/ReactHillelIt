import "./TodoList.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
            <TextField id="outlined-basic" label="Task" variant="outlined" value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <Button variant="contained" onClick={()=>{
                setTask([...tasks,text])
                setText('')
            }}>Add</Button>
        </div>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
      <div>
        Tasks: {tasks.map((e)=>{
            return <p>{e}</p>
        })}
      </div>
    </div>
  );
}
