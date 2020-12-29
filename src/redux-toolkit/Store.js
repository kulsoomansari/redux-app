import {configureStore} from '@reduxjs/toolkit'
import reducer from './CounterSlice'
// import CounterSlice from './CounterSlice';
const store = configureStore({
    reducer: reducer
    // reducer: CounterSlice
})
export default store