import { useState } from 'react';
import './TodoList.css'

function TodoList(){
    const [newTodoName,setNewTodoName] = useState('')
    const [todoList,setTodoList] = useState([])

    const handleDelete = (id) => {
        setTodoList(todoList.filter((x) => x.id !== id));
    };
    return(
        <div className='TodoList'>
            <h1 className='h1-text'>Список задач</h1>
            <div className='input-container'>
                <input type="text" value={newTodoName} onChange={(e)=>{
                    setNewTodoName(e.target.value)
                }}/>
                <button className="button-add" onClick={()=>{
                    setTodoList([...todoList, {id: Date.now(), name: newTodoName}])
                    setNewTodoName('')
                }}>Add new one</button>
            </div>
            <div className='todo-items'>
                {todoList.length > 0 ? (
                    todoList.map((x) => (
                        <div key={x.id} className='todo-item'>
                            <p>{x.name}</p>
                            <button className="button-delete" onClick={() => handleDelete(x.id)}>
                                Удалить
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='empty'>Empty</p>
                )}
            </div>
        </div>
    )
}
export default TodoList;