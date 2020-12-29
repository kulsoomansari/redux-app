import React from 'react'
import {useDispatch} from 'react-redux'
import { incAction, decAction, doubleInc,doubleDec } from '../redux-toolkit/CounterSlice'
export default function CounterInput() {
const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(incAction())}>+</button>
            <button onClick={()=>dispatch(decAction())}>-</button>
            
            <button onClick={()=>dispatch(doubleInc())}>+2</button>
            <button onClick={()=>dispatch(doubleDec())}>-2</button>

        </div>
    )
}
