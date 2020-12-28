import {configureStore} from '@reduxjs/toolkit'
import {countreducer} from './Reducer'

const store = configureStore({
    reducer: countreducer
})
export default store