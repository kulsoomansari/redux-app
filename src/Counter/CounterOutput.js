import React from 'react'
import {useSelector} from 'react-redux'
export default function CounterOutput() {
    const state = useSelector(state => state.counter)
    return (
        <div>
         counter value: {state}
        </div>
    )
}
