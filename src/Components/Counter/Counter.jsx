import { Button } from '@mui/material'
import React, { useState } from 'react'

export const Counter = () => {

    const[count,setCount]=useState(0) 
    const handleCounter=(val)=>{
      setCount(count+val)
    }
  return (
    <div>
      <Button variant='contained' color='success' onClick={()=>handleCounter(+1)}>
        Increment
      </Button>
        {/* <h1>Counter</h1> */}
        <h1>{count}</h1>
        <Button variant='contained' color='error' disabled={count <=0}
        onClick={()=>handleCounter(-1)}>Decrement </Button>

    </div>
  )
}
