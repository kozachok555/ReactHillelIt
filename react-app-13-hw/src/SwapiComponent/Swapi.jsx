import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addToList } from "./swapiSlice";
import './Swapi.css'
// const FETCH_URL = "http://localhost:4000/todos";

const fetchApi = (api) => async (dispatch)=>{
    if (!api) return;
    try{
        const response = await fetch(api)
        const data = await response.json();
        dispatch(addToList(data))
    }catch(e){
        console.log(e)
    }
}
export default function Swapi() {
    const dispatch = useDispatch()
    const swapiContent = useSelector((state) => state.swapiContent.swapiContent);
    const [newText, setText] = useState("")
    useEffect(()=>{
        const delay = setTimeout(()=>{
            if(newText) dispatch(fetchApi(newText));
        },500)
        return() => clearTimeout(delay)
    }, [newText,dispatch])
    return (
        <div>
            <h2>SWAPI</h2>
                <input type="text" onChange={(e)=>{
                        setText(e.target.value)
                }}/>
                <pre className="swapi-box">
                    {JSON.stringify(swapiContent, null,3)}
                </pre>
                <button onClick={()=>{
                    setText("")
                    dispatch(addToList([]))
                }}>Clear</button>
        </div>
    )
}