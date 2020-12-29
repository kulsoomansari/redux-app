import { createSlice } from "@reduxjs/toolkit";

 const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        incAction: state => state +1,
        decAction: state => state -1,
        doubleInc: state => state +2,
        doubleDec: state => state -2
    }
})
export const {incAction, decAction, doubleInc, doubleDec} = CounterSlice.actions;
const reducer = CounterSlice.reducer
export default reducer


// export default CounterSlice.reducer;