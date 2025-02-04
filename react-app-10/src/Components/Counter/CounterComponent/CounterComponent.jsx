import { useSelector, useDispatch } from "react-redux"
import { decrement,increment } from "../slice"
export default function CounterCompnent(){
    const dispatch = useDispatch()
    const count = useSelector((state)=>{
        return state.counter.counter
    })
    return (
        <div>
            <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        ></button>
        </div>
    )
}