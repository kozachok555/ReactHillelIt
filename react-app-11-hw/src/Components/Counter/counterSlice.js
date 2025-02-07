import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    isLoading: false,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            return {...state, counter: state.counter + 1}
        },
        decrement: (state)=>{
            return {...state, counter: state.counter - 1}
        }
    }
})
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;