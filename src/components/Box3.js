import React from 'react'
import { useSelector } from 'react-redux'

export default function Box3() {

    const appReducer = useSelector(({appReducer}) => appReducer);

    return (
        <div>
            <h1>B3</h1>
            <h2>user Object:{ JSON.stringify(appReducer.user) }</h2>
        </div>
    )
}
