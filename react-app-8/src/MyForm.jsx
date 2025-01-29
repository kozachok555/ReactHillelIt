import { useState } from 'react';
import { Form, Field } from 'react-final-form'

const validateTask = (values) =>{
    const errors = {};
    if(!values.todoName){errors.todoName = "Required";}
    return errors;
}

const MyForm = () => {
    const [todoList,setTodoList] = useState([])
    const onSubmit = (value, form) =>{
        setTodoList([...todoList,value.todoName])
        form.reset();
    }
    return(
        <div className='MyForm'>
            My Form
            <Form
                onSubmit={onSubmit}
                validate={validateTask}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>TodoList</h2>
                        <div>
                            <Field name="todoName" component="input" placeholder="Task" />
                        </div>
                        <button type="submit" >Submit</button>
                    </form>
                )}
            />
            <div>Todo: {todoList.map(x=> {
                    return  <p>{x}</p>
                })}
            </div>
        </div>
    )
}
export default MyForm;