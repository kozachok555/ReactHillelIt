import './Counter.css'
import { useSelector, useDispatch } from "react-redux"
import { decrement,increment } from "../Counter/counterSlice"
export default function Counter(){
    const dispatch = useDispatch()
    const count = useSelector((state)=>{
        return state.counter.counter
    })
    return(
        <div className="Counter">
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
        </div>
    )
}