import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    swapiContent: [],
}

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        addToList: (state,action)=>{
            return {...state, swapiContent: action.payload}
        }
    }
})
export const {addToList} = swapiSlice.actions;
export default swapiSlice.reducer;