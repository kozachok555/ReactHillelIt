import {Formik} from 'formik';
import { useState } from 'react';
export default function MyForm(){
    const [todoList,setTodoList] = useState([])
        const onSubmit = (value, form) =>{
            setTodoList([...todoList,value.todoName])
            form.reset();
        }
    return(
        <div className="MyForm">
            My Form
            
            <div>Todo: {todoList.map(x=> {
                    return  <p>{x}</p>
                })}
            </div>
        </div>
    )
}
