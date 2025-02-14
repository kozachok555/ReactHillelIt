import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    swapiContent: [],
}

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        addToSwapi: (state,action)=>{
            return {...state, swapiContent: action.payload}
        },
        clearSwapiContent: ()=>{
            return {swapiContent: []};
        }
    }
})
export const {addToSwapi, clearSwapiContent} = swapiSlice.actions;
export default swapiSlice.reducer;