import styles from "./counter.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Increment } from "./Redux/counterAction";
import { Decrement } from "./Redux/counterAction";



function Counter() {


  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)

  return (
    <div className="counter_app">
    
    <h1>Counter Application</h1>

    <div className="counter">
    <button className="increment" onClick={()=>dispatch(Increment())}>Increment</button>
    <h2>{counter}</h2>
    <button className="decrement" onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter