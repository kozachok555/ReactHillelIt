import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    swapiContent: [],
}

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        getSwapiApi: (state)=>{
            return state
        },
        addSwapiApi: (state, actions)=>{
            return {...state, swapiContent: [...state, actions.payload]}
        }
    }
})
export const {getSwapiApi, addSwapiApi} = swapiSlice.actions;
export default swapiSlice.reducer;