import './TodoList.css'
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'
import { addToList } from "./todoListSlice"
export default function TodoList(){
    const dispatch = useDispatch()
    const todoList = useSelector((state)=>{
        return state.todoList.todoList
    })
    const [newTodoName, setNewTodoName] = useState("")
    
    return(
        <div className="TodoList">
            <h1 className='h1-text'>Список задач</h1>
            <div className='input-container'>
                <input type="text" value={newTodoName} onChange={(e)=>{
                    setNewTodoName(e.target.value)
                }}/>
                <button className="button-add" onClick={()=>{
                   dispatch(addToList({ id: Date.now(), name: newTodoName }))
                   setNewTodoName('')
                }}>Add new one</button>
            </div>
            {todoList.map((x)=>{
                return <p>{x.name}</p>
            })}
            <p className="task-counter">Количество задач: {todoList.length}</p>
        </div>
    )
}