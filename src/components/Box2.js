import React from 'react'
import { useSelector } from 'react-redux'

export default function Box2() {

    const appReducer = useSelector(({appReducer}) => appReducer);

    return (
        <div>
            <h1>B2 {appReducer.count}</h1>
        </div>
    )
}
