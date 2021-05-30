import React from 'react'

import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import { useSelector,useDispatch } from 'react-redux'
import * as appActions from './actions/app.action'
import BoxUseEffect from './components/BoxUseEffect'
export default function App() {
  // react state
  // const [count, setcount] = React.useState(0) 

  const appReducer = useSelector(({appReducer}) => appReducer);
  const dispatch = useDispatch();
  return (
    <div style={{padding:10}}>
      <h1>Anacondong count: {appReducer.count}</h1>

      <div style={{display:'flex',flexDirection:'row'}}>
        <button onClick={()=>dispatch(appActions.add())}>ADD</button>
        <button onClick={()=>dispatch(appActions.remove())}>Remove</button>
        <button onClick={()=>dispatch(appActions.clr(0))}>Clear</button>

      </div>

      
      <Box1 style={{}}/>
      <Box2/>
      <Box3/>
      <hr/>
      <BoxUseEffect/>
    </div>
  )
}
