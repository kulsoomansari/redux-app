import React from 'react'
import {useSelector} from 'react-redux'

export default function CounterOutput() {
const state = useSelector(state => state)
    return (
        <div>
            counter no: {state}
        </div>
    )
}
