import React from 'react'
import {useDispatch} from 'react-redux'
import { incAction, decAction } from '../redux-toolkit/CounterSlice'
export default function CounterInput() {
const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(incAction())}>+</button>
            <button onClick={()=>dispatch(decAction())}>-</button>

        </div>
    )
}
