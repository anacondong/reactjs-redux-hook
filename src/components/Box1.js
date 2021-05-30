import React from 'react'
import { useSelector } from 'react-redux'

export default function Box1() {
    
    const appReducer = useSelector(({appReducer}) => appReducer);

    return (
        <div>
            <h1>B1</h1>
            <h2>User: {appReducer.user.name} / Password: {appReducer.user.password}</h2>
        </div>
    )
}
