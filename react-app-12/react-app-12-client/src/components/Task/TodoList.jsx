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
    useEffect(()=>{
        dispatch(fetchApi())
    }, [dispatch])
    return (
        <div>

        </div>
    )
}