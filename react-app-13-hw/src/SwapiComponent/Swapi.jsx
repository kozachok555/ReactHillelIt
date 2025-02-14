import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addToSwapi, clearSwapiContent } from "./swapiSlice";
import './Swapi.css'
// const FETCH_URL = "http://localhost:4000/todos";

const fetchApi = (api) => async (dispatch)=>{
    if (!api) return;
    try{
        const response = await fetch(api)
        const data = await response.json();
        dispatch(addToSwapi(data))
    }catch(e){
        console.log(e)
    }
}
export default function Swapi() {
    const dispatch = useDispatch()
    const swapiContent = useSelector((state) => state.swapiContent.swapiContent);
    const [newText, setText] = useState("")
    return (
        <div>
            <h2>SWAPI</h2>
            <div>
                <input type="text" value={newText} onChange={(e)=>{
                        setText(e.target.value)
                }}/>
                <button onClick={()=>{
                    dispatch(fetchApi(newText))
                    setText("")
                }}>Search</button>
            </div>
                 <pre className="swapi-box">
                        {JSON.stringify(swapiContent, null,3)}
                    </pre>
                <button onClick={()=>{
                    setText("")
                    dispatch(clearSwapiContent())
                }}>Clear</button>
        </div>
    )
}