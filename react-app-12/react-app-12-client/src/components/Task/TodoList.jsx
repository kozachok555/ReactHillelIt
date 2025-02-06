import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addToList } from "./slice";
const FETCH_URL = "http://localhost:4000/todos";

const fetchApi = () => async (dispatch)=>{
    const response = await fetch(FETCH_URL)
    const data = await response.json();
    dispatch(addToList(data))
}

export default function TodoList() {
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todoList.todoList);
    useEffect(()=>{
        dispatch(fetchApi())
    }, [dispatch])
    return (
        <div>
            <h2>Список дел</h2>
            <div>
                {todoList.map((todo) => (
                    <p key={todo.id}>{todo.name}</p>
                ))}
            </div>
        </div>
    )
}