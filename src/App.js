import React from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {incNumber,decNumber,inputNumber} from './actions/index'
export default function App() {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch()
  return (
    <>
    <div className="container">
      <h1>Welcome to Redux</h1>
      <h1>Increment/Decrement counter</h1>
      <div className="quantity">
        <button className="quantity_minus" title="decrement" onClick={()=>dispatch(decNumber())}><span>-</span></button>
        <input name='quantity' type='text' className="quantity_input" value={mystate} onChange={(e)=>dispatch(inputNumber(Number(e.target.value)))}></input>
        <button className="quantity_plus" title='increment' onClick={()=>dispatch(incNumber())}><span>+</span></button>
      </div>
      </div>
    </>
  )
}
