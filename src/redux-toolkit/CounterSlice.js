import { createSlice } from "@reduxjs/toolkit";


 const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        incAction: (state) => state +1,
        decAction: (state) => state -1
    }
})
export const {incAction, decAction} = counterSlice.actions;
const reducer = counterSlice.reducer
export default reducer